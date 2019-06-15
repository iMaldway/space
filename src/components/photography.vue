<template>
	<div class="home_body" id="home_photogrphy_body">
		<template v-for="(item, index)  in broadcast">
			<div class="background" :style="{transform: 'translateX(' + (100 * index - pointer * 100) + '%)'}">
				<img class="head-background" :src="item.img" />
				<div class="head_mask">
					<div style="font-size: 20px;flex-basis: 100%;">{{ item.title }}</div>
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
				broadcast: [{
						title: "Far sail！",
						slogan: "The brave have no fear！",
						img: "static/haibian.jpeg",
						homeColor: "#000000",
						titleColor: "#FFFFFF"
					},
					{
						title: "On the way！",
						slogan: "Travel is an attitude and an art。",
						img: "static/dengta.jpeg",
						homeColor: "#000000",
						titleColor: "#FFFFFF"
					}, {
						title: "Great City",
						slogan: "We are running on and on。",
						img: "static/chengshi.jpeg",
						homeColor: "#000000",
						titleColor: "#FFFFFF"
					},

					{
						title: "Between Coming and Going！",
						slogan: "Don't stop, don't wait, go ahead! Forward!",
						img: "static/chezhan.png",
						homeColor: "#FFFFFF",
						titleColor: "#FFFFFF"
					},
					{
						title: "Full-blown flowers",
						slogan: "Flowers blooming like a piece of brocade。",
						img: "static/meihua.png",
						homeColor: "#000000",
						titleColor: "#000000"
					},
					{
						title: "Born in the sun",
						slogan: "Life is like summer flowers, death is like autumn leaves。",
						img: "static/xiaobaihua.jpeg",
						homeColor: "#FFFFFF",
						titleColor: "#FFFFFF"
					},
					{
						title: "Delicate and charming",
						slogan: "Rain and dew stain level add color, Chu and Chu touching camellia blossom。",
						img: "static/chahua.png",
						homeColor: "#FFFFFF",
						titleColor: "#FFFFFF"
					}
				],
				indexObj: {},
				broadcastBackups: {}
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
			}, 6000);
			// document.getElementById('fade').style.display = 'block';
		},

	}
</script>

<style>
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
		max-height: 100%;
		max-width: 100%;
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
		height: 25%;
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
			width: 35% !important;
			height: 35% !important;
			background-color: rgba(255, 255, 255, 0.8) !important;
		}
	}
</style>
