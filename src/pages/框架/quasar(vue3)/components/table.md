---
title: table
---

## props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| columns | Array of Objects |  |  |
| rows | Array of Objects |  | Rows of data to display |
| row-key | String/Function | | unique key of each row, must be a primitive |
| loading | Boolean | false | Put Table into 'loading' state |
| separator | String | 'horizontal' | horizontal/vertical/cell/none |
| selection | String | 'none' | none/single/multiple |
| selected | Array |  | v-model:selected="selection" |
| selected-rows-label | String |  | '5 rows are selected' |
| no-data-label | String |  | Override default text to display when no data is available |
| no-results-label | String |  | Override default text to display when user filters the table and no matched results are found |
| loading-label | String |  | Override default text to display when table is in loading state |
| wrap-cells | Boolean | false | Wrap text within table cells |
| hide-header | Boolean | false | Hide Table header |
| hide-bottom | Boolean | false | Hide table bottom layer regardless of what it has to display |
| hide-selected-banner | Boolean | false | Hide the selected rows banner (if any) |
| hide-no-data | Boolean | false | Hide the default no data bottom layer |
| hide-pagination | Boolean | false | Hide pagination controls |
| visible-columns | Array |  | Array of Strings defining column names  |
| title | String |  | Table title |
| grid | Boolean | false | Display data as a grid instead of the default table |
| grid-header | Boolean | false | Display header for grid-mode also |
| fullscreen | Boolean | false | v-model:fullscreen="isFullscreen" |
| no-route-fullscreen-exit | Boolean | false | Changing route app won't exit fullscreen |
| filter | | |  |
| filter-method | | |  |
| binary-state-sort | | |  |
| column-sort-order | | |  |
| sort-method | | |  |
| expanded | Array |  | Keeps the array with expanded rows keys |
| virtual-scroll | | | |
| virtual-scroll-slice-size | | | |
| virtual-scroll-slice-ratio-before | | | |
| virtual-scroll-slice-ratio-after | | | |
| virtual-scroll-item-size | | | |
| virtual-scroll-target | Element/String |  | |
| virtual-scroll-sticky-size-start | Element/String |  | |
| virtual-scroll-sticky-size-end | Element/String |  | |
| table-colspan | | | ???? |

### props.columns

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| name | String - required! |  | Unique id, identifies column, (used by pagination.sortBy, 'body-cell-[name]' slot, ...) |
| label | String |  | Column header label |
| field | String/Function - required! | | name/row => row.prices.active |
| align | String | right | left/center/right |
| format | Function |  | Function you can apply to format your data |
| style | String/Function |  | Style to apply on normal cells of the column |
| headerStyle | String/Function |  | Style to apply on header cells of the column |
| classes | String/Function |  | Classes to apply on normal cells of the column |
| headerClasses | String/Function |  | Classes to apply on header cells of the column |
| sortable | Boolean | false | |
| sort | Function |  | |
| sortOrder | String | ad | Set column sort order: 'ad' (ascending-descending) or 'da' (descending-ascending); Overrides the 'column-sort-order' prop |
| required | Boolean | false | If we use visible-columns, this col will always be visible |

### style props

color、dense、dark、flat、bordered、square
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| table-style | | | CSS style to apply to native HTML \<table\> element's wrapper (which is a DIV) |
| table-class | | | CSS class to apply to native HTML \<table\> element's wrapper (which is a DIV) |
| table-header-style | | | CSS style to apply to header of native HTML \<table\> (which is a TR) |
| table-header-class | | | CSS class to apply to header of native HTML \<table\> (which is a TR) |
| card-container-style | | | |
| card-container-class | | | |
| card-style | | | |
| card-class | | | |
| title-class | | | CSS classes to apply to the title (if using 'title' prop) |

## slot

loading、no-data
header-cell-[name]、header-cell、header、body-cell-[name]、body-cell、body
top-selection、top-right、top-left、pagination、bottom、top、bottom-row、top-row、header-selection、body-selection、
item

## events

| Name | Parameters | Description |
| --- | --- | --- |
| @row-click -> function(evt, row, index) | | |
| @row-dblclick -> function(evt, row, index) | | |
| @row-contextmenu -> function(evt, row, index) | | |
| @request -> function(requestProp) | | |
| @selection -> function(details) | | |
| @update:pagination -> function(newPagination) | | |
| @update:selected -> function(newSelected) | | |
| @virtual-scroll -> function(details) | | |

## methods
