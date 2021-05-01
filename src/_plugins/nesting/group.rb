module PageNesting
  # Given a `Document`, returns a path that can be used to `lookup` the
  # document's group.
  def self.group_path(doc)
    split_doc_path(doc.collection, doc.path)[0..-2]
  end

  # Given a document path and collection, strip the collection's path from the
  # beginning, and return a list of each path component past that.
  def self.split_doc_path(collection, path)
    if File.identical?(path, collection.directory)
      []
    else
      parts = File.split(path)
      left = split_doc_path(collection, parts[0])
      left + [parts[1]]
    end
  end

  # Represents a page "group" within a nested collection. Each group has an
  # "index" document for the group, and multiple children, which could be groups
  # themselves, or just single pages within this group.
  class PageGroup
    attr_reader :site, :collection
    attr_reader :id, :title, :children, :parent

    # Init given a collection and path to this group's folder.
    def initialize(collection, id='', parent=nil)
      @site = collection.site
      @collection = collection

      @title = ''
      @id = id
      @parent = parent
      @children = {}
      # Set to false if there is another group that is a child of this one.
      # Used for navigation menus.
      @no_child_groups = true
    end

    # Finds a child within this group based on the given group path.
    #
    # `path` should be a list of strings where each string is a component of the
    # path.
    #
    # If `create` is true, the child and all parents along the path will be
    # created. Otherwise, nil is returned if they don't exist.
    def lookup(lpath, create=true)
      if lpath == nil or lpath.length == 0
        self
      else
        # Get the first component of the path and find it in our children.
        lookid = lpath[0]
        rest = lpath[1..-1]
        if children.key?(lookid)
          # If the child already exists, look up the remaining path in the child.
          children[lookid].lookup(rest)
        elsif create
          # If no child exists and `create` is true, create a new group with this
          # as parent.
          child = PageGroup.new(collection, lookid, self)
          children[lookid] = child
          @no_child_groups = false
          child.lookup(rest)
        else
          # Otherwise we found nothing. Return nil.
          nil
        end
      end
    end

    # Adds a new document to this group and updates things accordingly.
    def add_document(doc)
      id = doc.basename_without_ext
      if id == 'index'
        @title = doc.data['title']
        @index = doc
      else
        @children[id] = doc
      end
      doc.data['group'] = self
    end

    # True if this is the top-level group for its collection.
    def top?
      parent == nil
    end

    # Gets the top-level parent of this group.
    def top
      g = self
      while g.parent
        g = g.parent
      end
      g
    end

    # Gets the index page. If no page named `index` exists in this group, prints
    # a warning and returns the first child.
    def index
      if @index
        @index
      else
        puts "Warning: group #{id} has no index"
        children[0]
      end
    end

    # Returns the parent of this group, or itself if it's the top group.
    def parent_or_self
      if parent
        parent
      else
        self
      end
    end

    def to_s
      "Group #@title: #@pages"
    end

    def to_liquid
      {
        'title' => title,
        'id' => id,
        'index' => index,
        'url' => index.url,
        'children' => children.values,
        'is_group' => true,
        'is_top' => top?,
        'no_child_groups' => @no_child_groups,
        'parent' => parent,
        'parent_or_self' => parent_or_self
      }
    end
  end
end

