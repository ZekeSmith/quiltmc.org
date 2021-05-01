# This plugin implements the system for adding data about the nesting of pages
# on the wiki to the site data.

require_relative './nesting/group.rb'
require_relative './nesting/breadcrumbs.rb'

Liquid::Template.register_tag('group_breadcrumbs', PageNesting::GroupBreadcrumbs)

# After Jekyll has read all data, find collections with nesting enabled and add
# documents to their groups.
Jekyll::Hooks.register :site, :post_read do |site|
  site.config['groups'] = {}

  for collection in site.collections.values
    # Group documents only if nesting is enabled for this collection.
    if collection.metadata['nest']
      # Set up the root group for this collection.
      root_group = PageNesting::PageGroup.new(collection)
      site.config['groups'][collection.label] = root_group
      collection.metadata['group'] = root_group

      for doc in collection.docs
        # Get the path to the folder containing the document, which is used as
        # a key for grouping, then add the document to the associated group.
        root_group.lookup(PageNesting.group_path(doc)).add_document(doc)
      end
    end
  end
end

