(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{486:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"集群高并发情况下如何保证分布式唯一id全局生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集群高并发情况下如何保证分布式唯一id全局生成"}},[t._v("#")]),t._v(" 集群高并发情况下如何保证分布式唯一ID全局生成")]),t._v(" "),s("blockquote",[s("p",[t._v("工程分布式部署，要求抗住高并发。并且生成的id是根据时间自增的")])]),t._v(" "),s("h2",{attrs:{id:"_1-id生成规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-id生成规则"}},[t._v("#")]),t._v(" 1.ID生成规则")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("全局唯一：")]),t._v(" "),s("ul",[s("li",[t._v("不能出现重复ID号；")])])]),t._v(" "),s("li",[s("strong",[t._v("趋势递增：")]),t._v(" "),s("ul",[s("li",[t._v("在MySQL的innoDB.引擎中使用的是聚集索引，由于多数RDBMS使用B+tree的数据结构来存储索引数据，在主键的选择上面我们应该尽量使用有序的主键保证写入性能;")])])]),t._v(" "),s("li",[s("strong",[t._v("单调递增：")]),t._v(" "),s("ul",[s("li",[t._v("保证下一个大于上一个；例如事务版本号，IM增量消息，排序等排序要求;")])])]),t._v(" "),s("li",[s("strong",[t._v("信息安全：")]),t._v(" "),s("ul",[s("li",[t._v("如果ID是连续的，恶意用户的扒取工作就非常容易做了，直接按照顺序下载指定URL即可;如果是订单号就更危险了，竞争对手直接知道我们一天的单量。所以在一些应用场景下，需要ID无规则不规则，让竞争对手不好猜。")])])]),t._v(" "),s("li",[s("strong",[t._v("含时间戳：")]),t._v(" "),s("ul",[s("li",[t._v("可以在开发中快速了解分布式ID的生成时间。")])])])]),t._v(" "),s("h2",{attrs:{id:"_2-id生成的系统可用性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-id生成的系统可用性"}},[t._v("#")]),t._v(" 2.ID生成的系统可用性")]),t._v(" "),s("ul",[s("li",[t._v("高可用\n"),s("ul",[s("li",[t._v("发一个获取分布式ID的请求，服务器就要保证99.999%的情况下给我创建一个唯一分布式ID")])])]),t._v(" "),s("li",[t._v("低延迟\n"),s("ul",[s("li",[t._v("发一个获取分布式ID的请求，服务器要快速，急速。")])])]),t._v(" "),s("li",[t._v("高QPS\n"),s("ul",[s("li",[t._v("例如一口气10万个创建分布式ID请求，服务器要扛得住压力。")])])])]),t._v(" "),s("h2",{attrs:{id:"_3-一般方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-一般方案"}},[t._v("#")]),t._v(" 3.一般方案")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("UUID：")])]),t._v(" "),s("p",[t._v("字符串太长，不自增，影响存储性能；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("数据库自增：")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Redis生成策略：")])]),t._v(" "),s("p",[t._v("通过使用incr，incrby实现，缺陷：维护多台Redis麻烦")])])]),t._v(" "),s("h2",{attrs:{id:"_4-snowflake雪花算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-snowflake雪花算法"}},[t._v("#")]),t._v(" 4.SnowFlake雪花算法")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("算法原理：生成一个64bit大小的整数")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("1bit")]),t._v("，不用，因；为二进制中最高位是符号位，1表示负数，0表示正数。生成的id一般都是用整数，所以最高位固定为0；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("41bit-时间戳")]),t._v("，用来记录时间戳，毫秒级。")]),t._v(" "),s("p",[t._v("41位可以表示2^{41}-1个数字，减1是因为可表示的数值范围是从0开始算的，而不是1。(2^{41})/(1000"),s("em",[t._v("60")]),t._v("60* 24*365)=69年")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("10bit-工作机器id")]),t._v(":用来记录工作机器id.")]),t._v(" "),s("p",[t._v("可以部署2^10=1024个节点，包括5位datacenterId和5位workerId；0-31表示不同的datecenterId和workerId；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("12bit-序列号")]),t._v("，序列号，用来记录同毫秒内产生的不同id。")]),t._v(" "),s("p",[t._v("表示最大正整数2^12-1=4095，同一机器，同一毫秒内产生的ID序号；")])])])])]),t._v(" "),s("p",[t._v("使用糊涂工具使用雪花算法")]),t._v(" "),s("p",[t._v("下载地址：https://www.hutool.cn/docs/#/")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("引入依赖")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("cn.hutool"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hutool-all"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("5.4.6"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("使用")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hutool"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Long")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hutool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" workerId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 工作ID 0-31")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" datacenterId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据中心ID 0-31")]),t._v("\n\t\t\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Snowflake")]),t._v(" snowflake "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IdUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSnowflake")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workerId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" datacenterId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//传入参数")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" nextId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" snowflake"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获得long类型Id")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出到控制台")]),t._v("\n\t\t\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" nextId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//返回到页面")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);