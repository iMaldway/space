<template>
	<div class="home_body" id="home_body">
		<div class="home_top">
			<div class="home_top_name" data-content="iMaldway"></div>
			<div class="home_top_shuoming">关山难越，谁悲失路之人？<br>萍水相逢，尽是他乡之客。</div>
		</div>
		<div class="home_bottom">
			<div class="home_botom_title_body">
				<router-link tag="div" class="home_bottom_itme" to="/photography">
					<div class="home_bottom_itme_title">
						摄影
					</div>
					<div class="home_bottom_itme_describe">
						抓下这世界稍瞬即逝的美好
					</div>
				</router-link>
				<router-link tag="div" class="home_bottom_itme" to="/chronicle">
					<div class="home_bottom_itme_title">纪年</div>
					<div class="home_bottom_itme_describe">从哪里来，又要去哪</div>
				</router-link>
				<router-link tag="div" class="home_bottom_itme" :to="'/world/'+mapHeight">
					<div class="home_bottom_itme_title">视界</div>
					<div class="home_bottom_itme_describe">诗与远方的目的地是大海与花</div>
				</router-link>
				<router-link tag="div" class="home_bottom_itme" to="/about">
					<div class="home_bottom_itme_title">关于</div>
					<div class="home_bottom_itme_describe">你想知道的更多的,更好的</div>
				</router-link>
			</div>
			<div class="friendship_links">
				<a href="http://www.ruanyifeng.com/blog/2015/07/flex-examples.html" class="assembly ui-link">阮一峰</a>
				<a href="http://www.runoob.com/css3/css3-transitions.html" class="assembly ui-link">菜鸟教程</a>
				<a href="https://www.awesomes.cn/rank?sort=trend" class="assembly ui-link">前端100</a>
				<a href="https://cn.vuejs.org/" class="assembly ui-link">VUE</a>
				<a href="http://www.cssmoban.com/" class="assembly ui-link">模版之家</a>
				<a href="https://vue-particles.netlify.com/" class="assembly ui-link">粒子效果</a>
				<a href="http://echarts.baidu.com/" class="assembly ui-link">Echarts</a>
				<a href="https://v.qq.com/">腾讯视频</a>
				<a href="https://tuchong.com">图虫</a>
				<a href="https://dribbble.com">灵感</a>
				<a href="https://music.163.com/">网易云音乐</a>
				<a href="https://996.icu" class="ui-link">
					<img src="https://img.shields.io/badge/link-996.icu-red.svg" alt="996.icu">
				</a>
				<router-link tag="a" class="assembly ui-link" to="/home">
					专业技能
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				mapHeight: 400,
			}
		},
		methods: {

		},
		mounted: function() {
			let home_egg = document.getElementById('home_egg');
			let home_egg_height = home_egg.clientHeight;
			this.mapHeight = home_egg_height;
		}
	}
</script>

<style scoped="scoped">
	.home_body {
		position: absolute;
		top: 0px;
		bottom: 0px;
		overflow-y: auto;
		width: 100%;
		height: 100%;
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

	.home_top {
		top: 0px;
		position: relative;
		width: 100%;
		height: 36%;
		min-height: 140px;
		padding: 10px;
		display: flex;
		text-align: center;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		align-content: center;
	}

	.home_bottom {
		width: 100%;
		height: 64%;
		padding-left: 0.625rem;
		padding-right: 0.625rem;
		display: flex;
		text-align: center;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		align-content: space-between;
	}

	.home_botom_title_body {
		width: 100%;
		display: flex;
		text-align: center;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		align-content: center;
	}

	.home_top div {
		display: flex;
		flex-basis: 100%;
	}

	.home_top_name {
		height: calc(100% - 40%);
		justify-content: center;
		align-items: center;
		font-size: 2.35rem;
	}

	.home_top_name[data-content]::after {
		content: attr(data-content);
		display: block;
		position: absolute;
		text-align: center;
		top: 30%;
		z-index: 2;
		background-image: -webkit-gradient(linear, left top, right top, from(#ffdb01), to(#fbfbfb));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-webkit-mask-image: -webkit-gradient(linear, 0 0, 0 bottom, from(#ffdb01), to(#fbfbfb)));
	}

	.home_top_name:hover {
		font-size: 2.5rem;
	}

	.home_top_muen {
		cursor: pointer;
		height: 50%;
		align-self: flex-start;
		font-size: 2em;
		color: #999999;
	}

	.home_top_shuoming {
		height: 20%;
		color: #f1efe0;
		font-size: 14px;
		justify-content: center;
		align-items: center;
	}

	.home_bottom_itme {
		cursor: pointer;
		display: flex;
		flex-wrap: wrap;
		padding: 0.3125rem;
		justify-content: center;
		align-items: center;
		flex-basis: 20%;
		width: 20%;
		height: 7.5rem;
		margin: 2%;
		color: #0f4c81;
		background-color: #f1efe0;
		border: 4px solid #f1efe0;
	}

	.home_bottom_itme:hover>.home_bottom_itme_title {
		font-size: 2.5rem;
	}

	.home_bottom_itme:hover {
		background-color: #0f4c81;
		color: #f1efe0;
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.13);
	}

	.home_bottom_itme:hover .home_bottom_itme_title {
		color: #f1efe0;
	}

	.home_bottom_itme:hover .home_bottom_itme_describe {
		color: #f1efe0;
	}

	.home_bottom_itme_title {
		color: #0f4c81;
		flex-basis: 100%;
		font-size: 1.5rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.home_bottom_itme_describe {
		color: #0f4c81;
		font-size: 0.875rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.home_egg_botom_button:hover {
		background-color: #A2B0B8;
	}

	.home_egg_botom_button:hover .home_egg_botom_button_square {
		border: 1px solid #FFFFFF;
		background-color: #FFFFFF;
	}

	.home_egg_botom_button_square {
		border-radius: 3px;
		height: 70%;
		width: 70%;
		border: 1px solid #e3e8ea;
	}

	.friendship_links {
		flex-basis: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		display: flex;
		padding: 0.3125rem;
		flex-wrap: wrap-reverse;
		justify-content: center;
		align-items: center;
	}

	.friendship_links a {
		font-size: 0.875rem;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		background-color: #f1efe0;
		color: #0f4c81;
		/* border-radius: 0.1875rem; */
		padding: 3px;
		margin: 3px;

	}

	.function_link {
		background: linear-gradient(to right bottom, rgba(25, 169, 253, 1), rgba(232, 5, 173, 1));
	}

	@media screen and (min-width:87.5625rem) {
		.home_bottom_itme {
			height: 8rem !important;
			width: 18% !important;
			flex-basis: 18% !important;
			box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1) !important;
		}
	}

	@media screen and (min-width: 55.25rem) and (max-width: 87.5rem) {
		.home_bottom_itme {
			height: 7.725rem !important;
			width: 20% !important;
			flex-basis: 20% !important;
			box-shadow: 0 6px 14px 0 rgba(0, 0, 0, 0.1), 0 4px 18px 0 rgba(0, 0, 0, 0.1) !important;
		}

		.home_bottom_itme:hover {
			box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0) !important;
		}
	}

	@media screen and (min-width: 35.5rem) and (max-width: 55.25rem) {
		.home_bottom_itme {
			height: 7.25rem !important;
			width: 20% !important;
			flex-basis: 20% !important;
			box-shadow: 0 6px 14px 0 rgba(0, 0, 0, 0.1), 0 4px 18px 0 rgba(0, 0, 0, 0.1) !important;
		}

		.home_bottom_itme:hover {
			box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0) !important;
		}
	}
	@media screen and (min-width: 20rem) and (max-width: 35.5rem) {
		.home_bottom_itme {
			margin: 1.5% !important;
			flex-basis: 31% !important;
			height: 7.35rem !important;
		}
	}
	@media (max-width: 20rem) {
		.home_bottom_itme {
			margin: 1.5% !important;
			flex-basis: 31% !important;
			/* width: 19% !important; */
			height: 6.5rem !important;
		}
	}
</style>
