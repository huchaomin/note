import{r as f,o as i,c as s,a as e,w as t,Q as b,b as q,d as m,e as h,f as _,g as v,h as w,i as o,F as u,j as c,t as g,k as y,l as k,m as L}from"./vendor-a2411ed8.js";var x=(l,a)=>{const d=l.__vccOpts||l;for(const[n,p]of a)d[n]=p;return d};const Q={setup(){return{drawerLeft:f(!1),drawerRight:f(!1)}}},D={class:"q-pa-md"},R={class:"q-pa-sm"},V={class:"q-pa-sm"};function B(l,a,d,n,p,O){return i(),s("div",D,[e(L,{view:"hHh Lpr lff",container:"",style:{height:"300px"},class:"shadow-2 rounded-borders"},{default:t(()=>[e(b,{elevated:"",class:"bg-black"},{default:t(()=>[e(q,null,{default:t(()=>[e(m,{flat:"",round:"",dense:"",icon:"menu",onClick:a[0]||(a[0]=r=>n.drawerLeft=!n.drawerLeft)}),e(h,null,{default:t(()=>[_("Header")]),_:1}),e(m,{flat:"",round:"",dense:"",icon:"menu",onClick:a[1]||(a[1]=r=>n.drawerRight=!n.drawerRight)})]),_:1})]),_:1}),e(v,{modelValue:n.drawerLeft,"onUpdate:modelValue":a[2]||(a[2]=r=>n.drawerLeft=r),"show-if-above":"",width:200,breakpoint:700,elevated:"",class:"bg-primary text-white"},{default:t(()=>[e(w,{class:"fit"},{default:t(()=>[o("div",R,[(i(),s(u,null,c(50,r=>o("div",{key:r}," Drawer "+g(r)+" / 50 ",1)),64))])]),_:1})]),_:1},8,["modelValue"]),e(v,{modelValue:n.drawerRight,"onUpdate:modelValue":a[3]||(a[3]=r=>n.drawerRight=r),side:"right","show-if-above":"",bordered:"",width:200,breakpoint:500,class:"bg-grey-3"},{default:t(()=>[e(w,{class:"fit"},{default:t(()=>[o("div",V,[(i(),s(u,null,c(50,r=>o("div",{key:r}," Drawer "+g(r)+" / 50 ",1)),64))])]),_:1})]),_:1},8,["modelValue"]),e(y,null,{default:t(()=>[e(k,{padding:""},{default:t(()=>[(i(),s(u,null,c(15,r=>o("p",{key:r}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate? ")),64))]),_:1})]),_:1})]),_:1})])}var S=x(Q,[["render",B]]),T=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const j={"./src/examples/QDrawer/Basic.vue":T},H={"./src/examples/QDrawer/Basic.vue":`<template>\r
  <div class="q-pa-md">\r
    <q-layout\r
      view="hHh Lpr lff"\r
      container\r
      style="height: 300px"\r
      class="shadow-2 rounded-borders"\r
    >\r
      <q-header elevated class="bg-black">\r
        <q-toolbar>\r
          <q-btn\r
            flat\r
            round\r
            dense\r
            icon="menu"\r
            @click="drawerLeft = !drawerLeft"\r
          ></q-btn>\r
          <q-toolbar-title>Header</q-toolbar-title>\r
          <q-btn\r
            flat\r
            round\r
            dense\r
            icon="menu"\r
            @click="drawerRight = !drawerRight"\r
          ></q-btn>\r
        </q-toolbar>\r
      </q-header>\r
\r
      <q-drawer\r
        v-model="drawerLeft"\r
        show-if-above\r
        :width="200"\r
        :breakpoint="700"\r
        elevated\r
        class="bg-primary text-white"\r
      >\r
        <q-scroll-area class="fit">\r
          <div class="q-pa-sm">\r
            <div v-for="n in 50" :key="n">\r
              Drawer {{ n }} / 50\r
            </div>\r
          </div>\r
        </q-scroll-area>\r
      </q-drawer>\r
\r
      <q-drawer\r
        v-model="drawerRight"\r
        side="right"\r
        show-if-above\r
        bordered\r
        :width="200"\r
        :breakpoint="500"\r
        class="bg-grey-3"\r
      >\r
        <q-scroll-area class="fit">\r
          <div class="q-pa-sm">\r
            <div v-for="n in 50" :key="n">\r
              Drawer {{ n }} / 50\r
            </div>\r
          </div>\r
        </q-scroll-area>\r
      </q-drawer>\r
\r
      <q-page-container>\r
        <q-page padding>\r
          <p v-for="n in 15" :key="n">\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?\r
          </p>\r
        </q-page>\r
      </q-page-container>\r
    </q-layout>\r
  </div>\r
</template>\r
\r
<script>\r
import { ref } from 'vue';\r
\r
export default {\r
  setup() {\r
    return {\r
      drawerLeft: ref(false),\r
      drawerRight: ref(false),\r
    };\r
  },\r
};\r
<\/script>\r
`};var F=Object.freeze(Object.defineProperty({__proto__:null,code:j,source:H},Symbol.toStringTag,{value:"Module"}));export{x as _,F as a};
