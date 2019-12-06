<template>
	<div class="home_body" id="home_about_body">
		<div class="home_left" >
			<div class="home_left_title" :style="{'color':getTheme.color}">
				Mr. MALDWAY
			</div>
			<div class="home_left_title" :style="{'color':getTheme.color}">
				GENDER MALE
			</div>
			<div class="home_left_title" :style="{'color':getTheme.color}">
				{{lyearsOld}} YEARS OLD
			</div>
			<div class="home_left_title" :style="{'color':getTheme.color}">
				SINGLE
			</div>
			<div class="home_left_title" :style="{'color':getTheme.color}">
				中国湖南
			</div>
		</div>
		<div class="hone_right">
			&nbsp;&nbsp;
			<div class="hone_right_title_important">
				档案资料
			</div>
			<div class="home_right_title" :style="{'color':getTheme.other.aboutArticle}">
				&nbsp;&nbsp;&nbsp;&nbsp;
				喜欢的太多，厌恶的不少，这世间有趣的人难得，你要不要来分辨一下？
			</div>
			<div class="home_right_line" :style="{'border-color':getTheme.color}"></div>
			<div class="home_right_title" :style="{'color':getTheme.other.aboutArticle}">
				&nbsp;&nbsp;&nbsp;&nbsp;
				如果生命只剩最后一天，你有什么想要去做的？去把想说的话说出来？去问想知道的答案？去弥补犯过的错？去爱一个也爱你的人？<br>
				&nbsp;&nbsp;&nbsp;&nbsp;
				当你真的这么想的时候，就发现在生命里还留下着很多遗憾。<br>
				&nbsp;&nbsp;&nbsp;&nbsp;
				幸运的是，还没到这么一天，你需要做的是过好每一天，好好爱自己好好爱别人。<br>
				&nbsp;&nbsp;&nbsp;&nbsp;
				而我，想成为一个温暖的人，可以给别人带来光和热，也想和一群温暖的人在一起，去感受他们的光和热。<br>
				&nbsp;&nbsp;&nbsp;&nbsp;
				心中有个结，想着有一天能去西藏化个缘，了一了过去的每个日子，去祈祷每一个未来的日子，不求顺风顺水，但求随缘自在。
			</div>
			<div class="home_right_line" :style="{'border-color':getTheme.color}"></div>
			<div class="home_right_title">
				<a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=wqauo6_uq7eCpK26r6Orruyhra8"
				 style="text-decoration: none;" class="ui-link">
					<img src="http://rescdn.qqmail.com/zh_CN/htmledition/images/function/qm_open/ico_mailme_01.png"></a>
			</div>
			<div class="home_right_title" style="flex-basis: 100%;justify-content: flex-start;" >
				<a href="https://weibo.com/u/5632001274" :style="{'color':getTheme.other.hyperlink}">新浪微博@哆啦没有先生</a>
			</div>
			<div class="home_right_title" style="flex-basis: 100%;justify-content: flex-start;color: #fb325c;">
				除图片外所有素材均来自网络，若侵犯了您的合法权益，请联系我，将在24小时内处理。
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'about',
		data() {
			return {
				birthday:1996 
			}
		},
		created: function() {
			
		},
		computed:{
			lyearsOld:function(){
				let d = new Date();
				let year = d.getFullYear();
				return year-this.birthday;
			},
			getTheme:function(){
				return this.$getTheme();
			}
		},
		methods: {

		}
	}
</script>

<style scoped="scoped">
	.home_body {
		position: absolute;
		top: 0px;
		overflow:auto;
		width: 100%;
		height: 100%;
		display: flex;
		text-align: center;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		align-content: start;
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
		margin-top: 3.125rem;

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
		/* padding-left: 0.9375rem; */
	}

	.hone_right div {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: center;
		text-align: left;
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
	@media all and (max-height:26.25rem) {
		.hone_right{
			margin-top: 20%;
			margin-bottom: 20%;
		}
		
	}
	@media screen and (min-width: 52.5rem){
		.home_left{
			margin-top: 0rem;
		}
		
	}
	@media screen and (min-width: 35.5rem) and (max-width: 52.5rem) {
		.home_left {
			flex-basis: 100% !important;
			width: 100% !important;
			height: auto !important;
			padding-top: 0px !important;
			align-content: center !important;
			margin-top: 0.5rem;
		}
		
		.hone_right {
			flex-basis: 100% !important;
			width: 100% !important;
			height: auto !important;
		}
		
		.home_left_title {
		
			transform: scale(1, 1.125) !important;
			line-height: 24px !important;
			font-size: 1.75rem !important;
		
		}
	}
	@media screen and  (max-width: 35.5rem) {
		.home_left {
			flex-basis: 100% !important;
			width: 100% !important;
			height: auto !important;
			padding-top: 0px !important;
			
			align-content: center !important;
			
		}
		
		.hone_right {
			flex-basis: 100% !important;
			width: 100% !important;
			height: auto;
			margin-top: 5%;
			margin-bottom: 5%;
			
		}
		
		.home_left_title {
		
			transform: scale(1, 1.125) !important;
			line-height: 30px !important;
			font-size: 2rem !important;
		
		}
	}
	@media screen and  (max-width: 21.25rem) {
		.home_left {
			flex-basis: 100% !important;
			width: 100% !important;
			height: auto !important;
			padding-top: 0px !important;
			align-content: center !important;
		}
		
		.hone_right {
			flex-basis: 100% !important;
			width: 100% !important;
			height: 100% !important;
			bottom: 0px;
		}
		
		.home_left_title {
		
			transform: scale(1, 1.125) !important;
			line-height: 28px !important;
			font-size: 1.7rem !important;
		
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
