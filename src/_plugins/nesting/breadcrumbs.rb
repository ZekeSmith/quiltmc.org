module PageNesting
  # Renders a breadcrumb nav based on the current page's group and parents.
  class GroupBreadcrumbs < Liquid::Tag
    def render(context)
      items = []
      page = context.registers[:page]
      group = page['group']
      until group == nil
        items.prepend "<a href=\"#{group.index.url}\">#{group.title}</a>"
        group = group.parent
      end
      group = page['group']
      unless page.url == group.index.url
        items.append "<a href=\"#{page.url}\">#{page.title}</a>"
      end
      # Return items concatenated together, separated by separator icons
      items.join('<i class="separator"></i>')
    end
  end
end

