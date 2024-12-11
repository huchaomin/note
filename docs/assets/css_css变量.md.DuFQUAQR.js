import{_ as c}from"./chunks/FenceWrapper.Bs4gGVCd.js";import{N as F,_ as C,a as f,b as B,j as v,l as A,i as h,e as _,k as D}from"./chunks/theme.Cx5N_GoI.js";import{a4 as M,Z as x,$ as n,a0 as a,G as g,K as r,a5 as y,Y as w,h as i,a3 as s}from"./chunks/framework.BAU0wbai.js";const Y=JSON.parse('{"title":"css 变量","description":null,"frontmatter":{"author":"peter peter@qingcongai.com","date":"2024-12-10T10:24:20.000Z","lastEditors":"peter peter@qingcongai.com","lastEditTime":"2024-12-10T11:43:23.000Z","description":null,"order":0},"headers":[],"relativePath":"css/css变量.md","filePath":"css/css变量.md","lastUpdated":1733813718000}'),P={name:"css/css变量.md"};function S(e,l,G,N,z,H){const p=_,m=F,d=C,o=f,t=B,k=D,u=v,E=c,b=A;return w(),x("div",null,[n(m,{id:"css-变量"},{default:a(()=>[n(p,null,{default:a(()=>l[0]||(l[0]=[i("css 变量")])),_:1})]),_:1}),n(d,{style:g([{"margin-bottom":"0 !important"},{width:("isMobile"in e?e.isMobile:r(h))?"calc(100% + var(--spacing-6))":"calc(100% + var(--spacing-12))"}]),class:y(("isMobile"in e?e.isMobile:r(h))?"-mx-3":"-ml-8 -mr-3")},null,8,["class","style"]),n(o,{id:"声明"},{default:a(()=>[n(p,null,{default:a(()=>l[1]||(l[1]=[i("声明")])),_:1})]),_:1}),n(u,null,{default:a(()=>[n(k,null,{default:a(()=>[n(t,null,{default:a(()=>[l[3]||(l[3]=i("用 ")),n(p,{code:""},{default:a(()=>l[2]||(l[2]=[s("code",null,"--",-1)])),_:1}),l[4]||(l[4]=i(" 开头"))]),_:1})]),_:1}),n(k,null,{default:a(()=>[n(t,null,{default:a(()=>l[5]||(l[5]=[i("值可以是任何类型，包括颜色、长度、字体大小、百分比等")])),_:1})]),_:1}),n(k,null,{default:a(()=>[n(t,null,{default:a(()=>[l[8]||(l[8]=i("变量名大小写敏感， ")),n(p,{code:""},{default:a(()=>l[6]||(l[6]=[s("code",null,"--header-color",-1)])),_:1}),l[9]||(l[9]=i(" 和 ")),n(p,{code:""},{default:a(()=>l[7]||(l[7]=[s("code",null,"--Header-Color",-1)])),_:1}),l[10]||(l[10]=i(" 是两个不同变量"))]),_:1})]),_:1})]),_:1}),n(E,{inCodeGroup:!1,content:`:root {
  --main-color: #4d4e53;
  --main-bg: var(--main-color);
  --main-bg1: var(--main-color1, #fff);
  --main-bg2: rgb(255 0 0 / var(--opacity, 0.8));
  --base-line-height: 1.428;
  --transition-duration: 0.35s;
  --external-link: 'external link';
  --margin-top: calc(2vh + 20px);
}`},{default:a(()=>l[11]||(l[11]=[s("div",{class:"language-css line-numbers-mode"},[s("span",{class:"lang"},"css"),s("pre",{class:"shiki shiki-themes github-dark github-light vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"}},":root"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"  --main-color"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"#4d4e53"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"  --main-bg"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"var"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"--main-color"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"  --main-bg1"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"var"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"--main-color1"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},", "),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"#fff"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"  --main-bg2"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"rgb"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"255"),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}}," 0"),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}}," 0"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}}," / "),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"var"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"--opacity"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},", "),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"0.8"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"));")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"  --base-line-height"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"1.428"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"  --transition-duration"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"0.35"),s("span",{style:{"--shiki-dark":"#F97583","--shiki-light":"#D73A49"}},"s"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"  --external-link"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#9ECBFF","--shiki-light":"#032F62"}},"'external link'"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"  --margin-top"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"calc"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"2"),s("span",{style:{"--shiki-dark":"#F97583","--shiki-light":"#D73A49"}},"vh"),s("span",{style:{"--shiki-dark":"#F97583","--shiki-light":"#D73A49"}}," +"),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}}," 20"),s("span",{style:{"--shiki-dark":"#F97583","--shiki-light":"#D73A49"}},"px"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"}")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br")])],-1)])),_:1}),n(d,{style:g([{"margin-bottom":"0 !important"},{width:("isMobile"in e?e.isMobile:r(h))?"calc(100% + var(--spacing-6))":"calc(100% + var(--spacing-12))"}]),class:y(("isMobile"in e?e.isMobile:r(h))?"-mx-3":"-ml-8 -mr-3")},null,8,["class","style"]),n(o,{id:"var-函数"},{default:a(()=>[n(p,null,{default:a(()=>l[12]||(l[12]=[i("var() 函数")])),_:1})]),_:1}),n(u,null,{default:a(()=>[n(k,null,{default:a(()=>[n(t,null,{default:a(()=>l[13]||(l[13]=[i("用于读取变量")])),_:1})]),_:1}),n(k,null,{default:a(()=>[n(t,null,{default:a(()=>l[14]||(l[14]=[i("第二个参数，表示变量的默认值。如果该变量不存在，就会使用这个默认值。")])),_:1}),n(E,{inCodeGroup:!1,content:`/* 第二个参数不处理内部的逗号或空格，都视作参数的一部分 */
--font: var(--font-stack, 'Roboto', 'Helvetica'); /* 不要认为有第三个参数 */
--pad: var(--pad, 10px 15px 20px);`},{default:a(()=>l[15]||(l[15]=[s("div",{class:"language-css line-numbers-mode"},[s("span",{class:"lang"},"css"),s("pre",{class:"shiki shiki-themes github-dark github-light vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#6A737D","--shiki-light":"#6A737D"}},"/* 第二个参数不处理内部的逗号或空格，都视作参数的一部分 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"--font: var(--font-stack, 'Roboto', 'Helvetica'); "),s("span",{style:{"--shiki-dark":"#6A737D","--shiki-light":"#6A737D"}},"/* 不要认为有第三个参数 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"--pad: var(--pad, 10px 15px 20px);")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br")])],-1)])),_:1})]),_:1}),n(k,null,{default:a(()=>[n(t,null,{default:a(()=>l[16]||(l[16]=[i("可以用在变量的声明，如上")])),_:1})]),_:1}),n(k,null,{default:a(()=>[n(t,null,{default:a(()=>l[17]||(l[17]=[i("只能用作属性值，不能用作属性名")])),_:1})]),_:1})]),_:1}),n(d,{style:g([{"margin-bottom":"0 !important"},{width:("isMobile"in e?e.isMobile:r(h))?"calc(100% + var(--spacing-6))":"calc(100% + var(--spacing-12))"}]),class:y(("isMobile"in e?e.isMobile:r(h))?"-mx-3":"-ml-8 -mr-3")},null,8,["class","style"]),n(o,{id:"变量值的类型"},{default:a(()=>[n(p,null,{default:a(()=>l[18]||(l[18]=[i("变量值的类型")])),_:1})]),_:1}),n(b,null,{default:a(()=>[n(k,null,{default:a(()=>[n(t,null,{default:a(()=>l[19]||(l[19]=[i("如果是字符串，可以与其他字符串拼接")])),_:1}),n(E,{inCodeGroup:!1,content:`:root {
   --bar: 'hello';
   --foo: var(--bar) ' world';
 }

 body::after {
   content: '--screen-category : 'var(--screen-category, 'some content');
 }`},{default:a(()=>l[20]||(l[20]=[s("div",{class:"language-css line-numbers-mode"},[s("span",{class:"lang"},"css"),s("pre",{class:"shiki shiki-themes github-dark github-light vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"}}," :root"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"   --bar"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#9ECBFF","--shiki-light":"#032F62"}},"'hello'"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"   --foo"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"var"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"--bar"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},") "),s("span",{style:{"--shiki-dark":"#9ECBFF","--shiki-light":"#032F62"}},"' world'"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}}," }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}}," body"),s("span",{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"}},"::after"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"   content"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#9ECBFF","--shiki-light":"#032F62"}},"'--screen-category : '"),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"var"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"--screen-category"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},", "),s("span",{style:{"--shiki-dark":"#9ECBFF","--shiki-light":"#032F62"}},"'some content'"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}}," }")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br")])],-1)])),_:1})]),_:1}),n(k,null,{default:a(()=>[n(t,null,{default:a(()=>l[21]||(l[21]=[i("如果变量值是数值，不能与数值单位直接连用。")])),_:1}),n(E,{inCodeGroup:!1,content:`.foo {
   --gap: 20;

   /* 无效 */
   margin-top: var(--gap) px;

   /* 有效 */
   margin-top: calc(var(--gap) * 1px);
 }`},{default:a(()=>l[22]||(l[22]=[s("div",{class:"language-css line-numbers-mode"},[s("span",{class:"lang"},"css"),s("pre",{class:"shiki shiki-themes github-dark github-light vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"}}," .foo"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"   --gap"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"20"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},";")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#6A737D","--shiki-light":"#6A737D"}},"   /* 无效 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"   margin-top"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"var"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"--gap"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},") px;")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#6A737D","--shiki-light":"#6A737D"}},"   /* 有效 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"   margin-top"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"calc"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"var"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"--gap"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},") "),s("span",{style:{"--shiki-dark":"#F97583","--shiki-light":"#D73A49"}},"*"),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}}," 1"),s("span",{style:{"--shiki-dark":"#F97583","--shiki-light":"#D73A49"}},"px"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}}," }")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br")])],-1)])),_:1})]),_:1}),n(k,null,{default:a(()=>[n(t,null,{default:a(()=>l[23]||(l[23]=[i("如果变量值带有单位，就不能写成字符串")])),_:1}),n(E,{inCodeGroup:!1,content:`/* 无效 */
 .foo {
   --foo: '20px';

   font-size: var(--foo);
 }

 /* 有效 */
 .foo1 {
   --foo: 20px;

   font-size: var(--foo);
 }`},{default:a(()=>l[24]||(l[24]=[s("div",{class:"language-css line-numbers-mode"},[s("span",{class:"lang"},"css"),s("pre",{class:"shiki shiki-themes github-dark github-light vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#6A737D","--shiki-light":"#6A737D"}}," /* 无效 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"}}," .foo"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"   --foo"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#9ECBFF","--shiki-light":"#032F62"}},"'20px'"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},";")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"   font-size"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"var"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"--foo"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}}," }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#6A737D","--shiki-light":"#6A737D"}}," /* 有效 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"}}," .foo1"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"   --foo"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"20"),s("span",{style:{"--shiki-dark":"#F97583","--shiki-light":"#D73A49"}},"px"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},";")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"   font-size"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},": "),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}},"var"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"--foo"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}}," }")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br")])],-1)])),_:1})]),_:1})]),_:1}),n(d,{style:g([{"margin-bottom":"0 !important"},{width:("isMobile"in e?e.isMobile:r(h))?"calc(100% + var(--spacing-6))":"calc(100% + var(--spacing-12))"}]),class:y(("isMobile"in e?e.isMobile:r(h))?"-mx-3":"-ml-8 -mr-3")},null,8,["class","style"]),n(o,{id:"作用域"},{default:a(()=>[n(p,null,{default:a(()=>l[25]||(l[25]=[i("作用域")])),_:1})]),_:1}),n(t,null,{default:a(()=>l[26]||(l[26]=[i('与 CSS 的"层叠"（cascade）规则是一致的')])),_:1}),n(d,{style:g([{"margin-bottom":"0 !important"},{width:("isMobile"in e?e.isMobile:r(h))?"calc(100% + var(--spacing-6))":"calc(100% + var(--spacing-12))"}]),class:y(("isMobile"in e?e.isMobile:r(h))?"-mx-3":"-ml-8 -mr-3")},null,8,["class","style"]),n(o,{id:"javascript-操作"},{default:a(()=>[n(p,null,{default:a(()=>l[27]||(l[27]=[i("JavaScript 操作")])),_:1})]),_:1}),n(E,{inCodeGroup:!1,content:`// 设置变量
document.body.style.setProperty('--primary', '#7F583F')

// 读取变量
document.body.style.getPropertyValue('--primary').trim()

// 删除变量
document.body.style.removeProperty('--primary')`},{default:a(()=>l[28]||(l[28]=[s("div",{class:"language-ts line-numbers-mode"},[s("span",{class:"lang"},"ts"),s("pre",{class:"shiki shiki-themes github-dark github-light vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#6A737D","--shiki-light":"#6A737D"}},"// 设置变量")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"document.body.style."),s("span",{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"}},"setProperty"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#9ECBFF","--shiki-light":"#032F62"}},"'--primary'"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},", "),s("span",{style:{"--shiki-dark":"#9ECBFF","--shiki-light":"#032F62"}},"'#7F583F'"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},")")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#6A737D","--shiki-light":"#6A737D"}},"// 读取变量")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"document.body.style."),s("span",{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"}},"getPropertyValue"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#9ECBFF","--shiki-light":"#032F62"}},"'--primary'"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},")."),s("span",{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"}},"trim"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"()")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#6A737D","--shiki-light":"#6A737D"}},"// 删除变量")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"document.body.style."),s("span",{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"}},"removeProperty"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#9ECBFF","--shiki-light":"#032F62"}},"'--primary'"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},")")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br")])],-1)])),_:1}),n(t,null,{default:a(()=>l[29]||(l[29]=[i("例")])),_:1}),n(E,{inCodeGroup:!1,content:`const docStyle = document.documentElement.style

document.addEventListener('mousemove', (e) => {
  docStyle.setProperty('--mouse-x', e.clientX)
  docStyle.setProperty('--mouse-y', e.clientY)
})`},{default:a(()=>l[30]||(l[30]=[s("div",{class:"language-ts line-numbers-mode"},[s("span",{class:"lang"},"ts"),s("pre",{class:"shiki shiki-themes github-dark github-light vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#F97583","--shiki-light":"#D73A49"}},"const"),s("span",{style:{"--shiki-dark":"#79B8FF","--shiki-light":"#005CC5"}}," docStyle"),s("span",{style:{"--shiki-dark":"#F97583","--shiki-light":"#D73A49"}}," ="),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}}," document.documentElement.style")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"document."),s("span",{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"}},"addEventListener"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#9ECBFF","--shiki-light":"#032F62"}},"'mousemove'"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},", ("),s("span",{style:{"--shiki-dark":"#FFAB70","--shiki-light":"#E36209"}},"e"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},") "),s("span",{style:{"--shiki-dark":"#F97583","--shiki-light":"#D73A49"}},"=>"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"  docStyle."),s("span",{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"}},"setProperty"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#9ECBFF","--shiki-light":"#032F62"}},"'--mouse-x'"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},", e.clientX)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"  docStyle."),s("span",{style:{"--shiki-dark":"#B392F0","--shiki-light":"#6F42C1"}},"setProperty"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"("),s("span",{style:{"--shiki-dark":"#9ECBFF","--shiki-light":"#032F62"}},"'--mouse-y'"),s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},", e.clientY)")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#E1E4E8","--shiki-light":"#24292E"}},"})")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br")])],-1)])),_:1})])}const Z=M(P,[["render",S]]);export{Y as __pageData,Z as default};
