<template>
	<span ref="countup"></span>
</template>
<script>
export default {
  props: {
    startVal: {
      type: Number,
      default: 0,
    },
    endVal: {
      type: Number,
      required: true,
    },
    decimalPlaces: { // 几位小数
      type: Number,
      default: 0,
    },
    duration: { // 耗时，秒
      type: Number,
      default: 2,
    },
    useEasing: {
      type: Boolean,
      default: true,
    },
    useGrouping: { // 是否使用separator
      type: Boolean,
      default: true,
    },
    separator: { // 千分位分隔符
      type: String,
      default: ',',
    },
    decimal: { // 小数点分隔符
      type: String,
      default: '.',
    },
    prefix: {
      type: String,
      default: '',
    },
    suffix: {
      type: String,
      default: '',
    },
    autoStart: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    endVal (val) {
      if (!this.counter) return
      this.counter.update(val) // 没有开始 start 也可以 update
    },
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      import('countup.js').then(module => {
        this.tmpCounter = new module.CountUp(this.$refs.countup, this.endVal, {
          startVal: this.startVal,
          decimalPlaces: this.decimalPlaces,
          duration: this.duration,
          useEasing: this.useEasing,
          useGrouping: this.useGrouping,
          separator: this.separator,
          decimal: this.decimal,
          prefix: this.prefix,
          suffix: this.suffix,
        })
        if (this.autoStart) {
          this.counter = this.tmpCounter
          this.counter.start()
        }
      })
    },
    reset () {
      if (!this.counter) return
      this.counter.reset()
    },
    start () {
      this.counter = this.tmpCounter
      if (!this.counter) return
      this.reset()
      this.counter.start()
    },
  },
}
</script>
