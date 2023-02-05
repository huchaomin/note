---
title: tabs
---

## QTabs

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| model-value | Number/String/null/undefined | | current panel name |
| breakpoint | Number/String | 600 | Breakpoint (in pixels) of tabs container width at which the tabs automatically turn to a justify alignment |
| vertical | Boolean | false | Display tabs vertically |
| outside-arrows | Boolean | false | Reserve space for arrows to place them on each side of the tabs (the arrows fade when inactive) |
| mobile-arrows | Boolean | false | Force display of arrows (if needed) on mobile |
| align | String | 'center' | Horizontal alignment the tabs within the tabs container |
| stretch | Boolean | false | When used on flexbox parent, tabs will stretch to parent's height |
| shrink | Boolean | false | By default, QTabs is set to grow to the available space; However, you can reverse that with this prop; Useful (and required) when placing the component in a QToolbar |
| left-icon | String | 'arrow_left' | Icon to use for the left arrow (when needed) |
| right-icon | String | 'arrow_right' | Icon to use for the right arrow (when needed) |
| switch-indicator | Boolean | false | Switches the indicator position (on left of tab for vertical mode or above the tab for default horizontal mode) |
| narrow-indicator | Boolean | false | Allows the indicator to be the same width as the tab's content (text or icon), instead of the whole width of the tab |
| inline-label | Boolean | false | Allows the text to be inline with the icon, should one be used |
| no-caps | Boolean | false | Turns off capitalizing all letters within the tab (which is the default) |
| active-color | String | 'primary' | The color to be attributed to the text of the active tab |
| active-bg-color | String | 'primary' | The color to be attributed to the background of the active tab |
| indicator-color | String | 'primary' | The color to be attributed to the indicator (the underline) of the active tab |
| content-class | String | | Class definitions to be attributed to the content wrapper |
| active-class | String | | The class to be set on the active tab |
| dense | Boolean | false | Dense mode; occupies less space |

## QTab

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| name | Number/String | | Unique name of the tab |
| tabindex | Number/String | 0 | tabindex HTML attribute |
| disable | Boolean | false | Disable this tab |
| content-class | String | | Class definitions to be attributed to the content wrapper |
| ripple | Boolean/Object |  | Configure material ripple |
| icon | String | | Icon name |
| label | String | | Tab label |
| alert |  Boolean/String |  | Adds an alert symbol to the tab |
| alert-icon | String |  | Icon to use for the alert |
| no-caps | Boolean | false | Turns off capitalizing all letters within the tab (which is the default) |

## QRouteTab

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| to | String/Object | | Equivalent to Vue Router \<router-link\> 'to' property; |
| exact | Boolean | false | Equivalent to Vue Router \<router-link\> 'exact' property; |
| replace | Boolean | false | Equivalent to Vue Router \<router-link\> 'replace' property; |
| active-class | String |  | Equivalent to Vue Router \<router-link\> 'active-class' property |
| exact-active-class | String |  | Equivalent to Vue Router \<router-link\> 'active-class' property |
| href | String |  | Native \<a\> link href attribute; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props |
| target | String |  | Native \<a\> link target attribute |
