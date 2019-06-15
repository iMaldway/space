<template>
	<div class="home_body" id="home_about_body">
		<div class="home_left">
			<div class="home_left_title">
				Mr. MALDWN
			</div>
			<div class="home_left_title">
				GENDER MALE
			</div>
			<div class="home_left_title">
				23 YEARS OLD
			</div>
			<div class="home_left_title">
				SINGLE
			</div>
			<div class="home_left_title">
				中国湖南
			</div>
		</div>
		<div class="hone_right">
			&nbsp;&nbsp;
			<div class="hone_right_title_important">
				私密资料
			</div>
			<div class="home_right_title">
				香蕉、西瓜、葡萄、榴莲、荔枝、龙眼、哈密瓜、芒果、黄桃、橙子
				下厨、湘菜、川菜、米粉、
				跑步、登山、游泳、钓鱼、
				夜空、感受、
				LOL、DNF、狼人杀、
				摄影
			</div>
			<div class="home_right_line"></div>
			<div class="home_right_title">
				&nbsp;&nbsp;
				我喜欢摄影，也喜欢下厨，但我现在却是一名软件工程师。最喜欢的事物总是想着怎么样去得到，但却始终为生活所拘束。 我喜欢原野，一望无际，辽阔，安静，自由，想着有一天带着我的相机去旅行。
				说到旅行，最想去的地方是西藏，最理想的方式是自驾，最好的年纪是24岁，我想，那将是一次朝圣之旅，心和身体同时都在路上。
			</div>
			<div class="home_right_line"></div>
			<div class="home_right_title">
				<a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=wqauo6_uq7eCpK26r6Orruyhra8"
				 style="text-decoration: none;" class="ui-link">
					<img src="http://rescdn.qqmail.com/zh_CN/htmledition/images/function/qm_open/ico_mailme_01.png"></a>
			</div>
			<div class="home_right_title" style="flex-basis: 100%;justify-content: flex-start;">
				<a href="https://weibo.com/u/5632001274">新浪微博@哆啦没有先生</a>
			</div>
			<div class="home_right_title" style="flex-basis: 100%;justify-content: flex-start;">
				中小屏幕（分辨率）体验更佳。
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'about',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',

			}
		},
		created: function() {

		},
		methods: {

		}
	}
</script>

<style>
	.home_body {
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
		padding: 15px;
	}

	.home_left {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-content: flex-start;
		flex-basis: 50%;
		width: 50%;
		height: 100%;
		padding-left: 5%;
		padding-top: 15%;

	}

	.hone_right {
		display: flex;
		text-align: center;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
		flex-basis: 50%;
		width: 50%;
		height: 100%;
		padding-left: 0.9375rem;
	}

	.hone_right div {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: center;
	}

	.home_left div {
		flex-basis: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: center;
	}
	@media (min-width: 1280px) {
		.home_right_title {
			font-size: 18px !important;
		}
	}
	@media (max-width: 840px) {
		.home_left {
			flex-basis: 100% !important;
			width: 100% !important;
			height: 35% !important;
			padding-top: 0px !important;
			align-content: center !important;
		}

		.hone_right {
			flex-basis: 100% !important;
			width: 100% !important;
			height: 65% !important;
		}

		.home_left_title {

			transform: scale(1, 1.25) !important;
			line-height: 18px !important;
			font-size: 1.125rem !important;

		}
	}

	.home_left_title {
		transform: scale(1, 1.25);
		line-height: 38px;
		text-align: left;
		font-weight: bold;
		font-size: 2rem;
		color: #000000;
		justify-content: flex-start !important;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.hone_right_title_important {
		background-color: #fb325c;
		color: #FFFFFF;
		font-size: 12px;
		padding: 2px;
	}

	.home_right_title {
		font-size: 14px;
		color: #666666;
	}

	.home_right_line {
		width: 100%;
		margin-top: 5%;
		margin-bottom: 5%;
		border-bottom: 2px solid #333333;
	}
</style>
