import{r as o,o as r,c as i,f as t,g as e,aa as l,v as u}from"./vendor-90615676.js";const c=l("h2",{id:"1-props",class:"doc-heading"},"props",-1),h=l("thead",null,[l("tr",null,[l("th",{class:"text-left"},"Name"),l("th",{class:"text-left"},"Type"),l("th",{class:"text-left"},"Default"),l("th",{class:"text-left"},"Description")])],-1),p=l("tbody",null,[l("tr",null,[l("td",null,"columns"),l("td",null,"Array of Objects"),l("td"),l("td")]),l("tr",null,[l("td",null,"rows"),l("td",null,"Array of Objects"),l("td"),l("td",null,"Rows of data to display")]),l("tr",null,[l("td",null,"row-key"),l("td",null,"String/Function"),l("td"),l("td",null,"unique key of each row, must be a primitive")]),l("tr",null,[l("td",null,"loading"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"Put Table into \u2018loading\u2019 state")]),l("tr",null,[l("td",null,"separator"),l("td",null,"String"),l("td",null,"\u2018horizontal\u2019"),l("td",null,"horizontal/vertical/cell/none")]),l("tr",null,[l("td",null,"selection"),l("td",null,"String"),l("td",null,"\u2018none\u2019"),l("td",null,"none/single/multiple")]),l("tr",null,[l("td",null,"selected"),l("td",null,"Array"),l("td"),l("td",null,"v-model:selected=\u201Cselection\u201D")]),l("tr",null,[l("td",null,"selected-rows-label"),l("td",null,"String"),l("td"),l("td",null,"\u20185 rows are selected\u2019")]),l("tr",null,[l("td",null,"no-data-label"),l("td",null,"String"),l("td"),l("td",null,"Override default text to display when no data is available")]),l("tr",null,[l("td",null,"no-results-label"),l("td",null,"String"),l("td"),l("td",null,"Override default text to display when user filters the table and no matched results are found")]),l("tr",null,[l("td",null,"loading-label"),l("td",null,"String"),l("td"),l("td",null,"Override default text to display when table is in loading state")]),l("tr",null,[l("td",null,"wrap-cells"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"Wrap text within table cells")]),l("tr",null,[l("td",null,"hide-header"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"Hide Table header")]),l("tr",null,[l("td",null,"hide-bottom"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"Hide table bottom layer regardless of what it has to display")]),l("tr",null,[l("td",null,"hide-selected-banner"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"Hide the selected rows banner (if any)")]),l("tr",null,[l("td",null,"hide-no-data"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"Hide the default no data bottom layer")]),l("tr",null,[l("td",null,"hide-pagination"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"Hide pagination controls")]),l("tr",null,[l("td",null,"visible-columns"),l("td",null,"Array"),l("td"),l("td",null,"Array of Strings defining column names")]),l("tr",null,[l("td",null,"title"),l("td",null,"String"),l("td"),l("td",null,"Table title")]),l("tr",null,[l("td",null,"grid"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"Display data as a grid instead of the default table")]),l("tr",null,[l("td",null,"grid-header"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"Display header for grid-mode also")]),l("tr",null,[l("td",null,"fullscreen"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"v-model:fullscreen=\u201CisFullscreen\u201D")]),l("tr",null,[l("td",null,"no-route-fullscreen-exit"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"Changing route app won\u2019t exit fullscreen")]),l("tr",null,[l("td",null,"filter"),l("td"),l("td"),l("td")]),l("tr",null,[l("td",null,"filter-method"),l("td"),l("td"),l("td")]),l("tr",null,[l("td",null,"binary-state-sort"),l("td"),l("td"),l("td")]),l("tr",null,[l("td",null,"column-sort-order"),l("td"),l("td"),l("td")]),l("tr",null,[l("td",null,"sort-method"),l("td"),l("td"),l("td")]),l("tr",null,[l("td",null,"expanded"),l("td",null,"Array"),l("td"),l("td",null,"Keeps the array with expanded rows keys")]),l("tr",null,[l("td",null,"virtual-scroll"),l("td"),l("td"),l("td")]),l("tr",null,[l("td",null,"virtual-scroll-slice-size"),l("td"),l("td"),l("td")]),l("tr",null,[l("td",null,"virtual-scroll-slice-ratio-before"),l("td"),l("td"),l("td")]),l("tr",null,[l("td",null,"virtual-scroll-slice-ratio-after"),l("td"),l("td"),l("td")]),l("tr",null,[l("td",null,"virtual-scroll-item-size"),l("td"),l("td"),l("td")]),l("tr",null,[l("td",null,"virtual-scroll-target"),l("td",null,"Element/String"),l("td"),l("td")]),l("tr",null,[l("td",null,"virtual-scroll-sticky-size-start"),l("td",null,"Element/String"),l("td"),l("td")]),l("tr",null,[l("td",null,"virtual-scroll-sticky-size-end"),l("td",null,"Element/String"),l("td"),l("td")]),l("tr",null,[l("td",null,"table-colspan"),l("td"),l("td"),l("td",null,"???")])],-1),f=l("h3",{id:"2-props-columns",class:"doc-heading"},"props.columns",-1),m=l("thead",null,[l("tr",null,[l("th",{class:"text-left"},"Name"),l("th",{class:"text-left"},"Type"),l("th",{class:"text-left"},"Default"),l("th",{class:"text-left"},"Description")])],-1),b=l("tbody",null,[l("tr",null,[l("td",null,"name"),l("td",null,"String - required!"),l("td"),l("td",null,"Unique id, identifies column, (used by pagination.sortBy, \u2018body-cell-[name]\u2019 slot, \u2026)")]),l("tr",null,[l("td",null,"label"),l("td",null,"String"),l("td"),l("td",null,"Column header label")]),l("tr",null,[l("td",null,"field"),l("td",null,"String/Function - required!"),l("td"),l("td",null,"name/row => row.prices.active")]),l("tr",null,[l("td",null,"align"),l("td",null,"String"),l("td",null,"right"),l("td",null,"left/center/right")]),l("tr",null,[l("td",null,"format"),l("td",null,"Function"),l("td"),l("td",null,"Function you can apply to format your data")]),l("tr",null,[l("td",null,"style"),l("td",null,"String/Function"),l("td"),l("td",null,"Style to apply on normal cells of the column")]),l("tr",null,[l("td",null,"headerStyle"),l("td",null,"String/Function"),l("td"),l("td",null,"Style to apply on header cells of the column")]),l("tr",null,[l("td",null,"classes"),l("td",null,"String/Function"),l("td"),l("td",null,"Classes to apply on normal cells of the column")]),l("tr",null,[l("td",null,"headerClasses"),l("td",null,"String/Function"),l("td"),l("td",null,"Classes to apply on header cells of the column")]),l("tr",null,[l("td",null,"sortable"),l("td",null,"Boolean"),l("td",null,"false"),l("td")]),l("tr",null,[l("td",null,"sort"),l("td",null,"Function"),l("td"),l("td")]),l("tr",null,[l("td",null,"sortOrder"),l("td",null,"String"),l("td",null,"ad"),l("td",null,"Set column sort order: \u2018ad\u2019 (ascending-descending) or \u2018da\u2019 (descending-ascending); Overrides the \u2018column-sort-order\u2019 prop")]),l("tr",null,[l("td",null,"required"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"If we use visible-columns, this col will always be visible")])],-1),g=l("h3",{id:"3-style-props",class:"doc-heading"},"style props",-1),y=l("p",null,"color\u3001dense\u3001dark\u3001flat\u3001bordered\u3001square",-1),_=l("thead",null,[l("tr",null,[l("th",{class:"text-left"},"Name"),l("th",{class:"text-left"},"Type"),l("th",{class:"text-left"},"Default"),l("th",{class:"text-left"},"Description")])],-1),w=l("tbody",null,[l("tr",null,[l("td",null,"table-style"),l("td"),l("td"),l("td",null,"CSS style to apply to native HTML <table> element\u2019s wrapper (which is a DIV)")]),l("tr",null,[l("td",null,"table-class"),l("td"),l("td"),l("td",null,"CSS class to apply to native HTML <table> element\u2019s wrapper (which is a DIV)")]),l("tr",null,[l("td",null,"table-header-style"),l("td"),l("td"),l("td",null,"CSS style to apply to header of native HTML <table> (which is a TR)")]),l("tr",null,[l("td",null,"table-header-class"),l("td"),l("td"),l("td",null,"CSS class to apply to header of native HTML <table> (which is a TR)")]),l("tr",null,[l("td",null,"card-container-style"),l("td"),l("td"),l("td")]),l("tr",null,[l("td",null,"card-container-class"),l("td"),l("td"),l("td")]),l("tr",null,[l("td",null,"card-style"),l("td"),l("td"),l("td")]),l("tr",null,[l("td",null,"card-class"),l("td"),l("td"),l("td")]),l("tr",null,[l("td",null,"title-class"),l("td"),l("td"),l("td",null,"CSS classes to apply to the title (if using \u2018title\u2019 prop)")])],-1),S=l("h2",{id:"4-slot",class:"doc-heading"},"slot",-1),v=l("p",null,[u("loading\u3001no-data"),l("br"),u(" header-cell-[name]\u3001header-cell\u3001header\u3001body-cell-[name]\u3001body-cell\u3001body"),l("br"),u(" top-selection\u3001top-right\u3001top-left\u3001pagination\u3001bottom\u3001top\u3001bottom-row\u3001top-row\u3001header-selection\u3001body-selection\u3001"),l("br"),u(" item")],-1),x=l("h2",{id:"5-events",class:"doc-heading"},"events",-1),B=l("thead",null,[l("tr",null,[l("th",{class:"text-left"},"Name"),l("th",{class:"text-left"},"Parameters"),l("th",{class:"text-left"},"Description")])],-1),q=l("tbody",null,[l("tr",null,[l("td",null,"@row-click -> function(evt, row, index)"),l("td"),l("td")]),l("tr",null,[l("td",null,"@row-dblclick -> function(evt, row, index)"),l("td"),l("td")]),l("tr",null,[l("td",null,"@row-contextmenu -> function(evt, row, index)"),l("td"),l("td")]),l("tr",null,[l("td",null,"@request -> function(requestProp)"),l("td"),l("td")]),l("tr",null,[l("td",null,"@selection -> function(details)"),l("td"),l("td")]),l("tr",null,[l("td",null,"@update:pagination -> function(newPagination)"),l("td"),l("td")]),l("tr",null,[l("td",null,"@update:selected -> function(newSelected)"),l("td"),l("td")]),l("tr",null,[l("td",null,"@virtual-scroll -> function(details)"),l("td"),l("td")])],-1),T=l("h2",{id:"6-methods",class:"doc-heading"},"methods",-1),H={__name:"table",setup(k){const a=[{id:"doc-title",title:"table"},{id:"1-props",title:"1. props"},{id:"2-props-columns",title:"1.1. props.columns",sub:!0},{id:"3-style-props",title:"1.2. style props",sub:!0},{id:"4-slot",title:"2. slot"},{id:"5-events",title:"3. events"},{id:"6-methods",title:"4. methods"}];return(C,D)=>{const n=o("q-markup-table"),d=o("c-scroll-area"),s=o("doc-page");return r(),i(s,{desc:"",toc:a},{default:t(()=>[c,e(d,{"fit-content-height":"",class:"q-mt-md q-mb-sm","content-style":{paddingBottom:"10px"}},{default:t(()=>[e(n,{flat:"",bordered:"",dense:""},{default:t(()=>[h,p]),_:1})]),_:1}),f,e(d,{"fit-content-height":"",class:"q-mt-md q-mb-sm","content-style":{paddingBottom:"10px"}},{default:t(()=>[e(n,{flat:"",bordered:"",dense:""},{default:t(()=>[m,b]),_:1})]),_:1}),g,y,e(d,{"fit-content-height":"",class:"q-mt-md q-mb-sm","content-style":{paddingBottom:"10px"}},{default:t(()=>[e(n,{flat:"",bordered:"",dense:""},{default:t(()=>[_,w]),_:1})]),_:1}),S,v,x,e(d,{"fit-content-height":"",class:"q-mt-md q-mb-sm","content-style":{paddingBottom:"10px"}},{default:t(()=>[e(n,{flat:"",bordered:"",dense:""},{default:t(()=>[B,q]),_:1})]),_:1}),T]),_:1})}}};export{H as default};
