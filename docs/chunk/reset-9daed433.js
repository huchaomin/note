import{n as t,o as s,p as c,w as o,a as A,i as e,f as d}from"./vendor-a2411ed8.js";const l=e("h2",{id:"1-\u5E38\u7528",class:"doc-heading"},"\u5E38\u7528",-1),h=e("h2",{id:"2-\u4EE5\u4E0B\u53EF\u9009",class:"doc-heading"},"\u4EE5\u4E0B\u53EF\u9009",-1),B=e("h2",{id:"3-\u53C2\u8003\u6587\u732E",class:"doc-heading"},"\u53C2\u8003\u6587\u732E",-1),C={__name:"reset",setup(m){const i=[{id:"doc-title",title:"css \u5E38\u7528\u7684css reset"},{id:"1-\u5E38\u7528",title:"1. \u5E38\u7528"},{id:"2-\u4EE5\u4E0B\u53EF\u9009",title:"2. \u4EE5\u4E0B\u53EF\u9009"},{id:"3-\u53C2\u8003\u6587\u732E",title:"3. \u53C2\u8003\u6587\u732E"}];return(p,f)=>{const n=t("doc-code"),a=t("doc-link"),r=t("doc-page");return s(),c(r,{desc:"\u603B\u7ED3\u7684 css reset",toc:i},{default:o(()=>[l,A(n,{code:"/**%0A%20*%201.%20Correct%20the%20line%20height%20in%20all%20browsers.%0A%20*%202.%20Prevent%20adjustments%20of%20font%20size%20after%20orientation%20changes%20in%20iOS.%0A%20*/%0Ahtml%20%7B%0A%20%20line-height%3A%201.15%3B%20/*%201%20*/%0A%20%20-webkit-text-size-adjust%3A%20100%25%3B%20/*%202%20*/%0A%7D%0A/**%0A%20*%20Remove%20the%20margin%20in%20all%20browsers.%0A%20*/%0Abody%20%7B%0A%20%20margin%3A%200%3B%0A%7D%0A/**%0A%20*%20Correct%20the%20font%20size%20and%20margin%20on%20%60h1%60%20elements%20within%20%60section%60%20and%0A%20*%20%60article%60%20contexts%20in%20Chrome%2C%20Firefox%2C%20and%20Safari.%0A%20*/%0Ah1%20%7B%0A%20%20font-size%3A%202em%3B%0A%20%20margin%3A%200.67em%200%3B%0A%7D%0A/**%0A%20*%20Add%20the%20correct%20font%20weight%20in%20Chrome%2C%20Edge%2C%20and%20Safari.%0A%20*/%0Ab%2C%0Astrong%20%7B%0A%20%20font-weight%3A%20bolder%3B%0A%7D%0A/**%0A%20*%20Add%20the%20correct%20font%20size%20in%20all%20browsers.%0A%20*/%0Asmall%20%7B%0A%20%20font-size%3A%20.8em%3B%0A%7D%0A/**%0A%20*%201.%20Change%20the%20font%20styles%20in%20all%20browsers.%0A%20*%202.%20Remove%20the%20margin%20in%20Firefox%20and%20Safari.%0A%20*/%0Abutton%2C%0Ainput%2C%0Aselect%2C%0Atextarea%20%7B%0A%20%20font-family%3A%20inherit%3B%20/*%201%20*/%0A%20%20font-size%3A%20100%25%3B%20/*%201%20*/%0A%20%20line-height%3A%201.15%3B%20/*%201%20*/%0A%20%20margin%3A%200%3B%20/*%202%20*/%0A%7D%0A/**%0A%20*%20Remove%20the%20inheritance%20of%20text%20transform%20in%20Edge%2C%20Firefox%2C%20and%20IE.%0A%20*%201.%20Remove%20the%20inheritance%20of%20text%20transform%20in%20Firefox.%0A%20*/%0Abutton%2C%0Aselect%20%7B%20/*%201%20*/%0A%20%20text-transform%3A%20none%3B%0A%7D%0A/**%0A%20*%20Correct%20the%20inability%20to%20style%20clickable%20types%20in%20iOS%20and%20Safari.%0A%20*/%0Abutton%2C%0A%5Btype%3D%22button%22%5D%2C%0A%5Btype%3D%22reset%22%5D%2C%0A%5Btype%3D%22submit%22%5D%20%7B%0A%20%20-webkit-appearance%3A%20button%3B%0A%7D%0A%0A/**%0A%20*%20Correct%20the%20cursor%20style%20of%20increment%20and%20decrement%20buttons%20in%20Chrome.%0A%20*/%0A%5Btype%3D%22number%22%5D%3A%3A-webkit-inner-spin-button%2C%0A%5Btype%3D%22number%22%5D%3A%3A-webkit-outer-spin-button%20%7B%0A%20%20height%3A%20auto%3B%0A%7D%0A/**%0A%20*%201.%20Correct%20the%20odd%20appearance%20in%20Chrome%20and%20Safari.%0A%20*%202.%20Correct%20the%20outline%20style%20in%20Safari.%0A%20*/%0A%5Btype%3D%22search%22%5D%20%7B%0A%20%20-webkit-appearance%3A%20textfield%3B%20/*%201%20*/%0A%20%20outline-offset%3A%20-2px%3B%20/*%202%20*/%0A%7D%0A/**%0A%20*%20Remove%20the%20inner%20padding%20in%20Chrome%20and%20Safari%20on%20macOS.%0A%20*/%0A%5Btype%3D%22search%22%5D%3A%3A-webkit-search-decoration%20%7B%0A%20%20-webkit-appearance%3A%20none%3B%0A%7D%0A",lang:"css"}),h,A(n,{code:"*%2C%0A%3A%3Abefore%2C%0A%3A%3Aafter%20%7B%0A%20%20box-sizing%3A%20border-box%3B%20/*%201%20*/%0A%20%20background-repeat%3A%20no-repeat%3B%20/*%202%20*/%0A%7D%0A%0Aimg%2Cvideo%7B%0A%20%20max-width%3A%20100%25%3B%0A%7D%0A%0Atable%20%7B%0A%20%20border-collapse%3A%20collapse%3B%0A%20%20border-spacing%3A%200%3B%0A%7D%0A%0Aul%7B%0A%20%20list-style%3A%20none%3B%0A%7D%0A",lang:"css"}),B,e("p",null,[A(a,{to:"https://ageek.dev/css-resets"},{default:o(()=>[d("https://ageek.dev/css-resets")]),_:1})])]),_:1})}}};export{C as default};
