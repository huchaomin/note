(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{467:function(t,e,n){"use strict";n.r(e);n(141),n(6),n(21),n(23);var u={props:{startVal:{type:Number,default:0},endVal:{type:Number,required:!0},decimalPlaces:{type:Number,default:0},duration:{type:Number,default:2},useEasing:{type:Boolean,default:!0},useGrouping:{type:Boolean,default:!0},separator:{type:String,default:","},decimal:{type:String,default:"."},prefix:{type:String,default:""},suffix:{type:String,default:""},autoStart:{type:Boolean,default:!0}},watch:{endVal:function(t){this.counter&&this.counter.update(t)}},mounted:function(){this.init()},methods:{init:function(){var t=this;n.e(16).then(n.bind(null,462)).then((function(e){t.tmpCounter=new e.CountUp(t.$refs.countup,t.endVal,{startVal:t.startVal,decimalPlaces:t.decimalPlaces,duration:t.duration,useEasing:t.useEasing,useGrouping:t.useGrouping,separator:t.separator,decimal:t.decimal,prefix:t.prefix,suffix:t.suffix}),t.autoStart&&(t.counter=t.tmpCounter,t.counter.start())}))},reset:function(){this.counter&&this.counter.reset()},start:function(){this.counter=this.tmpCounter,this.counter&&(this.reset(),this.counter.start())}}},a=n(5),r=Object(a.a)(u,(function(){var t=this.$createElement;return(this._self._c||t)("span",{ref:"countup"})}),[],!1,null,null,null);e.default=r.exports}}]);