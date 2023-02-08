import{r as t,o as l,c as a,f as d,g as p,a9 as e,v as n}from"./vendor-585b19a3.js";const r=e("div",{class:"doc-note doc-note--warning"},[e("p",{class:"doc-note__title"},"WARNING"),e("p",null,[n("\u4F20\u8FDB\u6765\u7684\u5143\u7D20\u5FC5\u987B\u53EA\u6709\u4E00\u4E2A\u5143\u7D20\u4E14\u5305\u88F9\u4E00\u4E2Aspan\u6807\u7B7E"),e("br"),n(" element-ui\u7684tooltip\u4E0D\u652F\u6301router-link \u3010\u6765\u81EA\u5B98\u65B9\u7684\u8B66\u544A\u3011\uFF0C\u4F46\u662F\u4EE5slot\u7684\u65B9\u5F0F\u597D\u50CF\u6CA1\u95EE\u9898")])],-1),g={__name:"TextOverflowEllipsis_vue",setup(c){const o=[{id:"doc-title",title:"\u6587\u5B57\u8D85\u957F\u663E\u793Atooltip"}];return(h,u)=>{const s=t("doc-code"),i=t("doc-page");return l(),a(i,{desc:"\u6587\u5B57\u8D85\u957F\u663E\u793Atooltip\uFF0C\u4E0D\u8D85\u957F\u4E0D\u663E\u793A",toc:o},{default:d(()=>[p(s,{code:`<template>
  <el-tooltip
    effect="light"
    :enterable="enterable"
    :placement="placement"
    :disabled="disabled"
    :content="content">
    <slot></slot>
  </el-tooltip>
</template>
<script>
import observeResize from '@/plugins/domResizeSensor'
export default {
  props: {
    placement: {
      type: String,
      default: 'top',
    },
    enterable: {
      type: Boolean,
      default: true,
    },
    observe: { // \u662F\u5426\u5B9E\u65F6\u76D1\u542C\u5143\u7D20\u5927\u5C0F\u7684\u53D8\u5316
      type: Boolean,
      default: true,
    },
  },
  data () {
    return {
      content: '',
      disabled: true,
    }
  },
  mounted () {
    this.p = this.$slots.default[0].elm
    this.p.style.whiteSpace = 'nowrap'
    this.p.style.overflow = 'hidden'
    this.p.style.textOverflow = 'ellipsis'
    this.span = this.p.querySelector('span')
    this.recalculateTextEllipsis()
    if (this.observe) {
      observeResize(this.p, this.recalculateTextEllipsis)
      observeResize(this.span, this.recalculateTextEllipsis)
    }
  },
  updated () {
    if (!this.observe) {
      this.recalculateTextEllipsis()
    }
  },
  methods: {
    recalculateTextEllipsis () {
      this.$nextTick(() => {
        let computedStyle = window.getComputedStyle(this.p)
        let paddingLeft = parseFloat(computedStyle.paddingLeft)
        let paddingRight = parseFloat(computedStyle.paddingRight)
        let borderLeftWidth = parseFloat(computedStyle.borderLeftWidth)
        let borderRightWidth = parseFloat(computedStyle.borderRightWidth)
        if (this.span.getBoundingClientRect().width > this.p.getBoundingClientRect().width - paddingLeft - paddingRight - borderLeftWidth - borderRightWidth) {  // \u4F7F\u7528offsetWidth\u4F1A\u6709\u7CBE\u5EA6\u95EE\u9898
          this.content = this.span.textContent
          this.disabled = false
        } else {
          this.disabled = true
        }
      })
    },
  },
}
<\/script>
`,lang:"vue"}),r]),_:1})}}};export{g as default};
