	
<template>
	<div class="home_body" id="home_body">
		<div class="home_top">
			<div class="home_top_muen">=</div>
			<div class="home_top_name">iMaldwyn</div>
			<div class="home_top_shuoming">您好！感谢与您的相遇！</div>
		</div>
		<div class="home_bottom">
			<router-link tag="div" class="home_bottom_itme" style="background-color: rgba(228,77,38,0.8);" to="/photography">
			  <div class="home_bottom_itme_title">
			  	摄影
			  	</div>
			  <div class="home_bottom_itme_describe">
			  	抓下这世界稍瞬即逝的美好
			  </div>
			</router-link>
			<router-link tag="div" class="home_bottom_itme" style="background-color: rgba(25,164,245,0.8);" to="/home">
				<div class="home_bottom_itme_title">专业</div>
				<div class="home_bottom_itme_describe">是时候展现真正的实力了</div>
			</router-link>
			<router-link tag="div" class="home_bottom_itme" style="background-color: rgba(245,222,25,0.8);" :to="'/world/'+mapHeight">
				<div class="home_bottom_itme_title">视界</div>
				<div class="home_bottom_itme_describe">诗与远方的目的地是大海与花</div>
			</router-link>
			<router-link tag="div" class="home_bottom_itme" style="background-color: rgba(25,228,38,0.8);" to="/about">
				<div class="home_bottom_itme_title">关于</div>
				<div class="home_bottom_itme_describe">你想知道的更多的,更好的</div>
			</router-link>
			<div class="friendship_links">
				<a href="http://www.ruanyifeng.com/blog/2015/07/flex-examples.html" class="assembly ui-link">阮一峰</a>
				<a href="http://www.runoob.com/css3/css3-transitions.html" class="assembly ui-link">菜鸟教程</a> 
				<a href="https://www.awesomes.cn/rank?sort=trend" class="assembly ui-link">前端100</a>
				<a href="https://cn.vuejs.org/" class="assembly ui-link">VUE</a> 
				<a href="http://www.cssmoban.com/" class="assembly ui-link">模版之家</a> 
				<a href="https://ant.design/index-cn" class="assembly ui-link">参阅了底部设计</a>
				<a href="http://echarts.baidu.com/" class="assembly ui-link">图表来自Echarts</a> 
				<a href="https://dribbble.com">灵感来自于此</a>
				<a href="https://996.icu" class="ui-link">
					<img src="https://img.shields.io/badge/link-996.icu-red.svg" alt="996.icu">
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'index',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App',
		  mapHeight:400,
	    }
	  },
	  mounted: function() {
		  let home_egg = document.getElementById('home_egg');
		  let home_egg_height = home_egg.clientHeight;
		  this.mapHeight = home_egg_height;
	  }
	}
</script>

<style scoped>
.home_body{
	position: absolute;
	top: 0px;
	bottom: 0px;
	overflow-y: auto;
	width: 100%;
	height: auto;
	display: flex;
	text-align: center;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: center;
	border-radius: 15px;
	/* overflow-y: hidden; */
}
.home_top{
	width: 100%;
	height: 40%;
	padding: 10px;
	display: flex;
	text-align: center;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: center;
}
.home_bottom{
	
	width: 100%;
	height: 60%;
	padding: 10px;
	display: flex;
	text-align: center;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: space-between;
}
.home_top div{
	display: flex;
	flex-basis: 100%;
}
.home_top_name{
	height: 30%;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	/* font-weight: bold; */
}
.home_top_muen{
	cursor:pointer;
	height: 50%;
	align-self: flex-start;
	font-size: 2em;
	color: #999999;
}
.home_top_shuoming{
	height: 20%;
	color: #333333;
	justify-content: center;
	align-items: center;
}
.home_bottom_itme{
	cursor:pointer;
	display: flex;
	flex-wrap: wrap;
	padding: 0.3125rem;
	justify-content: center;
	align-items: center;
	flex-basis: 20%;
	width: 20%;
	height: 120px;
	margin-left: 3%;
	/* border-radius: 0.1875rem; */
	/* border: 2px solid #a2b0b8; */
}
.home_bottom_itme:hover{
	/* border: 2px solid #FFFFFF; */
	background-color: #666666;
	color: #FFFFFF;
	box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.home_bottom_itme:hover .home_bottom_itme_title{
	color: #FFFFFF;
}
.home_bottom_itme:hover .home_bottom_itme_describe{
	color: #FFFFFF;
}
.home_bottom_itme_title{
	color: #FFFFFF;
	flex-basis: 100%;
	font-size: 1.5rem;
	white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
.home_bottom_itme_describe{
	color: #FFFFFF;
	font-size: 0.875rem;
	white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
.home_egg_botom_button:hover{
	background-color: #A2B0B8;
}
.home_egg_botom_button:hover .home_egg_botom_button_square{
	border: 1px solid #FFFFFF;
	background-color: #FFFFFF;
}
.home_egg_botom_button_square{
	border-radius: 3px;
	height: 70%;
	width: 70%;
	border: 1px solid #e3e8ea;
}
.friendship_links{
	flex-basis: 100%;
	white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
	display: flex;
	padding: 0.3125rem;
	flex-wrap: wrap-reverse;
	justify-content: center;
	align-items: center;
}
.friendship_links a{
	font-size: 0.875rem;
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	background-color: #666666;
	color: #FFFFFF;
	border-radius: 0.1875rem;
	padding: 3px;
	margin: 3px;
	
}
</style>
