import{r as e,o as l,c as d,f as p,g as u}from"./vendor-b8e3fcbe.js";const r={__name:"sass-scss-variables",setup(f){const a=[{id:"doc-title",title:"sass-scss-variables"}];return(o,n)=>{const A=e("doc-code"),t=e("doc-page");return l(),d(t,{desc:"",toc:a},{default:p(()=>[u(A,{code:"%24space-base%20%20%20%3A%2016px%20%21default%0A%24space-x-base%20%3A%20%24space-base%20%21default%0A%24space-y-base%20%3A%20%24space-base%20%21default%0A%0A%24space-none%20%3A%20%28x%3A%200%2C%20y%3A%200%29%20%21default%0A%24space-xs%20%20%20%3A%20%28x%3A%20%28%24space-x-base%20*%20.25%29%2C%20y%3A%20%28%24space-y-base%20*%20.25%29%29%20%21default%0A%24space-sm%20%20%20%3A%20%28x%3A%20%28%24space-x-base%20*%20.5%29%2C%20y%3A%20%28%24space-y-base%20*%20.5%29%29%20%21default%0A%24space-md%20%20%20%3A%20%28x%3A%20%24space-x-base%2C%20y%3A%20%24space-y-base%29%20%21default%0A%24space-lg%20%20%20%3A%20%28x%3A%20%28%24space-x-base%20*%201.5%29%2C%20y%3A%20%28%24space-y-base%20*%201.5%29%29%20%21default%0A%24space-xl%20%20%20%3A%20%28x%3A%20%28%24space-x-base%20*%203%29%2C%20y%3A%20%28%24space-y-base%20*%203%29%29%20%21default%0A%0A//%20sorry%20for%20long%20line%3B%20we%20need%20.sass%20and%20it%20doesn%27t%20support%20multi-line%20list%0A%24spaces%3A%20%28%27none%27%3A%20%24space-none%2C%20%27xs%27%3A%20%24space-xs%2C%20%27sm%27%3A%20%24space-sm%2C%20%27md%27%3A%20%24space-md%2C%20%27lg%27%3A%20%24space-lg%2C%20%27xl%27%3A%20%24space-xl%29%20%21default%0A%0A%24animate-duration%20%3A%20.3s%20%21default%0A%24animate-delay%20%20%20%20%3A%20.3s%20%21default%0A%24animate-repeat%20%20%20%3A%201%20%21default%0A%0A//%20Max%20width%20at%20which%20point%0A//%20current%20size%20ends%0A%24breakpoint-xs%3A%20599px%20%21default%0A%24breakpoint-sm%3A%201023px%20%21default%0A%24breakpoint-md%3A%201439px%20%21default%0A%24breakpoint-lg%3A%201919px%20%21default%0A%0A%24flex-cols%20%20%20%20%20%20%3A%2012%20%21default%0A%24flex-gutter-xs%20%3A%20%28%24space-base%20*%20.25%29%20%21default%0A%24flex-gutter-sm%20%3A%20%28%24space-base%20*%20.5%29%20%21default%0A%24flex-gutter-md%20%3A%20%24space-base%20%21default%0A%24flex-gutter-lg%20%3A%20%28%24space-base%20*%201.5%29%20%21default%0A%24flex-gutter-xl%20%3A%20%28%24space-base%20*%203%29%20%21default%0A%0A%24body-font-size%20%20%20%3A%2014px%20%21default%0A%24body-line-height%20%3A%201.5%20%21default%0A%0A//%20sorry%20for%20long%20line%3B%20we%20need%20.sass%20and%20it%20doesn%27t%20support%20multi-line%20list%0A%24flex-gutter%3A%20%28%27none%27%3A%200%2C%20%27xs%27%3A%20%24flex-gutter-xs%2C%20%27sm%27%3A%20%24flex-gutter-sm%2C%20%27md%27%3A%20%24flex-gutter-md%2C%20%27lg%27%3A%20%24flex-gutter-lg%2C%20%27xl%27%3A%20%24flex-gutter-xl%29%20%21default%0A%0A//%20sorry%20for%20long%20line%3B%20we%20need%20.sass%20and%20it%20doesn%27t%20support%20multi-line%20list%0A%24sizes%3A%20%28%27xs%27%3A%200%2C%20%27sm%27%3A%20%28%24breakpoint-xs%20+%201%29%2C%20%27md%27%3A%20%28%24breakpoint-sm%20+%201%29%2C%20%27lg%27%3A%20%28%24breakpoint-md%20+%201%29%2C%20%27xl%27%3A%20%28%24breakpoint-lg%20+%201%29%29%20%21default%0A%0A%24breakpoint-xs-max%3A%20%28map-get%28%24sizes%2C%20%22sm%22%29%20-%200.02%29%20%21default%0A%0A%24breakpoint-sm-min%3A%20map-get%28%24sizes%2C%20%22sm%22%29%20%21default%0A%24breakpoint-sm-max%3A%20%28map-get%28%24sizes%2C%20%22md%22%29%20-%200.02%29%20%21default%0A%0A%24breakpoint-md-min%3A%20map-get%28%24sizes%2C%20%22md%22%29%20%21default%0A%24breakpoint-md-max%3A%20%28map-get%28%24sizes%2C%20%22lg%22%29%20-%200.02%29%20%21default%0A%0A%24breakpoint-lg-min%3A%20map-get%28%24sizes%2C%20%22lg%22%29%20%21default%0A%24breakpoint-lg-max%3A%20%28map-get%28%24sizes%2C%20%22xl%22%29%20-%200.02%29%20%21default%0A%0A%24breakpoint-xl-min%3A%20map-get%28%24sizes%2C%20%22xl%22%29%20%21default%0A%0A%24h1%3A%20%20%20%20%20%20%20%20%28size%3A%206rem%2C%20%20%20%20%20line-height%3A%206rem%2C%20%20%20%20%20letter-spacing%3A%20-.01562em%2C%20weight%3A%20300%29%20%21default%0A%24h2%3A%20%20%20%20%20%20%20%20%28size%3A%203.75rem%2C%20%20line-height%3A%203.75rem%2C%20%20letter-spacing%3A%20-.00833em%2C%20weight%3A%20300%29%20%21default%0A%24h3%3A%20%20%20%20%20%20%20%20%28size%3A%203rem%2C%20%20%20%20%20line-height%3A%203.125rem%2C%20letter-spacing%3A%20normal%2C%20%20%20%20weight%3A%20400%29%20%21default%0A%24h4%3A%20%20%20%20%20%20%20%20%28size%3A%202.125rem%2C%20line-height%3A%202.5rem%2C%20%20%20letter-spacing%3A%20.00735em%2C%20%20weight%3A%20400%29%20%21default%0A%24h5%3A%20%20%20%20%20%20%20%20%28size%3A%201.5rem%2C%20%20%20line-height%3A%202rem%2C%20%20%20%20%20letter-spacing%3A%20normal%2C%20%20%20%20weight%3A%20400%29%20%21default%0A%24h6%3A%20%20%20%20%20%20%20%20%28size%3A%201.25rem%2C%20%20line-height%3A%202rem%2C%20%20%20%20%20letter-spacing%3A%20.0125em%2C%20%20%20weight%3A%20500%29%20%21default%0A%24subtitle1%3A%20%28size%3A%201rem%2C%20%20%20%20%20line-height%3A%201.75rem%2C%20%20letter-spacing%3A%20.00937em%2C%20%20weight%3A%20400%29%20%21default%0A%24subtitle2%3A%20%28size%3A%20.875rem%2C%20%20line-height%3A%201.375rem%2C%20letter-spacing%3A%20.00714em%2C%20%20weight%3A%20500%29%20%21default%0A%24body1%3A%20%20%20%20%20%28size%3A%201rem%2C%20%20%20%20%20line-height%3A%201.5rem%2C%20%20%20letter-spacing%3A%20.03125em%2C%20%20weight%3A%20400%29%20%21default%0A%24body2%3A%20%20%20%20%20%28size%3A%20.875rem%2C%20%20line-height%3A%201.25rem%2C%20%20letter-spacing%3A%20.01786em%2C%20%20weight%3A%20400%29%20%21default%0A%24overline%3A%20%20%28size%3A%20.75rem%2C%20%20%20line-height%3A%202rem%2C%20%20%20%20%20letter-spacing%3A%20.16667em%2C%20%20weight%3A%20500%29%20%21default%0A%24caption%3A%20%20%20%28size%3A%20.75rem%2C%20%20%20line-height%3A%201.25rem%2C%20%20letter-spacing%3A%20.03333em%2C%20%20weight%3A%20400%29%20%21default%0A%0A//%20sorry%20for%20long%20line%3B%20we%20need%20.sass%20and%20it%20doesn%27t%20support%20multi-line%20list%0A%24headings%3A%20%28%27h1%27%3A%20%24h1%2C%20%27h2%27%3A%20%24h2%2C%20%27h3%27%3A%20%24h3%2C%20%27h4%27%3A%20%24h4%2C%20%27h5%27%3A%20%24h5%2C%20%27h6%27%3A%20%24h6%2C%20%27subtitle1%27%3A%20%24subtitle1%2C%20%27subtitle2%27%3A%20%24subtitle2%2C%20%27body1%27%3A%20%24body1%2C%20%27body2%27%3A%20%24body2%2C%20%27overline%27%3A%20%24overline%2C%20%27caption%27%3A%20%24caption%29%20%21default%0A%0A//%20sorry%20for%20long%20line%3B%20we%20need%20.sass%20and%20it%20doesn%27t%20support%20multi-line%20list%0A%24h-tags%3A%20%28h1%3A%20map-get%28%24headings%2C%20%22h1%22%29%2C%20h2%3A%20map-get%28%24headings%2C%20%22h2%22%29%2C%20h3%3A%20map-get%28%24headings%2C%20%22h3%22%29%2C%20h4%3A%20map-get%28%24headings%2C%20%22h4%22%29%2C%20h5%3A%20map-get%28%24headings%2C%20%22h5%22%29%2C%20h6%3A%20map-get%28%24headings%2C%20%22h6%22%29%29%20%21default%0A%0A//%20sorry%20for%20long%20line%3B%20we%20need%20.sass%20and%20it%20doesn%27t%20support%20multi-line%20list%0A%24text-weights%3A%20%28thin%3A%20100%2C%20light%3A%20300%2C%20regular%3A%20400%2C%20medium%3A%20500%2C%20bold%3A%20700%2C%20bolder%3A%20900%29%20%21default%0A%0A%24primary%20%20%20%3A%20%231976D2%20%21default%0A%24secondary%20%3A%20%2326A69A%20%21default%0A%24accent%20%20%20%20%3A%20%239C27B0%20%21default%0A%0A//%20used%20by%20dark%20mode%0A%24dark-page%20%3A%20%23121212%20%21default%0A%24dark%20%20%20%20%20%20%3A%20%231d1d1d%20%21default%0A%0A%24positive%20%20%3A%20%2321BA45%20%21default%0A%24negative%20%20%3A%20%23C10015%20%21default%0A%24info%20%20%20%20%20%20%3A%20%2331CCEC%20%21default%0A%24warning%20%20%20%3A%20%23F2C037%20%21default%0A%0A%24dimmed-background%20%20%20%20%20%20%20%3A%20rgba%280%2C%200%2C%200%2C%20.4%29%20%21default%0A%24light-dimmed-background%20%3A%20rgba%28255%2C%20255%2C%20255%2C%20.6%29%20%21default%0A%0A%24separator-color%20%20%20%20%20%20%20%20%20%3A%20rgba%280%2C%200%2C%200%2C%20.12%29%20%21default%0A%24separator-dark-color%20%20%20%20%3A%20rgba%28255%2C%20255%2C%20255%2C%20.28%29%20%21default%0A%0A%24red%20%3A%20%23f44336%20%21default%0A%24red-1%20%3A%20%23ffebee%20%21default%0A%24red-2%20%3A%20%23ffcdd2%20%21default%0A%24red-3%20%3A%20%23ef9a9a%20%21default%0A%24red-4%20%3A%20%23e57373%20%21default%0A%24red-5%20%3A%20%23ef5350%20%21default%0A%24red-6%20%3A%20%23f44336%20%21default%0A%24red-7%20%3A%20%23e53935%20%21default%0A%24red-8%20%3A%20%23d32f2f%20%21default%0A%24red-9%20%3A%20%23c62828%20%21default%0A%24red-10%20%3A%20%23b71c1c%20%21default%0A%24red-11%20%3A%20%23ff8a80%20%21default%0A%24red-12%20%3A%20%23ff5252%20%21default%0A%24red-13%20%3A%20%23ff1744%20%21default%0A%24red-14%20%3A%20%23d50000%20%21default%0A%24pink%20%3A%20%23e91e63%20%21default%0A%24pink-1%20%3A%20%23fce4ec%20%21default%0A%24pink-2%20%3A%20%23f8bbd0%20%21default%0A%24pink-3%20%3A%20%23f48fb1%20%21default%0A%24pink-4%20%3A%20%23f06292%20%21default%0A%24pink-5%20%3A%20%23ec407a%20%21default%0A%24pink-6%20%3A%20%23e91e63%20%21default%0A%24pink-7%20%3A%20%23d81b60%20%21default%0A%24pink-8%20%3A%20%23c2185b%20%21default%0A%24pink-9%20%3A%20%23ad1457%20%21default%0A%24pink-10%20%3A%20%23880e4f%20%21default%0A%24pink-11%20%3A%20%23ff80ab%20%21default%0A%24pink-12%20%3A%20%23ff4081%20%21default%0A%24pink-13%20%3A%20%23f50057%20%21default%0A%24pink-14%20%3A%20%23c51162%20%21default%0A%24purple%20%3A%20%239c27b0%20%21default%0A%24purple-1%20%3A%20%23f3e5f5%20%21default%0A%24purple-2%20%3A%20%23e1bee7%20%21default%0A%24purple-3%20%3A%20%23ce93d8%20%21default%0A%24purple-4%20%3A%20%23ba68c8%20%21default%0A%24purple-5%20%3A%20%23ab47bc%20%21default%0A%24purple-6%20%3A%20%239c27b0%20%21default%0A%24purple-7%20%3A%20%238e24aa%20%21default%0A%24purple-8%20%3A%20%237b1fa2%20%21default%0A%24purple-9%20%3A%20%236a1b9a%20%21default%0A%24purple-10%20%3A%20%234a148c%20%21default%0A%24purple-11%20%3A%20%23ea80fc%20%21default%0A%24purple-12%20%3A%20%23e040fb%20%21default%0A%24purple-13%20%3A%20%23d500f9%20%21default%0A%24purple-14%20%3A%20%23aa00ff%20%21default%0A%24deep-purple%20%3A%20%23673ab7%20%21default%0A%24deep-purple-1%20%3A%20%23ede7f6%20%21default%0A%24deep-purple-2%20%3A%20%23d1c4e9%20%21default%0A%24deep-purple-3%20%3A%20%23b39ddb%20%21default%0A%24deep-purple-4%20%3A%20%239575cd%20%21default%0A%24deep-purple-5%20%3A%20%237e57c2%20%21default%0A%24deep-purple-6%20%3A%20%23673ab7%20%21default%0A%24deep-purple-7%20%3A%20%235e35b1%20%21default%0A%24deep-purple-8%20%3A%20%23512da8%20%21default%0A%24deep-purple-9%20%3A%20%234527a0%20%21default%0A%24deep-purple-10%20%3A%20%23311b92%20%21default%0A%24deep-purple-11%20%3A%20%23b388ff%20%21default%0A%24deep-purple-12%20%3A%20%237c4dff%20%21default%0A%24deep-purple-13%20%3A%20%23651fff%20%21default%0A%24deep-purple-14%20%3A%20%236200ea%20%21default%0A%24indigo%20%3A%20%233f51b5%20%21default%0A%24indigo-1%20%3A%20%23e8eaf6%20%21default%0A%24indigo-2%20%3A%20%23c5cae9%20%21default%0A%24indigo-3%20%3A%20%239fa8da%20%21default%0A%24indigo-4%20%3A%20%237986cb%20%21default%0A%24indigo-5%20%3A%20%235c6bc0%20%21default%0A%24indigo-6%20%3A%20%233f51b5%20%21default%0A%24indigo-7%20%3A%20%233949ab%20%21default%0A%24indigo-8%20%3A%20%23303f9f%20%21default%0A%24indigo-9%20%3A%20%23283593%20%21default%0A%24indigo-10%20%3A%20%231a237e%20%21default%0A%24indigo-11%20%3A%20%238c9eff%20%21default%0A%24indigo-12%20%3A%20%23536dfe%20%21default%0A%24indigo-13%20%3A%20%233d5afe%20%21default%0A%24indigo-14%20%3A%20%23304ffe%20%21default%0A%24blue%20%3A%20%232196f3%20%21default%0A%24blue-1%20%3A%20%23e3f2fd%20%21default%0A%24blue-2%20%3A%20%23bbdefb%20%21default%0A%24blue-3%20%3A%20%2390caf9%20%21default%0A%24blue-4%20%3A%20%2364b5f6%20%21default%0A%24blue-5%20%3A%20%2342a5f5%20%21default%0A%24blue-6%20%3A%20%232196f3%20%21default%0A%24blue-7%20%3A%20%231e88e5%20%21default%0A%24blue-8%20%3A%20%231976d2%20%21default%0A%24blue-9%20%3A%20%231565c0%20%21default%0A%24blue-10%20%3A%20%230d47a1%20%21default%0A%24blue-11%20%3A%20%2382b1ff%20%21default%0A%24blue-12%20%3A%20%23448aff%20%21default%0A%24blue-13%20%3A%20%232979ff%20%21default%0A%24blue-14%20%3A%20%232962ff%20%21default%0A%24light-blue%20%3A%20%2303a9f4%20%21default%0A%24light-blue-1%20%3A%20%23e1f5fe%20%21default%0A%24light-blue-2%20%3A%20%23b3e5fc%20%21default%0A%24light-blue-3%20%3A%20%2381d4fa%20%21default%0A%24light-blue-4%20%3A%20%234fc3f7%20%21default%0A%24light-blue-5%20%3A%20%2329b6f6%20%21default%0A%24light-blue-6%20%3A%20%2303a9f4%20%21default%0A%24light-blue-7%20%3A%20%23039be5%20%21default%0A%24light-blue-8%20%3A%20%230288d1%20%21default%0A%24light-blue-9%20%3A%20%230277bd%20%21default%0A%24light-blue-10%20%3A%20%2301579b%20%21default%0A%24light-blue-11%20%3A%20%2380d8ff%20%21default%0A%24light-blue-12%20%3A%20%2340c4ff%20%21default%0A%24light-blue-13%20%3A%20%2300b0ff%20%21default%0A%24light-blue-14%20%3A%20%230091ea%20%21default%0A%24cyan%20%3A%20%2300bcd4%20%21default%0A%24cyan-1%20%3A%20%23e0f7fa%20%21default%0A%24cyan-2%20%3A%20%23b2ebf2%20%21default%0A%24cyan-3%20%3A%20%2380deea%20%21default%0A%24cyan-4%20%3A%20%234dd0e1%20%21default%0A%24cyan-5%20%3A%20%2326c6da%20%21default%0A%24cyan-6%20%3A%20%2300bcd4%20%21default%0A%24cyan-7%20%3A%20%2300acc1%20%21default%0A%24cyan-8%20%3A%20%230097a7%20%21default%0A%24cyan-9%20%3A%20%2300838f%20%21default%0A%24cyan-10%20%3A%20%23006064%20%21default%0A%24cyan-11%20%3A%20%2384ffff%20%21default%0A%24cyan-12%20%3A%20%2318ffff%20%21default%0A%24cyan-13%20%3A%20%2300e5ff%20%21default%0A%24cyan-14%20%3A%20%2300b8d4%20%21default%0A%24teal%20%3A%20%23009688%20%21default%0A%24teal-1%20%3A%20%23e0f2f1%20%21default%0A%24teal-2%20%3A%20%23b2dfdb%20%21default%0A%24teal-3%20%3A%20%2380cbc4%20%21default%0A%24teal-4%20%3A%20%234db6ac%20%21default%0A%24teal-5%20%3A%20%2326a69a%20%21default%0A%24teal-6%20%3A%20%23009688%20%21default%0A%24teal-7%20%3A%20%2300897b%20%21default%0A%24teal-8%20%3A%20%2300796b%20%21default%0A%24teal-9%20%3A%20%2300695c%20%21default%0A%24teal-10%20%3A%20%23004d40%20%21default%0A%24teal-11%20%3A%20%23a7ffeb%20%21default%0A%24teal-12%20%3A%20%2364ffda%20%21default%0A%24teal-13%20%3A%20%231de9b6%20%21default%0A%24teal-14%20%3A%20%2300bfa5%20%21default%0A%24green%20%3A%20%234caf50%20%21default%0A%24green-1%20%3A%20%23e8f5e9%20%21default%0A%24green-2%20%3A%20%23c8e6c9%20%21default%0A%24green-3%20%3A%20%23a5d6a7%20%21default%0A%24green-4%20%3A%20%2381c784%20%21default%0A%24green-5%20%3A%20%2366bb6a%20%21default%0A%24green-6%20%3A%20%234caf50%20%21default%0A%24green-7%20%3A%20%2343a047%20%21default%0A%24green-8%20%3A%20%23388e3c%20%21default%0A%24green-9%20%3A%20%232e7d32%20%21default%0A%24green-10%20%3A%20%231b5e20%20%21default%0A%24green-11%20%3A%20%23b9f6ca%20%21default%0A%24green-12%20%3A%20%2369f0ae%20%21default%0A%24green-13%20%3A%20%2300e676%20%21default%0A%24green-14%20%3A%20%2300c853%20%21default%0A%24light-green%20%3A%20%238bc34a%20%21default%0A%24light-green-1%20%3A%20%23f1f8e9%20%21default%0A%24light-green-2%20%3A%20%23dcedc8%20%21default%0A%24light-green-3%20%3A%20%23c5e1a5%20%21default%0A%24light-green-4%20%3A%20%23aed581%20%21default%0A%24light-green-5%20%3A%20%239ccc65%20%21default%0A%24light-green-6%20%3A%20%238bc34a%20%21default%0A%24light-green-7%20%3A%20%237cb342%20%21default%0A%24light-green-8%20%3A%20%23689f38%20%21default%0A%24light-green-9%20%3A%20%23558b2f%20%21default%0A%24light-green-10%20%3A%20%2333691e%20%21default%0A%24light-green-11%20%3A%20%23ccff90%20%21default%0A%24light-green-12%20%3A%20%23b2ff59%20%21default%0A%24light-green-13%20%3A%20%2376ff03%20%21default%0A%24light-green-14%20%3A%20%2364dd17%20%21default%0A%24lime%20%3A%20%23cddc39%20%21default%0A%24lime-1%20%3A%20%23f9fbe7%20%21default%0A%24lime-2%20%3A%20%23f0f4c3%20%21default%0A%24lime-3%20%3A%20%23e6ee9c%20%21default%0A%24lime-4%20%3A%20%23dce775%20%21default%0A%24lime-5%20%3A%20%23d4e157%20%21default%0A%24lime-6%20%3A%20%23cddc39%20%21default%0A%24lime-7%20%3A%20%23c0ca33%20%21default%0A%24lime-8%20%3A%20%23afb42b%20%21default%0A%24lime-9%20%3A%20%239e9d24%20%21default%0A%24lime-10%20%3A%20%23827717%20%21default%0A%24lime-11%20%3A%20%23f4ff81%20%21default%0A%24lime-12%20%3A%20%23eeff41%20%21default%0A%24lime-13%20%3A%20%23c6ff00%20%21default%0A%24lime-14%20%3A%20%23aeea00%20%21default%0A%24yellow%20%3A%20%23ffeb3b%20%21default%0A%24yellow-1%20%3A%20%23fffde7%20%21default%0A%24yellow-2%20%3A%20%23fff9c4%20%21default%0A%24yellow-3%20%3A%20%23fff59d%20%21default%0A%24yellow-4%20%3A%20%23fff176%20%21default%0A%24yellow-5%20%3A%20%23ffee58%20%21default%0A%24yellow-6%20%3A%20%23ffeb3b%20%21default%0A%24yellow-7%20%3A%20%23fdd835%20%21default%0A%24yellow-8%20%3A%20%23fbc02d%20%21default%0A%24yellow-9%20%3A%20%23f9a825%20%21default%0A%24yellow-10%20%3A%20%23f57f17%20%21default%0A%24yellow-11%20%3A%20%23ffff8d%20%21default%0A%24yellow-12%20%3A%20%23ffff00%20%21default%0A%24yellow-13%20%3A%20%23ffea00%20%21default%0A%24yellow-14%20%3A%20%23ffd600%20%21default%0A%24amber%20%3A%20%23ffc107%20%21default%0A%24amber-1%20%3A%20%23fff8e1%20%21default%0A%24amber-2%20%3A%20%23ffecb3%20%21default%0A%24amber-3%20%3A%20%23ffe082%20%21default%0A%24amber-4%20%3A%20%23ffd54f%20%21default%0A%24amber-5%20%3A%20%23ffca28%20%21default%0A%24amber-6%20%3A%20%23ffc107%20%21default%0A%24amber-7%20%3A%20%23ffb300%20%21default%0A%24amber-8%20%3A%20%23ffa000%20%21default%0A%24amber-9%20%3A%20%23ff8f00%20%21default%0A%24amber-10%20%3A%20%23ff6f00%20%21default%0A%24amber-11%20%3A%20%23ffe57f%20%21default%0A%24amber-12%20%3A%20%23ffd740%20%21default%0A%24amber-13%20%3A%20%23ffc400%20%21default%0A%24amber-14%20%3A%20%23ffab00%20%21default%0A%24orange%20%3A%20%23ff9800%20%21default%0A%24orange-1%20%3A%20%23fff3e0%20%21default%0A%24orange-2%20%3A%20%23ffe0b2%20%21default%0A%24orange-3%20%3A%20%23ffcc80%20%21default%0A%24orange-4%20%3A%20%23ffb74d%20%21default%0A%24orange-5%20%3A%20%23ffa726%20%21default%0A%24orange-6%20%3A%20%23ff9800%20%21default%0A%24orange-7%20%3A%20%23fb8c00%20%21default%0A%24orange-8%20%3A%20%23f57c00%20%21default%0A%24orange-9%20%3A%20%23ef6c00%20%21default%0A%24orange-10%20%3A%20%23e65100%20%21default%0A%24orange-11%20%3A%20%23ffd180%20%21default%0A%24orange-12%20%3A%20%23ffab40%20%21default%0A%24orange-13%20%3A%20%23ff9100%20%21default%0A%24orange-14%20%3A%20%23ff6d00%20%21default%0A%24deep-orange%20%3A%20%23ff5722%20%21default%0A%24deep-orange-1%20%3A%20%23fbe9e7%20%21default%0A%24deep-orange-2%20%3A%20%23ffccbc%20%21default%0A%24deep-orange-3%20%3A%20%23ffab91%20%21default%0A%24deep-orange-4%20%3A%20%23ff8a65%20%21default%0A%24deep-orange-5%20%3A%20%23ff7043%20%21default%0A%24deep-orange-6%20%3A%20%23ff5722%20%21default%0A%24deep-orange-7%20%3A%20%23f4511e%20%21default%0A%24deep-orange-8%20%3A%20%23e64a19%20%21default%0A%24deep-orange-9%20%3A%20%23d84315%20%21default%0A%24deep-orange-10%20%3A%20%23bf360c%20%21default%0A%24deep-orange-11%20%3A%20%23ff9e80%20%21default%0A%24deep-orange-12%20%3A%20%23ff6e40%20%21default%0A%24deep-orange-13%20%3A%20%23ff3d00%20%21default%0A%24deep-orange-14%20%3A%20%23dd2c00%20%21default%0A%24brown%20%3A%20%23795548%20%21default%0A%24brown-1%20%3A%20%23efebe9%20%21default%0A%24brown-2%20%3A%20%23d7ccc8%20%21default%0A%24brown-3%20%3A%20%23bcaaa4%20%21default%0A%24brown-4%20%3A%20%23a1887f%20%21default%0A%24brown-5%20%3A%20%238d6e63%20%21default%0A%24brown-6%20%3A%20%23795548%20%21default%0A%24brown-7%20%3A%20%236d4c41%20%21default%0A%24brown-8%20%3A%20%235d4037%20%21default%0A%24brown-9%20%3A%20%234e342e%20%21default%0A%24brown-10%20%3A%20%233e2723%20%21default%0A%24brown-11%20%3A%20%23d7ccc8%20%21default%0A%24brown-12%20%3A%20%23bcaaa4%20%21default%0A%24brown-13%20%3A%20%238d6e63%20%21default%0A%24brown-14%20%3A%20%235d4037%20%21default%0A%24grey%20%3A%20%239e9e9e%20%21default%0A%24grey-1%20%3A%20%23fafafa%20%21default%0A%24grey-2%20%3A%20%23f5f5f5%20%21default%0A%24grey-3%20%3A%20%23eeeeee%20%21default%0A%24grey-4%20%3A%20%23e0e0e0%20%21default%0A%24grey-5%20%3A%20%23bdbdbd%20%21default%0A%24grey-6%20%3A%20%239e9e9e%20%21default%0A%24grey-7%20%3A%20%23757575%20%21default%0A%24grey-8%20%3A%20%23616161%20%21default%0A%24grey-9%20%3A%20%23424242%20%21default%0A%24grey-10%20%3A%20%23212121%20%21default%0A%24grey-11%20%3A%20%23f5f5f5%20%21default%0A%24grey-12%20%3A%20%23eeeeee%20%21default%0A%24grey-13%20%3A%20%23bdbdbd%20%21default%0A%24grey-14%20%3A%20%23616161%20%21default%0A%24blue-grey%20%3A%20%23607d8b%20%21default%0A%24blue-grey-1%20%3A%20%23eceff1%20%21default%0A%24blue-grey-2%20%3A%20%23cfd8dc%20%21default%0A%24blue-grey-3%20%3A%20%23b0bec5%20%21default%0A%24blue-grey-4%20%3A%20%2390a4ae%20%21default%0A%24blue-grey-5%20%3A%20%2378909c%20%21default%0A%24blue-grey-6%20%3A%20%23607d8b%20%21default%0A%24blue-grey-7%20%3A%20%23546e7a%20%21default%0A%24blue-grey-8%20%3A%20%23455a64%20%21default%0A%24blue-grey-9%20%3A%20%2337474f%20%21default%0A%24blue-grey-10%20%3A%20%23263238%20%21default%0A%24blue-grey-11%20%3A%20%23cfd8dc%20%21default%0A%24blue-grey-12%20%3A%20%23b0bec5%20%21default%0A%24blue-grey-13%20%3A%20%2378909c%20%21default%0A%24blue-grey-14%20%3A%20%23455a64%20%21default%0A%0A%24ios-statusbar-height%20%3A%2020px%20%21default%0A%0A%24z-fab%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20990%20%21default%0A%24z-side%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%201000%20%21default%0A%24z-marginals%20%20%20%20%20%20%20%20%20%20%3A%202000%20%21default%0A%24z-fixed-drawer%20%20%20%20%20%20%20%3A%203000%20%21default%0A%24z-fullscreen%20%20%20%20%20%20%20%20%20%3A%206000%20%21default%0A%24z-menu%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%206000%20%21default%0A%24z-top%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%207000%20%21default%0A%24z-tooltip%20%20%20%20%20%20%20%20%20%20%20%20%3A%209000%20%21default%0A%24z-notify%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%209500%20%21default%0A%24z-max%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%209998%20%21default%0A%0A%24shadow-color%20%20%20%20%20%20%20%20%20%3A%20%23000%20%21default%0A%24shadow-transition%20%20%20%20%3A%20box-shadow%20.28s%20cubic-bezier%28.4%2C%200%2C%20.2%2C%201%29%20%21default%0A%24inset-shadow%20%20%20%20%20%20%20%20%20%3A%200%207px%209px%20-7px%20rgba%28%24shadow-color%2C%20.7%29%20inset%20%21default%0A%24inset-shadow-down%20%20%20%20%3A%200%20-7px%209px%20-7px%20rgba%28%24shadow-color%2C%20.7%29%20inset%20%21default%0A%0A%24elevation-umbra%20%20%20%20%20%20%3A%20rgba%28%24shadow-color%2C%20.2%29%20%21default%0A%24elevation-penumbra%20%20%20%3A%20rgba%28%24shadow-color%2C%20.14%29%20%21default%0A%24elevation-ambient%20%20%20%20%3A%20rgba%28%24shadow-color%2C%20.12%29%20%21default%0A%0A%24shadow-0%20%20%3A%200%200%200%20%24elevation-umbra%2C%200%200%200%20%24elevation-penumbra%2C%200%200%200%20%24elevation-ambient%20%21default%0A%24shadow-1%20%20%3A%200%201px%203px%20%24elevation-umbra%2C%200%201px%201px%20%24elevation-penumbra%2C%200%202px%201px%20-1px%20%24elevation-ambient%20%21default%0A%24shadow-2%20%20%3A%200%201px%205px%20%24elevation-umbra%2C%200%202px%202px%20%24elevation-penumbra%2C%200%203px%201px%20-2px%20%24elevation-ambient%20%21default%0A%24shadow-3%20%20%3A%200%201px%208px%20%24elevation-umbra%2C%200%203px%204px%20%24elevation-penumbra%2C%200%203px%203px%20-2px%20%24elevation-ambient%20%21default%0A%24shadow-4%20%20%3A%200%202px%204px%20-1px%20%24elevation-umbra%2C%200%204px%205px%20%24elevation-penumbra%2C%200%201px%2010px%20%24elevation-ambient%20%21default%0A%24shadow-5%20%20%3A%200%203px%205px%20-1px%20%24elevation-umbra%2C%200%205px%208px%20%24elevation-penumbra%2C%200%201px%2014px%20%24elevation-ambient%20%21default%0A%24shadow-6%20%20%3A%200%203px%205px%20-1px%20%24elevation-umbra%2C%200%206px%2010px%20%24elevation-penumbra%2C%200%201px%2018px%20%24elevation-ambient%20%21default%0A%24shadow-7%20%20%3A%200%204px%205px%20-2px%20%24elevation-umbra%2C%200%207px%2010px%201px%20%24elevation-penumbra%2C%200%202px%2016px%201px%20%24elevation-ambient%20%21default%0A%24shadow-8%20%20%3A%200%205px%205px%20-3px%20%24elevation-umbra%2C%200%208px%2010px%201px%20%24elevation-penumbra%2C%200%203px%2014px%202px%20%24elevation-ambient%20%21default%0A%24shadow-9%20%20%3A%200%205px%206px%20-3px%20%24elevation-umbra%2C%200%209px%2012px%201px%20%24elevation-penumbra%2C%200%203px%2016px%202px%20%24elevation-ambient%20%21default%0A%24shadow-10%20%3A%200%206px%206px%20-3px%20%24elevation-umbra%2C%200%2010px%2014px%201px%20%24elevation-penumbra%2C%200%204px%2018px%203px%20%24elevation-ambient%20%21default%0A%24shadow-11%20%3A%200%206px%207px%20-4px%20%24elevation-umbra%2C%200%2011px%2015px%201px%20%24elevation-penumbra%2C%200%204px%2020px%203px%20%24elevation-ambient%20%21default%0A%24shadow-12%20%3A%200%207px%208px%20-4px%20%24elevation-umbra%2C%200%2012px%2017px%202px%20%24elevation-penumbra%2C%200%205px%2022px%204px%20%24elevation-ambient%20%21default%0A%24shadow-13%20%3A%200%207px%208px%20-4px%20%24elevation-umbra%2C%200%2013px%2019px%202px%20%24elevation-penumbra%2C%200%205px%2024px%204px%20%24elevation-ambient%20%21default%0A%24shadow-14%20%3A%200%207px%209px%20-4px%20%24elevation-umbra%2C%200%2014px%2021px%202px%20%24elevation-penumbra%2C%200%205px%2026px%204px%20%24elevation-ambient%20%21default%0A%24shadow-15%20%3A%200%208px%209px%20-5px%20%24elevation-umbra%2C%200%2015px%2022px%202px%20%24elevation-penumbra%2C%200%206px%2028px%205px%20%24elevation-ambient%20%21default%0A%24shadow-16%20%3A%200%208px%2010px%20-5px%20%24elevation-umbra%2C%200%2016px%2024px%202px%20%24elevation-penumbra%2C%200%206px%2030px%205px%20%24elevation-ambient%20%21default%0A%24shadow-17%20%3A%200%208px%2011px%20-5px%20%24elevation-umbra%2C%200%2017px%2026px%202px%20%24elevation-penumbra%2C%200%206px%2032px%205px%20%24elevation-ambient%20%21default%0A%24shadow-18%20%3A%200%209px%2011px%20-5px%20%24elevation-umbra%2C%200%2018px%2028px%202px%20%24elevation-penumbra%2C%200%207px%2034px%206px%20%24elevation-ambient%20%21default%0A%24shadow-19%20%3A%200%209px%2012px%20-6px%20%24elevation-umbra%2C%200%2019px%2029px%202px%20%24elevation-penumbra%2C%200%207px%2036px%206px%20%24elevation-ambient%20%21default%0A%24shadow-20%20%3A%200%2010px%2013px%20-6px%20%24elevation-umbra%2C%200%2020px%2031px%203px%20%24elevation-penumbra%2C%200%208px%2038px%207px%20%24elevation-ambient%20%21default%0A%24shadow-21%20%3A%200%2010px%2013px%20-6px%20%24elevation-umbra%2C%200%2021px%2033px%203px%20%24elevation-penumbra%2C%200%208px%2040px%207px%20%24elevation-ambient%20%21default%0A%24shadow-22%20%3A%200%2010px%2014px%20-6px%20%24elevation-umbra%2C%200%2022px%2035px%203px%20%24elevation-penumbra%2C%200%208px%2042px%207px%20%24elevation-ambient%20%21default%0A%24shadow-23%20%3A%200%2011px%2014px%20-7px%20%24elevation-umbra%2C%200%2023px%2036px%203px%20%24elevation-penumbra%2C%200%209px%2044px%208px%20%24elevation-ambient%20%21default%0A%24shadow-24%20%3A%200%2011px%2015px%20-7px%20%24elevation-umbra%2C%200%2024px%2038px%203px%20%24elevation-penumbra%2C%200%209px%2046px%208px%20%24elevation-ambient%20%21default%0A%0A//%20sorry%20for%20long%20line%3B%20we%20need%20.sass%20and%20it%20doesn%27t%20support%20multi-line%20list%0A%24shadows%3A%20%28%24shadow-1%2C%20%24shadow-2%2C%20%24shadow-3%2C%20%24shadow-4%2C%20%24shadow-5%2C%20%24shadow-6%2C%20%24shadow-7%2C%20%24shadow-8%2C%20%24shadow-9%2C%20%24shadow-10%2C%20%24shadow-11%2C%20%24shadow-12%2C%20%24shadow-13%2C%20%24shadow-14%2C%20%24shadow-15%2C%20%24shadow-16%2C%20%24shadow-17%2C%20%24shadow-18%2C%20%24shadow-19%2C%20%24shadow-20%2C%20%24shadow-21%2C%20%24shadow-22%2C%20%24shadow-23%2C%20%24shadow-24%29%0A%0A%24shadow-up-0%20%20%3A%200%200%200%20%24elevation-umbra%2C%200%200%200%20%24elevation-penumbra%2C%200%200%200%20%24elevation-ambient%20%21default%0A%24shadow-up-1%20%20%3A%200%20-1px%203px%20%24elevation-umbra%2C%200%20-1px%201px%20%24elevation-penumbra%2C%200%20-2px%201px%20-1px%20%24elevation-ambient%20%21default%0A%24shadow-up-2%20%20%3A%200%20-1px%205px%20%24elevation-umbra%2C%200%20-2px%202px%20%24elevation-penumbra%2C%200%20-3px%201px%20-2px%20%24elevation-ambient%20%21default%0A%24shadow-up-3%20%20%3A%200%20-1px%208px%20%24elevation-umbra%2C%200%20-3px%204px%20%24elevation-penumbra%2C%200%20-3px%203px%20-2px%20%24elevation-ambient%20%21default%0A%24shadow-up-4%20%20%3A%200%20-2px%204px%20-1px%20%24elevation-umbra%2C%200%20-4px%205px%20%24elevation-penumbra%2C%200%20-1px%2010px%20%24elevation-ambient%20%21default%0A%24shadow-up-5%20%20%3A%200%20-3px%205px%20-1px%20%24elevation-umbra%2C%200%20-5px%208px%20%24elevation-penumbra%2C%200%20-1px%2014px%20%24elevation-ambient%20%21default%0A%24shadow-up-6%20%20%3A%200%20-3px%205px%20-1px%20%24elevation-umbra%2C%200%20-6px%2010px%20%24elevation-penumbra%2C%200%20-1px%2018px%20%24elevation-ambient%20%21default%0A%24shadow-up-7%20%20%3A%200%20-4px%205px%20-2px%20%24elevation-umbra%2C%200%20-7px%2010px%201px%20%24elevation-penumbra%2C%200%20-2px%2016px%201px%20%24elevation-ambient%20%21default%0A%24shadow-up-8%20%20%3A%200%20-5px%205px%20-3px%20%24elevation-umbra%2C%200%20-8px%2010px%201px%20%24elevation-penumbra%2C%200%20-3px%2014px%202px%20%24elevation-ambient%20%21default%0A%24shadow-up-9%20%20%3A%200%20-5px%206px%20-3px%20%24elevation-umbra%2C%200%20-9px%2012px%201px%20%24elevation-penumbra%2C%200%20-3px%2016px%202px%20%24elevation-ambient%20%21default%0A%24shadow-up-10%20%3A%200%20-6px%206px%20-3px%20%24elevation-umbra%2C%200%20-10px%2014px%201px%20%24elevation-penumbra%2C%200%20-4px%2018px%203px%20%24elevation-ambient%20%21default%0A%24shadow-up-11%20%3A%200%20-6px%207px%20-4px%20%24elevation-umbra%2C%200%20-11px%2015px%201px%20%24elevation-penumbra%2C%200%20-4px%2020px%203px%20%24elevation-ambient%20%21default%0A%24shadow-up-12%20%3A%200%20-7px%208px%20-4px%20%24elevation-umbra%2C%200%20-12px%2017px%202px%20%24elevation-penumbra%2C%200%20-5px%2022px%204px%20%24elevation-ambient%20%21default%0A%24shadow-up-13%20%3A%200%20-7px%208px%20-4px%20%24elevation-umbra%2C%200%20-13px%2019px%202px%20%24elevation-penumbra%2C%200%20-5px%2024px%204px%20%24elevation-ambient%20%21default%0A%24shadow-up-14%20%3A%200%20-7px%209px%20-4px%20%24elevation-umbra%2C%200%20-14px%2021px%202px%20%24elevation-penumbra%2C%200%20-5px%2026px%204px%20%24elevation-ambient%20%21default%0A%24shadow-up-15%20%3A%200%20-8px%209px%20-5px%20%24elevation-umbra%2C%200%20-15px%2022px%202px%20%24elevation-penumbra%2C%200%20-6px%2028px%205px%20%24elevation-ambient%20%21default%0A%24shadow-up-16%20%3A%200%20-8px%2010px%20-5px%20%24elevation-umbra%2C%200%20-16px%2024px%202px%20%24elevation-penumbra%2C%200%20-6px%2030px%205px%20%24elevation-ambient%20%21default%0A%24shadow-up-17%20%3A%200%20-8px%2011px%20-5px%20%24elevation-umbra%2C%200%20-17px%2026px%202px%20%24elevation-penumbra%2C%200%20-6px%2032px%205px%20%24elevation-ambient%20%21default%0A%24shadow-up-18%20%3A%200%20-9px%2011px%20-5px%20%24elevation-umbra%2C%200%20-18px%2028px%202px%20%24elevation-penumbra%2C%200%20-7px%2034px%206px%20%24elevation-ambient%20%21default%0A%24shadow-up-19%20%3A%200%20-9px%2012px%20-6px%20%24elevation-umbra%2C%200%20-19px%2029px%202px%20%24elevation-penumbra%2C%200%20-7px%2036px%206px%20%24elevation-ambient%20%21default%0A%24shadow-up-20%20%3A%200%20-10px%2013px%20-6px%20%24elevation-umbra%2C%200%20-20px%2031px%203px%20%24elevation-penumbra%2C%200%20-8px%2038px%207px%20%24elevation-ambient%20%21default%0A%24shadow-up-21%20%3A%200%20-10px%2013px%20-6px%20%24elevation-umbra%2C%200%20-21px%2033px%203px%20%24elevation-penumbra%2C%200%20-8px%2040px%207px%20%24elevation-ambient%20%21default%0A%24shadow-up-22%20%3A%200%20-10px%2014px%20-6px%20%24elevation-umbra%2C%200%20-22px%2035px%203px%20%24elevation-penumbra%2C%200%20-8px%2042px%207px%20%24elevation-ambient%20%21default%0A%24shadow-up-23%20%3A%200%20-11px%2014px%20-7px%20%24elevation-umbra%2C%200%20-23px%2036px%203px%20%24elevation-penumbra%2C%200%20-9px%2044px%208px%20%24elevation-ambient%20%21default%0A%24shadow-up-24%20%3A%200%20-11px%2015px%20-7px%20%24elevation-umbra%2C%200%20-24px%2038px%203px%20%24elevation-penumbra%2C%200%20-9px%2046px%208px%20%24elevation-ambient%20%21default%0A%0A//%20sorry%20for%20long%20line%3B%20we%20need%20.sass%20and%20it%20doesn%27t%20support%20multi-line%20list%0A%24shadows-up%3A%20%28%24shadow-up-1%2C%20%24shadow-up-2%2C%20%24shadow-up-3%2C%20%24shadow-up-4%2C%20%24shadow-up-5%2C%20%24shadow-up-6%2C%20%24shadow-up-7%2C%20%24shadow-up-8%2C%20%24shadow-up-9%2C%20%24shadow-up-10%2C%20%24shadow-up-11%2C%20%24shadow-up-12%2C%20%24shadow-up-13%2C%20%24shadow-up-14%2C%20%24shadow-up-15%2C%20%24shadow-up-16%2C%20%24shadow-up-17%2C%20%24shadow-up-18%2C%20%24shadow-up-19%2C%20%24shadow-up-20%2C%20%24shadow-up-21%2C%20%24shadow-up-22%2C%20%24shadow-up-23%2C%20%24shadow-up-24%29%0A%0A%24generic-border-radius%20%20%20%20%20%20%20%20%20%20%3A%204px%20%21default%0A%24generic-hover-transition%20%20%20%20%20%20%20%3A%20.3s%20cubic-bezier%28.25%2C%20.8%2C%20.5%2C%201%29%20%21default%0A%24typography-font-family%20%20%20%20%20%20%20%20%20%3A%20%27Roboto%27%2C%20%27-apple-system%27%2C%20%27Helvetica%20Neue%27%2C%20Helvetica%2C%20Arial%2C%20sans-serif%20%21default%0A%24min-line-height%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%201.12%20%21default%0A%0A%24button-border-radius%20%20%20%20%20%20%20%20%20%20%20%3A%203px%20%21default%0A%24button-padding%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%204px%2016px%20%21default%0A%24button-dense-padding%20%20%20%20%20%20%20%20%20%20%20%3A%20.285em%20%21default%0A%24button-transition%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%24generic-hover-transition%20%21default%0A%24button-font-size%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%2014px%20%21default%0A%24button-line-height%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%201.715em%20%21default%0A%24button-font-weight%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20500%20%21default%0A%24button-shadow%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%24shadow-2%20%21default%0A%24button-shadow-active%20%20%20%20%20%20%20%20%20%20%20%3A%20%24shadow-5%20%21default%0A%24button-rounded-border-radius%20%20%20%3A%2028px%20%21default%0A%24button-push-border-radius%20%20%20%20%20%20%3A%207px%20%21default%0A%0A%24chat-message-received-color%20%20%20%20%3A%20%23000%20%21default%0A%24chat-message-received-bg%20%20%20%20%20%20%20%3A%20%24green-4%20%21default%0A%24chat-message-sent-color%20%20%20%20%20%20%20%20%3A%20%23000%20%21default%0A%24chat-message-sent-bg%20%20%20%20%20%20%20%20%20%20%20%3A%20%24grey-4%20%21default%0A%24chat-message-avatar-size%20%20%20%20%20%20%20%3A%2048px%20%21default%0A%24chat-message-border-radius%20%20%20%20%20%3A%20%24generic-border-radius%20%21default%0A%24chat-message-distance%20%20%20%20%20%20%20%20%20%20%3A%208px%20%21default%0A%24chat-message-text-padding%20%20%20%20%20%20%3A%208px%20%21default%0A%0A%24item-base-color%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%24grey-5%20%21default%0A%0A%24editor-border-color%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%24separator-color%20%21default%0A%24editor-border-dark-color%20%20%20%20%20%20%20%3A%20%24separator-dark-color%20%21default%0A%24editor-content-padding%20%20%20%20%20%20%20%20%20%3A%2010px%20%21default%0A%24editor-content-min-height%20%20%20%20%20%20%3A%2010em%20%21default%0A%24editor-toolbar-padding%20%20%20%20%20%20%20%20%20%3A%204px%20%21default%0A%24editor-hr-color%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%24editor-border-color%20%21default%0A%24editor-hr-dark-color%20%20%20%20%20%20%20%20%20%20%20%3A%20%24editor-border-dark-color%20%21default%0A%24editor-button-gutter%20%20%20%20%20%20%20%20%20%20%20%3A%204px%20%21default%0A%0A%24table-transition%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%24generic-hover-transition%20%21default%0A%24table-border-radius%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%24generic-border-radius%20%21default%0A%24table-box-shadow%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%24shadow-2%20%21default%0A%0A%24table-border-color%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%24separator-color%20%21default%0A%24table-hover-background%20%20%20%20%20%20%20%20%20%3A%20rgba%280%2C%200%2C%200%2C%20.03%29%20%21default%0A%24table-selected-background%20%20%20%20%20%20%3A%20rgba%280%2C%200%2C%200%2C%20.06%29%20%21default%0A%0A%24table-dark-border-color%20%20%20%20%20%20%20%20%3A%20%24separator-dark-color%20%21default%0A%24table-dark-hover-background%20%20%20%20%3A%20rgba%28255%2C%20255%2C%20255%2C%20.07%29%20%21default%0A%24table-dark-selected-background%20%3A%20rgba%28255%2C%20255%2C%20255%2C%20.1%29%20%21default%0A%0A%24toolbar-min-height%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%2050px%20%21default%0A%24toolbar-padding%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%200%2012px%20%21default%0A%24toolbar-inset-size%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%2058px%20%21default%0A%24toolbar-title-font-size%20%20%20%20%20%20%20%20%3A%2021px%20%21default%0A%24toolbar-title-font-weight%20%20%20%20%20%20%3A%20normal%20%21default%0A%24toolbar-title-letter-spacing%20%20%20%3A%20.01em%20%21default%0A%24toolbar-title-padding%20%20%20%20%20%20%20%20%20%20%3A%200%2012px%20%21default%0A%0A%24layout-border%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%201px%20solid%20%24separator-color%20%21default%0A%24layout-shadow%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%200%200%2010px%202px%20rgba%280%2C0%2C0%2C0.2%29%2C%200%200px%2010px%20rgba%280%2C0%2C0%2C0.24%29%20%21default%0A%0A%24menu-background%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%23fff%20%21default%0A%24menu-box-shadow%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%24shadow-2%20%21default%0A%24menu-max-width%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%2095vw%20%21default%0A%0A%24rating-grade-color%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%24yellow%20%21default%0A%24rating-shadow%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%200%201px%203px%20rgba%280%2C%200%2C%200%2C%20.12%29%2C%200%201px%202px%20rgba%280%2C%200%2C%200%2C%20.24%29%20%21default%0A%0A%24tooltip-color%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%23fafafa%20%21default%0A%24tooltip-background%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%24grey-7%20%21default%0A%24tooltip-padding%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%206px%2010px%20%21default%0A%24tooltip-border-radius%20%20%20%20%20%20%20%20%20%20%3A%20%24generic-border-radius%20%21default%0A%24tooltip-fontsize%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%2010px%20%21default%0A%24tooltip-mobile-padding%20%20%20%20%20%20%20%20%20%3A%208px%2016px%20%21default%0A%24tooltip-mobile-fontsize%20%20%20%20%20%20%20%20%3A%2014px%20%21default%0A%0A%24option-focus-transition%20%20%20%20%20%20%20%20%3A%20.22s%20cubic-bezier%280%2C0%2C.2%2C1%29%20%21default%0A%0A%24input-font-size%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%2014px%20%21default%0A%24input-text-color%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20rgba%280%2C0%2C0%2C.87%29%20%21default%0A%24input-label-color%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20rgba%280%2C0%2C0%2C.6%29%20%21default%0A%24input-autofill-color%20%20%20%20%20%20%20%20%20%20%20%3A%20inherit%20%21default%0A%0A%24img-loading-font-size%20%20%20%20%20%20%20%20%20%20%3A%2050px%20%21default%0A%24img-content-position%20%20%20%20%20%20%20%20%20%20%20%3A%20absolute%20%21default%0A%24img-content-padding%20%20%20%20%20%20%20%20%20%20%20%20%3A%2016px%20%21default%0A%24img-content-color%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%23fff%20%21default%0A%24img-content-background%20%20%20%20%20%20%20%20%20%3A%20rgba%280%2C%200%2C%200%2C%20.47%29%20%21default%0A",lang:"scss"})]),_:1})}}};export{r as default};