webpackJsonp([1],{"/x0q":function(e,t){},"2ShD":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("xd7I"),l=this,i={name:"App",data:()=>({backApp:!1}),created:function(){},watch:{$route(e,t){console.log(e.path),"/"!=e.path?this.backApp=!0:this.backApp=!1}},methods:{backOf:()=>{"/"!=window.location.pathname||"#/"!=window.location.hash?(window.history.back(),l.backApp=!0):l.backApp=!1}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"home"},[e.backApp?a("div",{staticClass:"home_top_muen",on:{click:function(t){return e.backOf()}}},[e._v("\n\t\t\t<")]):e._e(),e._v(" "),a("div",{staticClass:"home_egg",attrs:{id:"home_egg"}},[a("router-view")],1),e._v(" "),a("div",{staticClass:"home_egg_botom"},[a("div",{staticClass:"home_egg_botom_button",on:{click:function(t){return e.backOf()}}},[a("div",{staticClass:"home_egg_botom_button_square"})])])])])},staticRenderFns:[]};var o=a("C7Lr")(i,s,!1,function(e){a("hvb3")},null,null).exports,m=a("3XdE");let v=[{name:"Java",body:"三年开发经验。 最先接触的框架是SSH，没在实际项目中使用过，后面一直使用的是SSM框架。现在工作中主要用到的是Spring Boot，以及Spring系列的微服务架构。干了这么久，意识到自己的欠缺，现在努力在数据结构、算法方面填坑。在工作中首先是需求然后是可行性再然后解决方案最后是技术选择。技术相对不是最重要的，解决用户痛点才是使命。 ",level:6,year:3.4},{name:"JavaSript",body:"这是一门全栈式语言。 从一接触就深爱的语言，无论从语法架构还是设计方式都令我深深着迷。它正在风靡全球。 涉及的领域从PC到移动，从服务器到浏览器，从游戏甚至嵌入式开发，简直太棒了。 当然这一切离不开背后的各种编译器将它编译成适当的机器码。得益于V8引擎才燃起了前端革命之火。",level:4,year:2},{name:"HTML",body:"简直是最理想的GUI啊，不得不感叹它的强大，各种界面绘制简直不要太顺手。HTML5之后是移动互联网的开端，一时间开发者们纷纷站队，我这个后端开发的也经不起它的诱惑投入了它的怀抱。",level:4,year:3},{name:"APP",body:"全栈APP开发工程师，在以前的定义是要会IOS跟Android开发。 但现在不一样了，HTML5APP出现了，跨平台式开发，一份代码两种平台。 高效快捷，节省人力成本。开发框架更是多种多样，甚至都有官方的开发框架。 拖拉组件，编写交互代码即可制作出APP。 使用过它开发过几款APP，现已在各大应用商店上架。但，也正是开发过这几款APP，让我意识到了很多问题，中等大型、性能型、特定性APP还是无法离开原生编程。",level:3,year:2},{name:"WeChat",body:"微信，几乎成了居民的第二张“身份证”。庞大的使用人群，严格的注册方式，都成了它独特的标签。 它还有一颗想成为“系统”级应用的心。从公众号到小程序小游戏，几乎涵盖了你生活中所需的APP的一切功能点。",level:1,year:1}];var u={name:"home",data:()=>({msg:"Welcome to Your Vue.js App",middle:1,content:{name:"Java",body:"",level:6,year:3.5},index:0,lastIndex:v.length}),created:function(){this.content=v[this.index]},methods:{next:function(){this.index>=v.length-1?this.index=0:this.index++,this.middle=this.index+1,this.content=v[this.index]},last:function(){this.index<=0?this.index=v.length-1:this.index--,this.middle=this.index+1,this.content=v[this.index]}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home_body",attrs:{id:"home_major_body"}},[a("div",{staticClass:"home_left"},[a("div",{staticClass:"home_left_title"},[e._v("\n\t\t\t"+e._s(e.content.name)+"\n\t\t")]),e._v(" "),a("div",{staticClass:"home_left_body"},[e._v("\n\t\t\t    \n\t\t\t"+e._s(e.content.body)+"\n\t\t")]),e._v(" "),a("div",{staticClass:"home_left_bottom"},[a("div",{staticClass:"last",on:{click:function(t){return e.last()}}},[a("div",{staticClass:"solid"},[e._v("\n\t\t\t\t\t<")])]),e._v(" "),a("div",{staticClass:"middle"},[e._v(e._s(e.middle)+"/"+e._s(e.lastIndex)+"\n\t\t\t\t")]),e._v(" "),a("div",{staticClass:"next",on:{click:function(t){return e.next()}}},[a("div",{staticClass:"solid"},[e._v(">")])])])]),e._v(" "),a("div",{staticClass:"hone_right"},[a("div",{staticClass:"home_right_top"},[a("div",{staticStyle:{"font-size":"1rem","flex-basis":"100%"}},[e._v("Use time")]),e._v("\n\t\t\t\t"+e._s(e.content.year)+"year\n\t\t\t")]),e._v(" "),a("div",{staticClass:"home_right_bottom"},[a("div",{staticStyle:{"font-size":"1rem","flex-basis":"100%"}},[e._v("Ability Level")]),e._v("\n\t\t\t\t"+e._s(e.content.level)+"\n\t\t\t\t"),a("div",{staticStyle:{"font-size":"1rem","flex-basis":"100%"}},[e._v("A full score of 10")])]),e._v(" "),a("div")])])},staticRenderFns:[]};var c=a("C7Lr")(u,r,!1,function(e){a("2ShD")},"data-v-7c4c6acc",null).exports,h={name:"home",data:()=>({msg:"Welcome to Your Vue.js App",max:0,pointer:0,broadcast:[{title:"Far sail！",slogan:"The brave have no fear！",img:"static/haibian.jpeg",homeColor:"#000000",titleColor:"#FFFFFF"},{title:"On the way！",slogan:"Travel is an attitude and an art。",img:"static/dengta.jpeg",homeColor:"#000000",titleColor:"#FFFFFF"},{title:"Great City",slogan:"We are running on and on。",img:"static/chengshi.jpeg",homeColor:"#000000",titleColor:"#FFFFFF"},{title:"Between Coming and Going！",slogan:"Don't stop, don't wait, go ahead! Forward!",img:"static/chezhan.png",homeColor:"#FFFFFF",titleColor:"#FFFFFF"},{title:"Full-blown flowers",slogan:"Flowers blooming like a piece of brocade。",img:"static/meihua.png",homeColor:"#000000",titleColor:"#000000"},{title:"Born in the sun",slogan:"Life is like summer flowers, death is like autumn leaves。",img:"static/xiaobaihua.jpeg",homeColor:"#FFFFFF",titleColor:"#FFFFFF"},{title:"Delicate and charming",slogan:"Rain and dew stain level add color, Chu and Chu touching camellia blossom。",img:"static/chahua.png",homeColor:"#FFFFFF",titleColor:"#FFFFFF"}],indexObj:{},broadcastBackups:{}}),created:function(){this.max=this.broadcast.length,this.broadcastBackups=JSON.parse(JSON.stringify(this.broadcast)),this.indexObj=this.broadcast[0];let e=this;setInterval(function(){e.pointer<e.max-1?e.pointer=e.pointer+1:e.pointer=0},6e3)}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home_body",attrs:{id:"home_photogrphy_body"}},[e._l(e.broadcast,function(t,n){return[a("div",{staticClass:"background",style:{transform:"translateX("+(100*n-100*e.pointer)+"%)"}},[a("img",{staticClass:"head-background",attrs:{src:t.img}}),e._v(" "),a("div",{staticClass:"head_mask"},[a("div",{staticStyle:{"font-size":"20px","flex-basis":"100%"}},[e._v(e._s(t.title))]),e._v(" "),a("div",[e._v(e._s(t.slogan))])])])]})],2)},staticRenderFns:[]};var d=a("C7Lr")(h,_,!1,function(e){a("cPnF")},null,null).exports,p={name:"index",data:()=>({msg:"Welcome to Your Vue.js App",mapHeight:400}),mounted:function(){let e=document.getElementById("home_egg").clientHeight;this.mapHeight=e}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home_body",attrs:{id:"home_body"}},[e._m(0),e._v(" "),a("div",{staticClass:"home_bottom"},[a("router-link",{staticClass:"home_bottom_itme",staticStyle:{"background-color":"rgba(228,77,38,0.8)"},attrs:{tag:"div",to:"/photography"}},[a("div",{staticClass:"home_bottom_itme_title"},[e._v("\n\t\t  \t摄影\n\t\t  \t")]),e._v(" "),a("div",{staticClass:"home_bottom_itme_describe"},[e._v("\n\t\t  \t抓下这世界稍瞬即逝的美好\n\t\t  ")])]),e._v(" "),a("router-link",{staticClass:"home_bottom_itme",staticStyle:{"background-color":"rgba(25,164,245,0.8)"},attrs:{tag:"div",to:"/home"}},[a("div",{staticClass:"home_bottom_itme_title"},[e._v("专业")]),e._v(" "),a("div",{staticClass:"home_bottom_itme_describe"},[e._v("是时候展现真正的实力了")])]),e._v(" "),a("router-link",{staticClass:"home_bottom_itme",staticStyle:{"background-color":"rgba(245,222,25,0.8)"},attrs:{tag:"div",to:"/world/"+e.mapHeight}},[a("div",{staticClass:"home_bottom_itme_title"},[e._v("视界")]),e._v(" "),a("div",{staticClass:"home_bottom_itme_describe"},[e._v("诗与远方的目的地是大海与花")])]),e._v(" "),a("router-link",{staticClass:"home_bottom_itme",staticStyle:{"background-color":"rgba(25,228,38,0.8)"},attrs:{tag:"div",to:"/about"}},[a("div",{staticClass:"home_bottom_itme_title"},[e._v("关于")]),e._v(" "),a("div",{staticClass:"home_bottom_itme_describe"},[e._v("你想知道的更多的,更好的")])]),e._v(" "),e._m(1)],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home_top"},[t("div",{staticClass:"home_top_muen"}),this._v(" "),t("div",{staticClass:"home_top_name"},[this._v("iMaldwyn")]),this._v(" "),t("div",{staticClass:"home_top_shuoming"},[this._v("您好！感谢与您的相遇！")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"friendship_links"},[a("a",{staticClass:"assembly ui-link",attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-examples.html"}},[e._v("阮一峰")]),e._v(" "),a("a",{staticClass:"assembly ui-link",attrs:{href:"http://www.runoob.com/css3/css3-transitions.html"}},[e._v("菜鸟教程")]),e._v(" "),a("a",{staticClass:"assembly ui-link",attrs:{href:"https://www.awesomes.cn/rank?sort=trend"}},[e._v("前端100")]),e._v(" "),a("a",{staticClass:"assembly ui-link",attrs:{href:"https://cn.vuejs.org/"}},[e._v("VUE")]),e._v(" "),a("a",{staticClass:"assembly ui-link",attrs:{href:"http://www.cssmoban.com/"}},[e._v("模版之家")]),e._v(" "),a("a",{staticClass:"assembly ui-link",attrs:{href:"https://ant.design/index-cn"}},[e._v("参阅了底部设计")]),e._v(" "),a("a",{staticClass:"assembly ui-link",attrs:{href:"http://echarts.baidu.com/"}},[e._v("图表来自Echarts")]),e._v(" "),a("a",{attrs:{href:"https://dribbble.com"}},[e._v("灵感来自于此")]),e._v(" "),a("a",{staticClass:"ui-link",attrs:{href:"https://996.icu"}},[a("img",{attrs:{src:"https://img.shields.io/badge/link-996.icu-red.svg",alt:"996.icu"}})])])}]};var b=a("C7Lr")(p,g,!1,function(e){a("bKVO")},"data-v-3f764b7a",null).exports;a("3qyi");a("J42z");let f=[{name:"海门",value:30},{name:"鄂尔多斯",value:30},{name:"招远",value:30},{name:"舟山",value:30},{name:"齐齐哈尔",value:30},{name:"盐城",value:30},{name:"赤峰",value:30},{name:"青岛",value:30},{name:"乳山",value:30},{name:"金昌",value:30},{name:"泉州",value:30},{name:"莱西",value:30},{name:"日照",value:30},{name:"胶南",value:30},{name:"南通",value:30},{name:"拉萨",value:30},{name:"云浮",value:30},{name:"梅州",value:30},{name:"文登",value:30},{name:"上海",value:30},{name:"攀枝花",value:30},{name:"威海",value:30},{name:"承德",value:30},{name:"厦门",value:30},{name:"汕尾",value:30},{name:"潮州",value:30},{name:"丹东",value:30},{name:"太仓",value:30},{name:"曲靖",value:30},{name:"烟台",value:30},{name:"福州",value:30},{name:"瓦房店",value:30},{name:"即墨",value:30},{name:"抚顺",value:30},{name:"玉溪",value:30},{name:"张家口",value:30},{name:"阳泉",value:30},{name:"莱州",value:30},{name:"湖州",value:30},{name:"汕头",value:30},{name:"昆山",value:30},{name:"宁波",value:30},{name:"湛江",value:30},{name:"揭阳",value:30},{name:"荣成",value:30},{name:"连云港",value:30},{name:"葫芦岛",value:30},{name:"常熟",value:30},{name:"东莞",value:30},{name:"河源",value:30},{name:"淮安",value:30},{name:"泰州",value:30},{name:"南宁",value:30},{name:"营口",value:30},{name:"惠州",value:30},{name:"江阴",value:30},{name:"蓬莱",value:30},{name:"韶关",value:30},{name:"嘉峪关",value:30},{name:"广州",value:138},{name:"延安",value:30},{name:"太原",value:30},{name:"清远",value:30},{name:"中山",value:109},{name:"昆明",value:30},{name:"寿光",value:30},{name:"盘锦",value:30},{name:"长治",value:30},{name:"深圳",value:141},{name:"珠海",value:242},{name:"宿迁",value:30},{name:"咸阳",value:30},{name:"铜川",value:30},{name:"平度",value:30},{name:"佛山",value:30},{name:"海口",value:30},{name:"江门",value:30},{name:"章丘",value:30},{name:"肇庆",value:30},{name:"大连",value:30},{name:"临汾",value:30},{name:"吴江",value:30},{name:"石嘴山",value:30},{name:"沈阳",value:30},{name:"苏州",value:30},{name:"茂名",value:30},{name:"嘉兴",value:30},{name:"长春",value:30},{name:"胶州",value:30},{name:"银川",value:30},{name:"张家港",value:30},{name:"三门峡",value:30},{name:"锦州",value:30},{name:"南昌",value:30},{name:"柳州",value:30},{name:"三亚",value:30},{name:"自贡",value:30},{name:"吉林",value:30},{name:"阳江",value:30},{name:"泸州",value:30},{name:"西宁",value:30},{name:"宜宾",value:30},{name:"呼和浩特",value:30},{name:"成都",value:158},{name:"大同",value:30},{name:"镇江",value:30},{name:"桂林",value:30},{name:"张家界",value:30},{name:"宜兴",value:30},{name:"北海",value:30},{name:"西安",value:30},{name:"金坛",value:30},{name:"东营",value:30},{name:"牡丹江",value:30},{name:"遵义",value:30},{name:"绍兴",value:30},{name:"扬州",value:30},{name:"常州",value:30},{name:"潍坊",value:30},{name:"重庆",value:30},{name:"台州",value:30},{name:"南京",value:30},{name:"滨州",value:30},{name:"贵阳",value:30},{name:"无锡",value:30},{name:"本溪",value:30},{name:"克拉玛依",value:30},{name:"渭南",value:30},{name:"马鞍山",value:30},{name:"宝鸡",value:30},{name:"焦作",value:30},{name:"句容",value:30},{name:"北京",value:30},{name:"徐州",value:30},{name:"衡水",value:30},{name:"包头",value:30},{name:"绵阳",value:30},{name:"乌鲁木齐",value:30},{name:"枣庄",value:30},{name:"杭州",value:30},{name:"淄博",value:30},{name:"鞍山",value:30},{name:"溧阳",value:30},{name:"库尔勒",value:30},{name:"安阳",value:30},{name:"开封",value:30},{name:"济南",value:30},{name:"德阳",value:30},{name:"温州",value:30},{name:"九江",value:30},{name:"邯郸",value:30},{name:"临安",value:30},{name:"兰州",value:30},{name:"沧州",value:30},{name:"临沂",value:30},{name:"南充",value:30},{name:"天津",value:30},{name:"富阳",value:30},{name:"泰安",value:30},{name:"诸暨",value:30},{name:"郑州",value:30},{name:"哈尔滨",value:30},{name:"聊城",value:30},{name:"芜湖",value:30},{name:"唐山",value:30},{name:"平顶山",value:30},{name:"邢台",value:30},{name:"德州",value:30},{name:"济宁",value:30},{name:"荆州",value:30},{name:"宜昌",value:30},{name:"义乌",value:30},{name:"丽水",value:30},{name:"洛阳",value:30},{name:"秦皇岛",value:30},{name:"株洲",value:100},{name:"石家庄",value:30},{name:"莱芜",value:30},{name:"常德",value:30},{name:"保定",value:30},{name:"湘潭",value:154},{name:"金华",value:30},{name:"岳阳",value:30},{name:"长沙",value:200},{name:"衢州",value:30},{name:"廊坊",value:30},{name:"菏泽",value:30},{name:"合肥",value:30},{name:"武汉",value:173},{name:"大庆",value:30}],C={"海门":[121.15,31.89],"鄂尔多斯":[109.781327,39.608266],"招远":[120.38,37.35],"舟山":[122.207216,29.985295],"齐齐哈尔":[123.97,47.33],"盐城":[120.13,33.38],"赤峰":[118.87,42.28],"青岛":[120.33,36.07],"乳山":[121.52,36.89],"金昌":[102.188043,38.520089],"泉州":[118.58,24.93],"莱西":[120.53,36.86],"日照":[119.46,35.42],"胶南":[119.97,35.88],"南通":[121.05,32.08],"拉萨":[91.11,29.97],"云浮":[112.02,22.93],"梅州":[116.1,24.55],"文登":[122.05,37.2],"上海":[121.48,31.22],"攀枝花":[101.718637,26.582347],"威海":[122.1,37.5],"承德":[117.93,40.97],"厦门":[118.1,24.46],"汕尾":[115.375279,22.786211],"潮州":[116.63,23.68],"丹东":[124.37,40.13],"太仓":[121.1,31.45],"曲靖":[103.79,25.51],"烟台":[121.39,37.52],"福州":[119.3,26.08],"瓦房店":[121.979603,39.627114],"即墨":[120.45,36.38],"抚顺":[123.97,41.97],"玉溪":[102.52,24.35],"张家口":[114.87,40.82],"阳泉":[113.57,37.85],"莱州":[119.942327,37.177017],"湖州":[120.1,30.86],"汕头":[116.69,23.39],"昆山":[120.95,31.39],"宁波":[121.56,29.86],"湛江":[110.359377,21.270708],"揭阳":[116.35,23.55],"荣成":[122.41,37.16],"连云港":[119.16,34.59],"葫芦岛":[120.836932,40.711052],"常熟":[120.74,31.64],"东莞":[113.75,23.04],"河源":[114.68,23.73],"淮安":[119.15,33.5],"泰州":[119.9,32.49],"南宁":[108.33,22.84],"营口":[122.18,40.65],"惠州":[114.4,23.09],"江阴":[120.26,31.91],"蓬莱":[120.75,37.8],"韶关":[113.62,24.84],"嘉峪关":[98.289152,39.77313],"广州":[113.23,23.16],"延安":[109.47,36.6],"太原":[112.53,37.87],"清远":[113.01,23.7],"中山":[113.38,22.52],"昆明":[102.73,25.04],"寿光":[118.73,36.86],"盘锦":[122.070714,41.119997],"长治":[113.08,36.18],"深圳":[114.07,22.62],"珠海":[113.52,22.3],"宿迁":[118.3,33.96],"咸阳":[108.72,34.36],"铜川":[109.11,35.09],"平度":[119.97,36.77],"佛山":[113.11,23.05],"海口":[110.35,20.02],"江门":[113.06,22.61],"章丘":[117.53,36.72],"肇庆":[112.44,23.05],"大连":[121.62,38.92],"临汾":[111.5,36.08],"吴江":[120.63,31.16],"石嘴山":[106.39,39.04],"沈阳":[123.38,41.8],"苏州":[120.62,31.32],"茂名":[110.88,21.68],"嘉兴":[120.76,30.77],"长春":[125.35,43.88],"胶州":[120.03336,36.264622],"银川":[106.27,38.47],"张家港":[120.555821,31.875428],"三门峡":[111.19,34.76],"锦州":[121.15,41.13],"南昌":[115.89,28.68],"柳州":[109.4,24.33],"三亚":[109.511909,18.252847],"自贡":[104.778442,29.33903],"吉林":[126.57,43.87],"阳江":[111.95,21.85],"泸州":[105.39,28.91],"西宁":[101.74,36.56],"宜宾":[104.56,29.77],"呼和浩特":[111.65,40.82],"成都":[104.06,30.67],"大同":[113.3,40.12],"镇江":[119.44,32.2],"桂林":[110.28,25.29],"张家界":[110.479191,29.117096],"宜兴":[119.82,31.36],"北海":[109.12,21.49],"西安":[108.95,34.27],"金坛":[119.56,31.74],"东营":[118.49,37.46],"牡丹江":[129.58,44.6],"遵义":[106.9,27.7],"绍兴":[120.58,30.01],"扬州":[119.42,32.39],"常州":[119.95,31.79],"潍坊":[119.1,36.62],"重庆":[106.54,29.59],"台州":[121.420757,28.656386],"南京":[118.78,32.04],"滨州":[118.03,37.36],"贵阳":[106.71,26.57],"无锡":[120.29,31.59],"本溪":[123.73,41.3],"克拉玛依":[84.77,45.59],"渭南":[109.5,34.52],"马鞍山":[118.48,31.56],"宝鸡":[107.15,34.38],"焦作":[113.21,35.24],"句容":[119.16,31.95],"北京":[116.46,39.92],"徐州":[117.2,34.26],"衡水":[115.72,37.72],"包头":[110,40.58],"绵阳":[104.73,31.48],"乌鲁木齐":[87.68,43.77],"枣庄":[117.57,34.86],"杭州":[120.19,30.26],"淄博":[118.05,36.78],"鞍山":[122.85,41.12],"溧阳":[119.48,31.43],"库尔勒":[86.06,41.68],"安阳":[114.35,36.1],"开封":[114.35,34.79],"济南":[117,36.65],"德阳":[104.37,31.13],"温州":[120.65,28.01],"九江":[115.97,29.71],"邯郸":[114.47,36.6],"临安":[119.72,30.23],"兰州":[103.73,36.03],"沧州":[116.83,38.33],"临沂":[118.35,35.05],"南充":[106.110698,30.837793],"天津":[117.2,39.13],"富阳":[119.95,30.07],"泰安":[117.13,36.18],"诸暨":[120.23,29.71],"郑州":[113.65,34.76],"哈尔滨":[126.63,45.75],"聊城":[115.97,36.45],"芜湖":[118.38,31.33],"唐山":[118.02,39.63],"平顶山":[113.29,33.75],"邢台":[114.48,37.05],"德州":[116.29,37.45],"济宁":[116.59,35.38],"荆州":[112.239741,30.335165],"宜昌":[111.3,30.7],"义乌":[120.06,29.32],"丽水":[119.92,28.45],"洛阳":[112.44,34.7],"秦皇岛":[119.57,39.95],"株洲":[113.16,27.83],"石家庄":[114.48,38.03],"莱芜":[117.67,36.19],"常德":[111.69,29.05],"保定":[115.48,38.85],"湘潭":[112.91,27.87],"金华":[119.64,29.12],"岳阳":[113.09,29.37],"长沙":[113,28.21],"衢州":[118.88,28.97],"廊坊":[116.7,39.53],"菏泽":[115.480656,35.23375],"合肥":[117.27,31.86],"武汉":[114.31,30.52],"大庆":[125.03,46.58]};var y={name:"world",components:{},data:()=>({msg:"Welcome to Your Vue.js App",zoom:13,mapHeight:400,mapwidth:400}),created:function(){this.mapHeight=this.$route.params.mapHeight-20,this.mapwidth=this.$route.params.mapHeight-20},mounted:function(){document.getElementById("main");var e=this.$echarts.init(document.getElementById("main")),t=function(e){for(var t=[],a=0;a<e.length;a++){var n=C[e[a].name];n&&t.push({name:e[a].name,value:n.concat(e[a].value)})}return t},a={title:{text:"旅行途径",subtext:"人生是一场旅途，而我希望能遍布足迹",left:"center"},backgroundColor:"#fff",tooltip:{trigger:"item"},geo:{map:"china",zoom:1,right:"0%",left:"0%",label:{normal:{show:!0,color:"#fff"},emphasis:{show:!1}},roam:!1,itemStyle:{normal:{borderWidth:1,areaColor:"rgba(128, 128, 128, 0)",borderColor:"#ffffff"},emphasis:{areaColor:"#3EF3F4"}}},series:[{name:"",type:"scatter",coordinateSystem:"geo",data:t(f),symbolSize:function(e){return e[2]/10},label:{normal:{formatter:"{b}",position:"right",show:!1},emphasis:{show:!1}},itemStyle:{normal:{color:"#5a5a5a"}}},{name:"来过",type:"effectScatter",coordinateSystem:"geo",data:t(f.sort(function(e,t){return t.value-e.value}).slice(0,6)),symbolSize:function(e){return e[2]/10},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"#b51808",shadowBlur:10,shadowColor:"#333"}},zlevel:1}]};e.setOption(a),e.resize()}},F={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{style:{width:this.mapwidth+"px",height:this.mapHeight+"px"},attrs:{id:"main"}})},staticRenderFns:[]};var x=a("C7Lr")(y,F,!1,function(e){a("xehB")},null,null).exports,w={name:"about",data:()=>({msg:"Welcome to Your Vue.js App"}),created:function(){},methods:{}},k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home_body",attrs:{id:"home_about_body"}},[a("div",{staticClass:"home_left"},[a("div",{staticClass:"home_left_title"},[e._v("\n\t\t\tMr. MALDWN\n\t\t")]),e._v(" "),a("div",{staticClass:"home_left_title"},[e._v("\n\t\t\tGENDER MALE\n\t\t")]),e._v(" "),a("div",{staticClass:"home_left_title"},[e._v("\n\t\t\t23 YEARS OLD\n\t\t")]),e._v(" "),a("div",{staticClass:"home_left_title"},[e._v("\n\t\t\tSINGLE\n\t\t")]),e._v(" "),a("div",{staticClass:"home_left_title"},[e._v("\n\t\t\t中国湖南\n\t\t")])]),e._v(" "),a("div",{staticClass:"hone_right"},[e._v("\n\t\t  \n\t\t"),a("div",{staticClass:"hone_right_title_important"},[e._v("\n\t\t\t私密资料\n\t\t")]),e._v(" "),a("div",{staticClass:"home_right_title"},[e._v("\n\t\t\t香蕉、西瓜、葡萄、榴莲、荔枝、龙眼、哈密瓜、芒果、黄桃、橙子\n\t\t\t下厨、湘菜、川菜、米粉、\n\t\t\t跑步、登山、游泳、钓鱼、\n\t\t\t夜空、感受、\n\t\t\tLOL、DNF、狼人杀、\n\t\t\t摄影\n\t\t")]),e._v(" "),a("div",{staticClass:"home_right_line"}),e._v(" "),a("div",{staticClass:"home_right_title"},[e._v("\n\t\t\t  \n\t\t\t我喜欢摄影，也喜欢下厨，但我现在却是一名软件工程师。最喜欢的事物总是想着怎么样去得到，但却始终为生活所拘束。 我喜欢原野，一望无际，辽阔，安静，自由，想着有一天带着我的相机去旅行。\n\t\t\t说到旅行，最想去的地方是西藏，最理想的方式是自驾，最好的年纪是24岁，我想，那将是一次朝圣之旅，心和身体同时都在路上。\n\t\t")]),e._v(" "),a("div",{staticClass:"home_right_line"}),e._v(" "),a("div",{staticClass:"home_right_title"},[a("a",{staticClass:"ui-link",staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:"http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=wqauo6_uq7eCpK26r6Orruyhra8"}},[a("img",{attrs:{src:"http://rescdn.qqmail.com/zh_CN/htmledition/images/function/qm_open/ico_mailme_01.png"}})])]),e._v(" "),a("div",{staticClass:"home_right_title",staticStyle:{"flex-basis":"100%","justify-content":"flex-start"}},[a("a",{attrs:{href:"https://weibo.com/u/5632001274"}},[e._v("新浪微博@哆啦没有先生")])]),e._v(" "),a("div",{staticClass:"home_right_title",staticStyle:{"flex-basis":"100%","justify-content":"flex-start"}},[e._v("\n\t\t\t中小屏幕（分辨率）体验更佳。\n\t\t")])])])}]};var S=a("C7Lr")(w,k,!1,function(e){a("/x0q")},null,null).exports;n.a.use(m.a);var A=new m.a({routes:[{path:"/home",name:"home",component:c},{path:"/photography",name:"photography",component:d},{path:"/",name:"index",component:b},{path:"/world/:mapHeight",name:"world",component:x},{path:"/about",name:"about",component:S}]}),E=a("ARhN"),P=a.n(E);a("KrjX");n.a.prototype.$echarts=P.a,n.a.config.productionTip=!1,new n.a({el:"#app",router:A,components:{App:o},template:"<App/>"})},bKVO:function(e,t){},cPnF:function(e,t){},hvb3:function(e,t){},xehB:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.96a9ed33eb98795e9126.js.map