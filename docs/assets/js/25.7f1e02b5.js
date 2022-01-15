(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{503:function(t,a,r){"use strict";r.r(a);var e=r(7),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h3",{attrs:{id:"字符集和字符编码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符集和字符编码"}},[t._v("#")]),t._v(" 字符集和字符编码")]),t._v(" "),r("p",[t._v("字符集:定义了文字和二进制的对应关系，为字符分配了唯一的编号"),r("br"),t._v("\n字符编码:规定了如何将文字的编号存储到内存中")]),t._v(" "),r("h3",{attrs:{id:"unicode是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unicode是什么"}},[t._v("#")]),t._v(" Unicode是什么")]),t._v(" "),r("p",[t._v("因为计算机只能处理数字，如果要处理文本，就必须先把文本转换为数字才能处理。"),r("br"),t._v("\n计算机在设计时采用8个比特（bit）作为一个字节（byte）"),r("br"),t._v("\n一个字节能表示的最大的整数就是255（2的8次方-1）"),r("br"),t._v("\n0 - 255被用来表示大小写英文字母、数字和一些符号，这个编码表被称为ASCII编码")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("//ASCII\nA   ---\x3e    65\nz   ---\x3e    122\n")])])]),r("p",[t._v("如果要表示中文，显然一个字节是不够的，至少需要两个字节，而且还不能和"),r("strong",[t._v("ASCII")]),t._v("编码冲突，所以，中国制定了GB2312编码，用来把中文编进去。"),r("br"),t._v("\n日文和韩文等其他语言也有这个问题"),r("br"),t._v("\n为了统一所有文字（ASCII，GB2312...）的编码，Unicode编码应运而生")]),t._v(" "),r("h3",{attrs:{id:"格式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#格式"}},[t._v("#")]),t._v(" 格式")]),t._v(" "),r("p",[t._v("通常会用“U+”然后紧接着一组十六进制的数字来表示这一个字符")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("U+0000 = null   \n//可以表示16*16*16*16 = 2的16次方个字符\n")])])]),r("h3",{attrs:{id:"基本平面与辅助平面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本平面与辅助平面"}},[t._v("#")]),t._v(" 基本平面与辅助平面")]),t._v(" "),r("p",[t._v("Unicode不是一次性定义的，而是分区定义"),r("br"),t._v("\n每个区可以存放65536个（2的16次方）字符，称为一个平面（plane）"),r("br"),t._v("\n目前一共有（2的4次方 + 1）个平面，也就是说，整个Unicode字符集的大小现在是（2的20次方 + 1）")]),t._v(" "),r("h4",{attrs:{id:"基本平面-缩写bmp-【刚好占1个平面】"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本平面-缩写bmp-【刚好占1个平面】"}},[t._v("#")]),t._v(" 基本平面（缩写BMP）【刚好占1个平面】")]),t._v(" "),r("p",[t._v("码点范围是从0一直到256-1，写成16进制就是从U+0000到U+FFFF"),r("br"),t._v("\n所有最常见的字符都放在这个平面，这是Unicode最先定义和公布的一个平面")]),t._v(" "),r("h4",{attrs:{id:"辅助平面-缩写smp-【刚好占2的4次方-1-十六进制01-10-个平面】"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#辅助平面-缩写smp-【刚好占2的4次方-1-十六进制01-10-个平面】"}},[t._v("#")]),t._v(" 辅助平面（缩写SMP）【刚好占2的4次方 + 1（十六进制01-10）个平面】")]),t._v(" "),r("p",[t._v("码点范围从U+010000一直到U+10FFFF")]),t._v(" "),r("h4",{attrs:{id:"参考链接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/guxiaonuan/article/details/78678043",target:"_blank",rel:"noopener noreferrer"}},[t._v("字符编码的概念（UTF-8、UTF-16、UTF-32）都是什么鬼"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);