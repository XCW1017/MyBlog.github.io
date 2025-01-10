(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{489:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"防火墙打开关闭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防火墙打开关闭"}},[s._v("#")]),s._v(" 防火墙打开关闭")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开防火墙")]),s._v("\nsystemctl start firewalld\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭防火墙")]),s._v("\nsystemctl stop firewalld\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启防火墙")]),s._v("\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--reload")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"查看开放端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看开放端口"}},[s._v("#")]),s._v(" 查看开放端口")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看已开放端口集合")]),s._v("\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--zone")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --list-ports\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看指定端口是否开放")]),s._v("\nfirewall-cmd --query-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/tcp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"开放端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开放端口"}},[s._v("#")]),s._v(" 开放端口")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 永久性开放端口")]),s._v("\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--zone")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/tcp\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#移除开放端口")]),s._v("\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v(" --remove-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("/tcp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);