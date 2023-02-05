import{r as n,o as u,c,f as e,g as l,aa as t,v as d}from"./vendor.js";const m=t("h2",{id:"1-props",class:"doc-heading"},"Props",-1),f=t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"name"),t("th",{class:"text-left"},"type"),t("th",{class:"text-left"},"default"),t("th",{class:"text-left"},"description")])],-1),h=t("tbody",null,[t("tr",null,[t("td",null,"autofocus"),t("td",null,"Boolean"),t("td",null,"false"),t("td",null,"Focus first focusable element on initial component render")]),t("tr",null,[t("td",null,"no-error-focus"),t("td",null,"Boolean"),t("td",null,"false"),t("td",null,"Do not try to focus on first component that has a validation error when submitting form")]),t("tr",null,[t("td",null,"no-reset-focus"),t("td",null,"Boolean"),t("td",null,"false"),t("td",null,"Do not try to focus on first component when resetting form")]),t("tr",null,[t("td",null,"greedy"),t("td",null,"Boolean"),t("td",null,"false"),t("td",null,"Validate all fields in form (by default it stops after finding the first invalid field with synchronous validation)")])],-1),p=t("h2",{id:"2-events",class:"doc-heading"},"Events",-1),_=t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"name"),t("th",{class:"text-left"},"description")])],-1),v=t("tbody",null,[t("tr",null,[t("td",null,"@submit -> function(evt)"),t("td",null,"Emitted when all validations have passed when tethered to a submit button")]),t("tr",null,[t("td",null,"@reset -> function()"),t("td",null,"Emitted when all validations have been reset when tethered to a reset button; It is recommended to manually reset the wrapped components models in this handler")]),t("tr",null,[t("td",null,"@validation-success -> function()"),t("td",null,"Emitted after a validation was triggered and all inner Quasar components models are valid")]),t("tr",null,[t("td",null,"@validation-error -> function(ref)"),t("td",null,"Emitted after a validation was triggered and at least one of the inner Quasar components models are NOT valid")])],-1),g=t("h2",{id:"3-methods",class:"doc-heading"},"methods",-1),b=t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"name"),t("th",{class:"text-left"},"description")])],-1),y=t("tbody",null,[t("tr",null,[t("td",null,"focus () => void 0"),t("td",null,"Focuses the first focusable element in the form")]),t("tr",null,[t("td",null,"validate ([shouldFocus]) => Promise<boolean>"),t("td",null,"Triggers a validation on all applicable inner Quasar components")]),t("tr",null,[t("td",null,"resetValidation () => void 0"),t("td",null,"Resets the validation on all applicable inner Quasar components")]),t("tr",null,[t("td",null,"submit ([evt]) => void 0"),t("td",null,"Manually trigger form validation and submit")]),t("tr",null,[t("td",null,"reset ([evt]) => void 0"),t("td",null,"Manually trigger form reset")]),t("tr",null,[t("td",null,"getValidationComponents () => Array"),t("td",null,"Get array of children vue components that support validation")])],-1),x=t("h2",{id:"4-tips",class:"doc-heading"},"tips",-1),w=t("li",null,"QForm hooks into QInput, QSelect or QField wrapped components",-1),Q=t("li",null,"QInput, QSelect or QField wrapped components must use the internal validation (NOT the external one).",-1),q=t("li",null,"If you want to take advantage of the reset functionality, then be sure to also capture the @reset event on QForm and make its handler reset all of the wrapped components models",-1),V={__name:"form",setup(B){const i=[{id:"doc-title",title:"form"},{id:"1-props",title:"1. Props"},{id:"2-events",title:"2. Events"},{id:"3-methods",title:"3. methods"},{id:"4-tips",title:"4. tips"}];return(k,F)=>{const o=n("q-markup-table"),s=n("c-scroll-area"),a=n("doc-link"),r=n("doc-page");return u(),c(r,{desc:"",toc:i},{default:e(()=>[m,l(s,{"fit-content-height":"",class:"q-mt-md q-mb-sm","content-style":{paddingBottom:"10px"}},{default:e(()=>[l(o,{flat:"",bordered:"",dense:""},{default:e(()=>[f,h]),_:1})]),_:1}),p,l(s,{"fit-content-height":"",class:"q-mt-md q-mb-sm","content-style":{paddingBottom:"10px"}},{default:e(()=>[l(o,{flat:"",bordered:"",dense:""},{default:e(()=>[_,v]),_:1})]),_:1}),g,l(s,{"fit-content-height":"",class:"q-mt-md q-mb-sm","content-style":{paddingBottom:"10px"}},{default:e(()=>[l(o,{flat:"",bordered:"",dense:""},{default:e(()=>[b,y]),_:1})]),_:1}),x,t("ul",null,[w,Q,q,t("li",null,[l(a,{to:"https://quasar.dev/vue-components/form#turning-off-autocompletion"},{default:e(()=>[d("Turning off Autocompletion")]),_:1})]),t("li",null,[l(a,{to:"https://quasar.dev/vue-components/form#submitting-to-a-url-native-form-submit-"},{default:e(()=>[d("native form submit")]),_:1})]),t("li",null,[l(a,{to:"https://quasar.dev/vue-components/form#child-communication"},{default:e(()=>[d("useFormChild \u81EA\u5B9A\u4E49 form component")]),_:1})])])]),_:1})}}};export{V as default};
