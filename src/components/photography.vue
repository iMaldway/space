<template>
	<div class="home_body" id="home_photogrphy_body">
		<template v-for="(item, index)  in broadcast">
			<div class="background" :style="{transform: 'translateX(' + (100 * index - pointer * 100) + '%)'}">
				<img class="head-background" :src="getImgUrl(item.code,item.suffix)" />
				<div class="head_mask">
					<div style="font-size: 20px;flex-basis:100%;font-weight:bolder;">{{ item.title }}</div>
					<div>{{ item.slogan }}</div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				max: 0,
				pointer: 0,
				imgUrl:"https://tuchong.pstatp.com/15649298/f/",
				broadcast: [{
						title: "母与子",
						slogan: "潮水退去的海边，一对母子在散步。",
						code: "205111944",
						suffix:"jpg",
						homeColor: "#000000",
						titleColor: "#FFFFFF"
					},
					{
						title: "爱情邮局",
						slogan: "珠海的旅游景点之一。",
						code: "409846067",
						suffix:"jpg",
						homeColor: "#000000",
						titleColor: "#FFFFFF"
					}, {
						title: "橘子洲大桥",
						slogan: "湘江与橘子洲大桥。",
						code: "294043815",
						suffix:"jpg",
						homeColor: "#000000",
						titleColor: "#FFFFFF"
					},

					{
						title: "旧火车站",
						slogan: "早已废弃的火车站，现在供维修车头。",
						code: "516735582",
						suffix:"jpg",
						homeColor: "#FFFFFF",
						titleColor: "#FFFFFF"
					},
					{
						title: "前山河畔",
						slogan: "在太阳的余晖下，前山河畔倒映出建筑的影子。",
						code: "324649648",
						suffix:"jpg",
						homeColor: "#000000",
						titleColor: "#000000"
					},
					{
						title: "海岛一侧",
						slogan: "即使11月份，海岛还是郁郁葱葱。",
						code: "232571221",
						suffix:"jpg",
						homeColor: "#FFFFFF",
						titleColor: "#FFFFFF"
					},
					{
						title: "精致迷人",
						slogan: "雨露均沾平添色，楚楚动人茶花开。",
						code: "104383196",
						suffix:"jpg",
						homeColor: "#FFFFFF",
						titleColor: "#FFFFFF"
					},
					{
						title: "凤凰山水库",
						slogan: "湖光山色美不胜收。",
						code: "224576154",
						suffix:"jpg",
						homeColor: "#FFFFFF",
						titleColor: "#FFFFFF"
					},
					{
						title: "牵牛花",
						slogan: "牵牛花与天空合印。",
						code: "346735030",
						suffix:"jpg",
						homeColor: "#FFFFFF",
						titleColor: "#FFFFFF"
					},
				],
				indexObj: {},
				broadcastBackups: {}
			}
		},
		computed:{
			getImgUrl:function(){
				return function(code,suffix) {
				    return this.imgUrl+code+"."+suffix;
				}
			}
		},
		created: function() {
			this.max = this.broadcast.length;
			this.broadcastBackups = JSON.parse(JSON.stringify(this.broadcast));
			this.indexObj = this.broadcast[0];
			let $this = this;
			setInterval(function() {
				if ($this.pointer < ($this.max - 1)) {
					$this.pointer = $this.pointer + 1;
				} else {
					$this.pointer = 0;
				}
			}, 3000);
			// document.getElementById('fade').style.display = 'block';
		},

	}
</script>

<style scoped="scoped">
	img {
	    max-width: 100%;
	    height: auto;
	}
	.home_body {
		position: absolute;
		top: 0px;
		bottom: 0px;
		overflow: hidden;
		width: 100%;
		height: auto;
		display: flex;
		text-align: center;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: center;
		padding: 15px;
	}

	.background {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		align-content: center;
		/* overflow: hidden; */
		transition: all 0.3s ease;
		border-radius: 15px;
		z-index: 3;
	}

	.head-background {
		/* max-height: 100%;
		max-width: 100%;
		width: auto; */
		flex-basis: 100%;
	}

	.head-background-vague {
		/*filter:blur(15px);*/
		position: absolute;
		top: 0px;
		bottom: 0px;
		height: 100%;
		width: 100%;
		z-index: 1;
		background: linear-gradient(to left top, rgba(51, 51, 51, 0.8), rgba(255, 255, 255, 0.7));
	}

	.head_mask {
		width: 30%;
		height: 35%;
		background-color: rgba(255, 255, 255, 0.8);
		position: absolute;
		z-index: 5;
		right: 0px;
		display: flex;
		text-align: left;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 0.3125rem;
		justify-content: flex-start;
		align-items: center;
		align-content: center;

	}
	/*
	* 小于700
	* */
	@media only screen and (max-width: 700px) {
		.head_mask {
			width: 100% !important;
			bottom: 0px !important;
			background-color: rgba(255, 255, 255, 0) !important;
		}
	}
	/*
	* 大于700小于1200
	* */
	@media screen and (min-width: 700px) and (max-width: 1200px) {
		.head_mask {
			width: 30% !important;
			height: 30% !important;
			background-color: rgba(255, 255, 255, 0.8) !important;
		}
	}
</style>
