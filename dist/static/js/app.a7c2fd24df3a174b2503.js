webpackJsonp([1],{"04pQ":function(e,t,a){"use strict";var n={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var e=this;a("9B60"),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},methods:{initParticleJS:function(e,t,a,n,i,l,s,o,m,r,v,u,c,d,h){particlesJS("particles-js",{particles:{number:{value:a,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:n,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:i,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:o,distance:r,color:l,opacity:m,width:s},move:{enable:!0,speed:v,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:u,mode:c},onclick:{enable:d,mode:h},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},i={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},staticRenderFns:[]},l=a("C7Lr")(n,i,!1,null,null,null);t.a=l.exports},"4U1W":function(e,t){},"9adG":function(e,t){},ADqP:function(e,t){},B4E4:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("xd7I"),i=this,l={name:"App",data:()=>({backApp:!1,particlesBoo:!0,audioExpress:"■"}),created:function(){},mounted:function(){var e=document.getElementById("home_audio");e.readyState&&(e.autoplay=!0)},watch:{$route(e,t){"/"!=e.path?this.backApp=!0:(this.backApp=!1,this.particlesBoo=!0);let a=e.path.split("/");a.length>1&&""!=a[1]&&("world"==a[1]?this.particlesBoo=!1:this.particlesBoo=!0)}},methods:{backOf:()=>{if("/"==window.location.pathname&&"#/"==window.location.hash)return i.backApp=!1,void(i.particlesBoo=!0);window.history.back(),i.backApp=!0},changePlay:()=>{var e=document.getElementById("home_audio"),t=document.getElementById("home_audio_div");e&&(e.paused?(e.play(),t.innerText="▲"):(e.pause(),t.innerText="■"))}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"home"},[a("div",{staticClass:"home_audio",on:{click:e.changePlay}},[e._m(0),e._v(" "),a("div",{staticClass:"home_audio_div",attrs:{id:"home_audio_div"}},[e._v(e._s(e.audioExpress))])]),e._v(" "),e.backApp?a("div",{staticClass:"home_top_muen",on:{click:function(t){return e.backOf()}}},[e._v("\n\t\t\t<\n\t\t")]):e._e(),e._v(" "),a("div",{staticClass:"home_tracing"},[a("div",{staticClass:"home_egg",attrs:{id:"home_egg"}},[a("vue-particles",{directives:[{name:"show",rawName:"v-show",value:e.particlesBoo,expression:"particlesBoo"}],staticClass:"home_egg_particles",attrs:{color:"#505668",particleOpacity:.7,particlesNumber:60,shapeType:"circle",particleSize:4,linesColor:"#dad7d7",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:200,moveSpeed:2,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}}),e._v(" "),a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)]),e._v(" "),a("div",{staticClass:"home_egg_botom"},[a("div",{staticClass:"home_egg_botom_button",on:{click:function(t){return e.backOf()}}},[a("div",{staticClass:"home_egg_botom_button_square"})])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("audio",{staticClass:"home_audio_audio",attrs:{id:"home_audio",autoplay:"",loop:""}},[t("source",{attrs:{src:"http://up_mp4.t57.cn/2015/1/05m/03/98032327569.m4a",type:"audio/mpeg"}}),this._v("\n\t\t\t\t您的浏览器不支持 audio 元素。\n\t\t\t")])}]};var o=a("C7Lr")(l,s,!1,function(e){a("B4E4")},null,null).exports,m=a("3XdE");let r=[{name:"Java",body:"多年开发经验。时常感叹于先驱们在这个领域深耕所带来的硕果。 也被当下流行框架的精妙设计所折服，不由得产生一种感叹，我只是代码的搬运者。这门语言相当成熟，成熟到让很多人以为框架就是其开发的基础，但我喜欢追寻答案，就像艺术的美不在于它本身，而在于它的意义。",level:6,year:3.4},{name:"JavaSript",body:"如果要说个第一映像，我毫不犹豫会给出‘自由’这个词去形容，爱上它也是因为它的自由。V8的星星之火以燎原之势席卷了整个前端，一时间所有的镁光灯都聚集到了这门语言上，由此衍生了大量惊艳的库类，彻底颠覆了传统前端开发，不仅如此，这把火还烧到了后端，以革命之势肆掠编程领域，我也是在这时与它结缘的，也算得上‘战友情’了，顺便提一下VUE是我的武器",level:4,year:2},{name:"HTML+CSS",body:"简直是最理想的GUI啊，不得不感叹它的强大，所谓所想所见，都让人有一种是艺术家的错觉，各种界面绘制简直不要太顺手。HTML5之后是移动互联网的开端，一时间开发者们纷纷站队，我这个后端开发的也经不起它的诱惑投入了它的怀抱。",level:4,year:3},{name:"APP",body:"全栈APP开发工程师，在以前的定义是要会IOS跟Android开发。 但现在不一样了，HTML5APP出现了，跨平台式开发，一份代码两种平台。 高效快捷，节省人力成本。开发框架更是多种多样，甚至都有官方的开发框架。 拖拉组件，编写交互代码即可制作出APP。 使用过它开发过几款APP，现已在各大应用商店上架。但，也正是开发过这几款APP，让我意识到了很多问题，中等大型、性能型、特定性APP还是无法离开原生编程。",level:3,year:2}];var v={name:"home",data:()=>({msg:"Welcome to Your Vue.js App",middle:1,content:{name:"Java",body:"",level:6,year:3.5},index:0,lastIndex:r.length}),created:function(){this.content=r[this.index]},methods:{next:function(){this.index>=r.length-1?this.index=0:this.index++,this.middle=this.index+1,this.content=r[this.index]},last:function(){this.index<=0?this.index=r.length-1:this.index--,this.middle=this.index+1,this.content=r[this.index]}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home_body",attrs:{id:"home_major_body"}},[a("div",{staticClass:"home_left"},[a("div",{staticClass:"home_left_title"},[e._v("\n\t\t\t"+e._s(e.content.name)+"\n\t\t")]),e._v(" "),a("div",{staticClass:"home_left_body"},[e._v("\n\t\t\t    \n\t\t\t"+e._s(e.content.body)+"\n\t\t")]),e._v(" "),a("div",{staticClass:"home_left_bottom"},[a("div",{staticClass:"last",on:{click:function(t){return e.last()}}},[a("div",{staticClass:"solid"},[e._v("\n\t\t\t\t\t<")])]),e._v(" "),a("div",{staticClass:"middle"},[e._v(e._s(e.middle)+"/"+e._s(e.lastIndex)+"\n\t\t\t\t")]),e._v(" "),a("div",{staticClass:"next",on:{click:function(t){return e.next()}}},[a("div",{staticClass:"solid"},[e._v(">")])])])]),e._v(" "),a("div",{staticClass:"hone_right"},[a("div",{staticClass:"home_right_top"},[a("div",{staticStyle:{"font-size":"1rem","flex-basis":"100%"}},[e._v("Use time")]),e._v("\n\t\t\t\t"+e._s(e.content.year)+"year\n\t\t\t")]),e._v(" "),a("div",{staticClass:"home_right_bottom"},[a("div",{staticStyle:{"font-size":"1rem","flex-basis":"100%"}},[e._v("Ability Level")]),e._v("\n\t\t\t\t"+e._s(e.content.level)+"\n\t\t\t\t"),a("div",{staticStyle:{"font-size":"1rem","flex-basis":"100%"}},[e._v("A full score of 10")])]),e._v(" "),a("div")])])},staticRenderFns:[]};var c=a("C7Lr")(v,u,!1,function(e){a("9adG")},"data-v-18b2e188",null).exports,d={name:"home",data:()=>({msg:"Welcome to Your Vue.js App",max:0,pointer:0,broadcast:[{title:"海天之间！",slogan:"所谓诗和远方，到头来是水手跟码头。",img:"static/haibian.jpeg",homeColor:"#000000",titleColor:"#FFFFFF"},{title:"在路上！",slogan:"旅行是一种态度和艺术。",img:"static/dengta.jpeg",homeColor:"#000000",titleColor:"#FFFFFF"},{title:"盛世之城",slogan:"再多的梦想也填不满城市。",img:"static/chengshi.jpeg",homeColor:"#000000",titleColor:"#FFFFFF"},{title:"来去之间",slogan:"别停下，别等待，继续向前!",img:"static/chezhan.png",homeColor:"#FFFFFF",titleColor:"#FFFFFF"},{title:"盛开的花",slogan:"繁花似锦觅安宁，闲云流水度此生。",img:"static/meihua.png",homeColor:"#000000",titleColor:"#000000"},{title:"向阳而生",slogan:"生如夏花，死如秋叶。",img:"static/xiaobaihua.jpeg",homeColor:"#FFFFFF",titleColor:"#FFFFFF"},{title:"精致迷人",slogan:"雨露均沾平添色，楚楚动人茶花开。",img:"static/chahua.png",homeColor:"#FFFFFF",titleColor:"#FFFFFF"}],indexObj:{},broadcastBackups:{}}),created:function(){this.max=this.broadcast.length,this.broadcastBackups=JSON.parse(JSON.stringify(this.broadcast)),this.indexObj=this.broadcast[0];let e=this;setInterval(function(){e.pointer<e.max-1?e.pointer=e.pointer+1:e.pointer=0},3e3)}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home_body",attrs:{id:"home_photogrphy_body"}},[e._l(e.broadcast,function(t,n){return[a("div",{staticClass:"background",style:{transform:"translateX("+(100*n-100*e.pointer)+"%)"}},[a("img",{staticClass:"head-background",attrs:{src:t.img}}),e._v(" "),a("div",{staticClass:"head_mask"},[a("div",{staticStyle:{"font-size":"20px","flex-basis":"100%","font-weight":"bolder"}},[e._v(e._s(t.title))]),e._v(" "),a("div",[e._v(e._s(t.slogan))])])])]})],2)},staticRenderFns:[]};var _=a("C7Lr")(d,h,!1,function(e){a("4U1W")},"data-v-7facaebe",null).exports,p={name:"index",data:()=>({msg:"Welcome to Your Vue.js App",mapHeight:400}),mounted:function(){let e=document.getElementById("home_egg").clientHeight;this.mapHeight=e}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home_body",attrs:{id:"home_body"}},[e._m(0),e._v(" "),a("div",{staticClass:"home_bottom"},[a("div",{staticClass:"home_botom_title_body"},[a("router-link",{staticClass:"home_bottom_itme",staticStyle:{background:"linear-gradient(to right bottom, rgba(253, 235, 25, 0.9), rgba(232, 5, 173, 0.9))"},attrs:{tag:"div",to:"/photography"}},[a("div",{staticClass:"home_bottom_itme_title"},[e._v("\n\t\t\t\t\t摄影\n\t\t\t\t")]),e._v(" "),a("div",{staticClass:"home_bottom_itme_describe"},[e._v("\n\t\t\t\t\t抓下这世界稍瞬即逝的美好\n\t\t\t\t")])]),e._v(" "),a("router-link",{staticClass:"home_bottom_itme",staticStyle:{background:"linear-gradient(to right bottom, rgba(171, 236, 255, 0.9), rgba(123, 3, 255, 0.9))"},attrs:{tag:"div",to:"/home"}},[a("div",{staticClass:"home_bottom_itme_title"},[e._v("专业")]),e._v(" "),a("div",{staticClass:"home_bottom_itme_describe"},[e._v("是时候展现真正的实力了")])]),e._v(" "),a("router-link",{staticClass:"home_bottom_itme",staticStyle:{background:"linear-gradient(to right bottom, rgba(251, 157, 196, 0.9), rgba(248, 216, 0, 0.9))"},attrs:{tag:"div",to:"/world/"+e.mapHeight}},[a("div",{staticClass:"home_bottom_itme_title"},[e._v("视界")]),e._v(" "),a("div",{staticClass:"home_bottom_itme_describe"},[e._v("诗与远方的目的地是大海与花")])]),e._v(" "),a("router-link",{staticClass:"home_bottom_itme",staticStyle:{background:"linear-gradient(to right bottom, rgba(129, 251, 184, 0.9), rgba(40, 199, 177, 0.9))"},attrs:{tag:"div",to:"/about"}},[a("div",{staticClass:"home_bottom_itme_title"},[e._v("关于")]),e._v(" "),a("div",{staticClass:"home_bottom_itme_describe"},[e._v("你想知道的更多的,更好的")])])],1),e._v(" "),e._m(1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home_top"},[t("div",{staticClass:"home_top_name"},[this._v("iMaldway")]),this._v(" "),t("div",{staticClass:"home_top_shuoming"},[this._v("关山难越，谁悲失路之人？"),t("br"),this._v("萍水相逢，尽是他乡之客。")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"friendship_links"},[a("a",{staticClass:"assembly ui-link",attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-examples.html"}},[e._v("阮一峰")]),e._v(" "),a("a",{staticClass:"assembly ui-link",attrs:{href:"http://www.runoob.com/css3/css3-transitions.html"}},[e._v("菜鸟教程")]),e._v(" "),a("a",{staticClass:"assembly ui-link",attrs:{href:"https://www.awesomes.cn/rank?sort=trend"}},[e._v("前端100")]),e._v(" "),a("a",{staticClass:"assembly ui-link",attrs:{href:"https://cn.vuejs.org/"}},[e._v("VUE")]),e._v(" "),a("a",{staticClass:"assembly ui-link",attrs:{href:"http://www.cssmoban.com/"}},[e._v("模版之家")]),e._v(" "),a("a",{staticClass:"assembly ui-link",attrs:{href:"https://vue-particles.netlify.com/"}},[e._v("粒子效果")]),e._v(" "),a("a",{staticClass:"assembly ui-link",attrs:{href:"http://echarts.baidu.com/"}},[e._v("图表来自Echarts")]),e._v(" "),a("a",{attrs:{href:"https://dribbble.com"}},[e._v("灵感来自于此")]),e._v(" "),a("a",{staticClass:"ui-link",attrs:{href:"https://996.icu"}},[a("img",{attrs:{src:"https://img.shields.io/badge/link-996.icu-red.svg",alt:"996.icu"}})])])}]};var b=a("C7Lr")(p,f,!1,function(e){a("Pu+0")},"data-v-1781d76f",null).exports;a("3qyi");a("J42z");let g=[{name:"海门",value:30},{name:"鄂尔多斯",value:30},{name:"招远",value:30},{name:"舟山",value:30},{name:"齐齐哈尔",value:30},{name:"盐城",value:30},{name:"赤峰",value:30},{name:"青岛",value:30},{name:"乳山",value:30},{name:"金昌",value:30},{name:"泉州",value:30},{name:"莱西",value:30},{name:"日照",value:30},{name:"胶南",value:30},{name:"南通",value:30},{name:"拉萨",value:30},{name:"云浮",value:30},{name:"梅州",value:30},{name:"文登",value:30},{name:"上海",value:30},{name:"攀枝花",value:30},{name:"威海",value:30},{name:"承德",value:30},{name:"厦门",value:30},{name:"汕尾",value:30},{name:"潮州",value:30},{name:"丹东",value:30},{name:"太仓",value:30},{name:"曲靖",value:30},{name:"烟台",value:30},{name:"福州",value:30},{name:"瓦房店",value:30},{name:"即墨",value:30},{name:"抚顺",value:30},{name:"玉溪",value:30},{name:"张家口",value:30},{name:"阳泉",value:30},{name:"莱州",value:30},{name:"湖州",value:30},{name:"汕头",value:30},{name:"昆山",value:30},{name:"宁波",value:30},{name:"湛江",value:30},{name:"揭阳",value:30},{name:"荣成",value:30},{name:"连云港",value:30},{name:"葫芦岛",value:30},{name:"常熟",value:30},{name:"东莞",value:30},{name:"河源",value:30},{name:"淮安",value:30},{name:"泰州",value:30},{name:"南宁",value:30},{name:"营口",value:30},{name:"惠州",value:30},{name:"江阴",value:30},{name:"蓬莱",value:30},{name:"韶关",value:30},{name:"嘉峪关",value:30},{name:"广州",value:138},{name:"延安",value:30},{name:"太原",value:30},{name:"清远",value:30},{name:"中山",value:109},{name:"昆明",value:30},{name:"寿光",value:30},{name:"盘锦",value:30},{name:"长治",value:30},{name:"深圳",value:141},{name:"珠海",value:242},{name:"宿迁",value:30},{name:"咸阳",value:30},{name:"铜川",value:30},{name:"平度",value:30},{name:"佛山",value:30},{name:"海口",value:30},{name:"江门",value:30},{name:"章丘",value:30},{name:"肇庆",value:30},{name:"大连",value:30},{name:"临汾",value:30},{name:"吴江",value:30},{name:"石嘴山",value:30},{name:"沈阳",value:30},{name:"苏州",value:30},{name:"茂名",value:30},{name:"嘉兴",value:30},{name:"长春",value:30},{name:"胶州",value:30},{name:"银川",value:30},{name:"张家港",value:30},{name:"三门峡",value:30},{name:"锦州",value:30},{name:"南昌",value:30},{name:"柳州",value:30},{name:"三亚",value:30},{name:"自贡",value:30},{name:"吉林",value:30},{name:"阳江",value:30},{name:"泸州",value:30},{name:"西宁",value:30},{name:"宜宾",value:30},{name:"呼和浩特",value:30},{name:"成都",value:158},{name:"大同",value:30},{name:"镇江",value:30},{name:"桂林",value:30},{name:"张家界",value:30},{name:"宜兴",value:30},{name:"北海",value:30},{name:"西安",value:30},{name:"金坛",value:30},{name:"东营",value:30},{name:"牡丹江",value:30},{name:"遵义",value:30},{name:"绍兴",value:30},{name:"扬州",value:30},{name:"常州",value:30},{name:"潍坊",value:30},{name:"重庆",value:30},{name:"台州",value:30},{name:"南京",value:30},{name:"滨州",value:30},{name:"贵阳",value:30},{name:"无锡",value:30},{name:"本溪",value:30},{name:"克拉玛依",value:30},{name:"渭南",value:30},{name:"马鞍山",value:30},{name:"宝鸡",value:30},{name:"焦作",value:30},{name:"句容",value:30},{name:"北京",value:30},{name:"徐州",value:30},{name:"衡水",value:30},{name:"包头",value:30},{name:"绵阳",value:30},{name:"乌鲁木齐",value:30},{name:"枣庄",value:30},{name:"杭州",value:30},{name:"淄博",value:30},{name:"鞍山",value:30},{name:"溧阳",value:30},{name:"库尔勒",value:30},{name:"安阳",value:30},{name:"开封",value:30},{name:"济南",value:30},{name:"德阳",value:30},{name:"温州",value:30},{name:"九江",value:30},{name:"邯郸",value:30},{name:"临安",value:30},{name:"兰州",value:30},{name:"沧州",value:30},{name:"临沂",value:30},{name:"南充",value:30},{name:"天津",value:30},{name:"富阳",value:30},{name:"泰安",value:30},{name:"诸暨",value:30},{name:"郑州",value:30},{name:"哈尔滨",value:30},{name:"聊城",value:30},{name:"芜湖",value:30},{name:"唐山",value:30},{name:"平顶山",value:30},{name:"邢台",value:30},{name:"德州",value:30},{name:"济宁",value:30},{name:"荆州",value:30},{name:"宜昌",value:30},{name:"义乌",value:30},{name:"丽水",value:30},{name:"洛阳",value:30},{name:"秦皇岛",value:30},{name:"株洲",value:100},{name:"石家庄",value:30},{name:"莱芜",value:30},{name:"常德",value:30},{name:"保定",value:30},{name:"湘潭",value:154},{name:"金华",value:30},{name:"岳阳",value:30},{name:"长沙",value:200},{name:"衢州",value:30},{name:"廊坊",value:30},{name:"菏泽",value:30},{name:"合肥",value:30},{name:"武汉",value:173},{name:"大庆",value:30}],y={"海门":[121.15,31.89],"鄂尔多斯":[109.781327,39.608266],"招远":[120.38,37.35],"舟山":[122.207216,29.985295],"齐齐哈尔":[123.97,47.33],"盐城":[120.13,33.38],"赤峰":[118.87,42.28],"青岛":[120.33,36.07],"乳山":[121.52,36.89],"金昌":[102.188043,38.520089],"泉州":[118.58,24.93],"莱西":[120.53,36.86],"日照":[119.46,35.42],"胶南":[119.97,35.88],"南通":[121.05,32.08],"拉萨":[91.11,29.97],"云浮":[112.02,22.93],"梅州":[116.1,24.55],"文登":[122.05,37.2],"上海":[121.48,31.22],"攀枝花":[101.718637,26.582347],"威海":[122.1,37.5],"承德":[117.93,40.97],"厦门":[118.1,24.46],"汕尾":[115.375279,22.786211],"潮州":[116.63,23.68],"丹东":[124.37,40.13],"太仓":[121.1,31.45],"曲靖":[103.79,25.51],"烟台":[121.39,37.52],"福州":[119.3,26.08],"瓦房店":[121.979603,39.627114],"即墨":[120.45,36.38],"抚顺":[123.97,41.97],"玉溪":[102.52,24.35],"张家口":[114.87,40.82],"阳泉":[113.57,37.85],"莱州":[119.942327,37.177017],"湖州":[120.1,30.86],"汕头":[116.69,23.39],"昆山":[120.95,31.39],"宁波":[121.56,29.86],"湛江":[110.359377,21.270708],"揭阳":[116.35,23.55],"荣成":[122.41,37.16],"连云港":[119.16,34.59],"葫芦岛":[120.836932,40.711052],"常熟":[120.74,31.64],"东莞":[113.75,23.04],"河源":[114.68,23.73],"淮安":[119.15,33.5],"泰州":[119.9,32.49],"南宁":[108.33,22.84],"营口":[122.18,40.65],"惠州":[114.4,23.09],"江阴":[120.26,31.91],"蓬莱":[120.75,37.8],"韶关":[113.62,24.84],"嘉峪关":[98.289152,39.77313],"广州":[113.23,23.16],"延安":[109.47,36.6],"太原":[112.53,37.87],"清远":[113.01,23.7],"中山":[113.38,22.52],"昆明":[102.73,25.04],"寿光":[118.73,36.86],"盘锦":[122.070714,41.119997],"长治":[113.08,36.18],"深圳":[114.07,22.62],"珠海":[113.52,22.3],"宿迁":[118.3,33.96],"咸阳":[108.72,34.36],"铜川":[109.11,35.09],"平度":[119.97,36.77],"佛山":[113.11,23.05],"海口":[110.35,20.02],"江门":[113.06,22.61],"章丘":[117.53,36.72],"肇庆":[112.44,23.05],"大连":[121.62,38.92],"临汾":[111.5,36.08],"吴江":[120.63,31.16],"石嘴山":[106.39,39.04],"沈阳":[123.38,41.8],"苏州":[120.62,31.32],"茂名":[110.88,21.68],"嘉兴":[120.76,30.77],"长春":[125.35,43.88],"胶州":[120.03336,36.264622],"银川":[106.27,38.47],"张家港":[120.555821,31.875428],"三门峡":[111.19,34.76],"锦州":[121.15,41.13],"南昌":[115.89,28.68],"柳州":[109.4,24.33],"三亚":[109.511909,18.252847],"自贡":[104.778442,29.33903],"吉林":[126.57,43.87],"阳江":[111.95,21.85],"泸州":[105.39,28.91],"西宁":[101.74,36.56],"宜宾":[104.56,29.77],"呼和浩特":[111.65,40.82],"成都":[104.06,30.67],"大同":[113.3,40.12],"镇江":[119.44,32.2],"桂林":[110.28,25.29],"张家界":[110.479191,29.117096],"宜兴":[119.82,31.36],"北海":[109.12,21.49],"西安":[108.95,34.27],"金坛":[119.56,31.74],"东营":[118.49,37.46],"牡丹江":[129.58,44.6],"遵义":[106.9,27.7],"绍兴":[120.58,30.01],"扬州":[119.42,32.39],"常州":[119.95,31.79],"潍坊":[119.1,36.62],"重庆":[106.54,29.59],"台州":[121.420757,28.656386],"南京":[118.78,32.04],"滨州":[118.03,37.36],"贵阳":[106.71,26.57],"无锡":[120.29,31.59],"本溪":[123.73,41.3],"克拉玛依":[84.77,45.59],"渭南":[109.5,34.52],"马鞍山":[118.48,31.56],"宝鸡":[107.15,34.38],"焦作":[113.21,35.24],"句容":[119.16,31.95],"北京":[116.46,39.92],"徐州":[117.2,34.26],"衡水":[115.72,37.72],"包头":[110,40.58],"绵阳":[104.73,31.48],"乌鲁木齐":[87.68,43.77],"枣庄":[117.57,34.86],"杭州":[120.19,30.26],"淄博":[118.05,36.78],"鞍山":[122.85,41.12],"溧阳":[119.48,31.43],"库尔勒":[86.06,41.68],"安阳":[114.35,36.1],"开封":[114.35,34.79],"济南":[117,36.65],"德阳":[104.37,31.13],"温州":[120.65,28.01],"九江":[115.97,29.71],"邯郸":[114.47,36.6],"临安":[119.72,30.23],"兰州":[103.73,36.03],"沧州":[116.83,38.33],"临沂":[118.35,35.05],"南充":[106.110698,30.837793],"天津":[117.2,39.13],"富阳":[119.95,30.07],"泰安":[117.13,36.18],"诸暨":[120.23,29.71],"郑州":[113.65,34.76],"哈尔滨":[126.63,45.75],"聊城":[115.97,36.45],"芜湖":[118.38,31.33],"唐山":[118.02,39.63],"平顶山":[113.29,33.75],"邢台":[114.48,37.05],"德州":[116.29,37.45],"济宁":[116.59,35.38],"荆州":[112.239741,30.335165],"宜昌":[111.3,30.7],"义乌":[120.06,29.32],"丽水":[119.92,28.45],"洛阳":[112.44,34.7],"秦皇岛":[119.57,39.95],"株洲":[113.16,27.83],"石家庄":[114.48,38.03],"莱芜":[117.67,36.19],"常德":[111.69,29.05],"保定":[115.48,38.85],"湘潭":[112.91,27.87],"金华":[119.64,29.12],"岳阳":[113.09,29.37],"长沙":[113,28.21],"衢州":[118.88,28.97],"廊坊":[116.7,39.53],"菏泽":[115.480656,35.23375],"合肥":[117.27,31.86],"武汉":[114.31,30.52],"大庆":[125.03,46.58]};var C={name:"world",components:{},data:()=>({msg:"",zoom:13,mapHeight:400,mapwidth:400,arrive:9}),created:function(){this.mapHeight=this.$route.params.mapHeight-20,this.mapwidth=this.$route.params.mapHeight-20},mounted:function(){document.getElementById("main");var e=this.$echarts.init(document.getElementById("main"));let t=this;var a=function(e){var a=[];let n=0;for(var i=0;i<e.length;i++){var l=y[e[i].name];l&&(e[i].value>30&&n++,a.push({name:e[i].name,value:l.concat(e[i].value)}))}return n>t.arrive&&(t.arrive=n),a},n={title:{text:"旅行途径",subtext:"人生好比攀峰，路是越走越长",left:"center"},backgroundColor:"#fff",tooltip:{show:!1,trigger:"item"},geo:{map:"china",zoom:1,right:"0%",left:"0%",label:{normal:{show:!0,color:"#fff"},emphasis:{show:!1}},roam:!1,itemStyle:{normal:{borderWidth:1,areaColor:"rgba(128, 128, 128, 0)",borderColor:"#ffffff"},emphasis:{areaColor:"#3EF3F4"}}},series:[{name:"",type:"scatter",coordinateSystem:"geo",data:a(g),symbolSize:function(e){return e[2]/10},label:{normal:{formatter:"{b}",position:"right",show:!1},emphasis:{show:!1}},itemStyle:{normal:{color:"#5a5a5a"}}},{name:"来过",type:"effectScatter",coordinateSystem:"geo",data:a(g.sort(function(e,t){return t.value-e.value}).slice(0,t.arrive)),symbolSize:function(e){return e[2]/10},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"#b51808",shadowBlur:10,shadowColor:"#333"}},zlevel:1}]};e.setOption(n),e.resize()}},k={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{style:{width:this.mapwidth+"px",height:this.mapHeight+"px"},attrs:{id:"main"}})},staticRenderFns:[]};var F=a("C7Lr")(C,k,!1,function(e){a("ADqP")},"data-v-3a34cb1c",null).exports,x={name:"about",data:()=>({msg:"Welcome to Your Vue.js App"}),created:function(){},methods:{}},w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home_body",attrs:{id:"home_about_body"}},[a("div",{staticClass:"home_left"},[a("div",{staticClass:"home_left_title"},[e._v("\n\t\t\tMr. MALDWAY\n\t\t")]),e._v(" "),a("div",{staticClass:"home_left_title"},[e._v("\n\t\t\tGENDER MALE\n\t\t")]),e._v(" "),a("div",{staticClass:"home_left_title"},[e._v("\n\t\t\t23 YEARS OLD\n\t\t")]),e._v(" "),a("div",{staticClass:"home_left_title"},[e._v("\n\t\t\tSINGLE\n\t\t")]),e._v(" "),a("div",{staticClass:"home_left_title"},[e._v("\n\t\t\t中国湖南\n\t\t")])]),e._v(" "),a("div",{staticClass:"hone_right"},[e._v("\n\t\t  \n\t\t"),a("div",{staticClass:"hone_right_title_important"},[e._v("\n\t\t\t档案资料\n\t\t")]),e._v(" "),a("div",{staticClass:"home_right_title"},[e._v("\n\t\t\t    \n\t\t\t喜欢的太多，厌恶的很少，这世间有趣的人不多，你要不要来分辨一下？\n\t\t")]),e._v(" "),a("div",{staticClass:"home_right_line"}),e._v(" "),a("div",{staticClass:"home_right_title"},[e._v("\n\t\t\t    \n\t\t\t如果生命只剩最后一天，你有什么想要去做的？去把想说的话说出来？去问想知道的答案？去弥补犯过的错？去爱一个也爱你的人？"),a("br"),e._v("\n\t\t\t    \n\t\t\t当你真的这么想的时候，就发现在生命里还留下着很多遗憾。"),a("br"),e._v("\n\t\t\t    \n\t\t\t幸运的是，还没到这么一天，你需要做的是过好每一天，好好爱自己好好爱别人。"),a("br"),e._v("\n\t\t\t    \n\t\t\t而我，想成为一个温暖的人，可以给别人带来光和热，也想和一群温暖的人在一起，去感受他们的光和热。"),a("br"),e._v("\n\t\t\t    \n\t\t\t心中有个结，想着有一天能去西藏化个缘，了一了过去的每个日子，去祈祷每一个未来的日子，不求顺风顺水，但求随缘自在。\n\t\t")]),e._v(" "),a("div",{staticClass:"home_right_line"}),e._v(" "),a("div",{staticClass:"home_right_title"},[a("a",{staticClass:"ui-link",staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",href:"http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=wqauo6_uq7eCpK26r6Orruyhra8"}},[a("img",{attrs:{src:"http://rescdn.qqmail.com/zh_CN/htmledition/images/function/qm_open/ico_mailme_01.png"}})])]),e._v(" "),a("div",{staticClass:"home_right_title",staticStyle:{"flex-basis":"100%","justify-content":"flex-start"}},[a("a",{attrs:{href:"https://weibo.com/u/5632001274"}},[e._v("新浪微博@哆啦没有先生")])]),e._v(" "),a("div",{staticClass:"home_right_title",staticStyle:{"flex-basis":"100%","justify-content":"flex-start",color:"#fb325c"}},[e._v("\n\t\t\t除图片外所有素材均来自网络，若侵犯了您的合法权益，请联系我，将在24小时内处理。\n\t\t")])])])}]};var S=a("C7Lr")(x,w,!1,function(e){a("pPuw")},"data-v-b59d1cda",null).exports;n.a.use(m.a);var E=new m.a({routes:[{path:"/home",name:"home",component:c},{path:"/photography",name:"photography",component:_},{path:"/",name:"index",component:b},{path:"/world/:mapHeight",name:"world",component:F},{path:"/about",name:"about",component:S}]}),A=a("ARhN"),P=a.n(A),O=(a("KrjX"),a("qukJ"));n.a.prototype.$echarts=P.a,n.a.use(O.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:E,components:{App:o},template:"<App/>"})},"Pu+0":function(e,t){},pPuw:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a7c2fd24df3a174b2503.js.map