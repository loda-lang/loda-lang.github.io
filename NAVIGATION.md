# Navigation Simplification

## Overview

The navigation for the LODA website has been centralized to a single location to eliminate duplication and make it easier to maintain.

## Changes Made

### 1. Created Central Navigation Data File
- **File**: `_data/navigation.yml`
- **Purpose**: Defines all navigation links in one place
- **Format**: YAML array of navigation items with title and URL

### 2. Created Reusable Navigation Include
- **File**: `_includes/navigation.html`
- **Purpose**: Renders navigation links from the central data file
- **Features**: 
  - Supports active page highlighting
  - Can be used in both Jekyll layouts and standalone pages

### 3. Updated Header Template
- **File**: `_includes/header.html`
- **Changes**:
  - Removed dynamic page sorting logic (`nav_order`)
  - Removed conditional title logic (`short_title` vs `title`)
  - Now uses `{% include navigation.html %}` to render navigation

### 4. Updated Programs Page
- **File**: `programs.html`
- **Changes**:
  - Added Jekyll front matter to enable processing
  - Replaced hardcoded navigation with `{% include navigation.html active_url="..." %}`

### 5. Cleaned Up Markdown Files
- **Files**: `spec.markdown`, `install.markdown`, `contributing.md`, `mcp.md`
- **Changes**: Removed `nav_order` and `short_title` from front matter (no longer needed)

## How to Update Navigation

To add, remove, or reorder navigation items, edit `_data/navigation.yml`:

```yaml
items:
  - title: "Programs"
    url: "https://loda-lang.org/programs"
    external: true
  - title: "New Page"
    url: "/new-page"
```

The navigation will automatically update across all pages.

## Benefits

1. **Single Source of Truth**: Navigation is defined in one place
2. **Easier Maintenance**: Changes to navigation only need to be made once
3. **No Duplication**: Eliminated duplicate navigation code in multiple files
4. **Cleaner Markdown**: Front matter is simpler without navigation metadata
5. **Consistency**: Navigation order and titles are consistent across all pages
