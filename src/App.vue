<template>
	<div id="app" :style="{'background':getTheme.bodyBackgroundColor}">
		<div class="home_audio_inint" v-show="homeAudioInint" @click="changePlay">
			<div class="fensug">
				<div class="wavenum "><b id="denfenjs">{{ waveHeight }}%</b><tt>{{ waveNews }}</tt></div>
				<div class="waven">
					<div class="wave" :style="{height: waveHeight+'%'}">&nbsp;</div>
				</div>
			</div>
		</div>
		<div class="home_audio_inint" v-if="videoBoo" @click="playVideo()">
			<iframe class="home_video" frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=o3029j2jdrg"
			 allowFullScreen="true"></iframe>
		</div>

		<div class="home" :style="{opacity: loadSpecialEffects,'background-color':getTheme.frameColor}">
			<div class="home_audio" @click="changePlay" id="change_play" :title="musicName" v-show="!homeAudioInint">
				<audio id="home_audio" class="home_audio_audio" @ended="audioEnded">
					<source :src="musicURL" type="audio/mpeg">
					您的浏览器不支持 audio 元素。
				</audio>
				<div id="home_audio_div" class="home_audio_div" :title="musicName" :style="{color: getTheme.other.audioColor,'background-color':getTheme.other.audioBackgroundColor}">{{ audioExpress }}</div>
			</div>
			<img class="home_vlog" v-show="!homeAudioInint" @click="playVideo()" title="这世界上总有一份美好能被你喜欢" src="../static/vlog_maldway.png">

			</img>
			<span v-if="backApp" class="home_top_muen" @click="backOf()" :style="{'color':getTheme.other.navigation}">
				&lt;
			</span>
			<div class="home_tracing">
				<div class="home_egg" id="home_egg" :style="{'background-color':getTheme.backgroundColor}">
					<vue-particles v-show="particlesBoo" :color="getTheme.color" :particleOpacity="0.7" :particlesNumber="60"
					 shapeType="circle" :particleSize="4" linesColor="#dad7d7" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4"
					 :linesDistance="250" :moveSpeed="2" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push"
					 class="home_egg_particles">
					</vue-particles>
					<transition name="fade">
						<router-view></router-view>
					</transition>
					<transition name="fade">
						<router-view :name="getTheme.name">
						</router-view>
					</transition>
				</div>
			</div>
			<div class="home_egg_botom">
				<div class="home_egg_botom_button" @click="backOf()" :style="{'border-color':getTheme.other.buttonBorderColor}">
					<div class="home_egg_botom_button_square" :style="{'background-color':getTheme.other.buttonCoreColor}">
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				backApp: false,
				particlesBoo: true,
				audioExpress: ">",
				homeAudioInint: true,
				videoBoo: false,
				waveHeight: 0,
				waveNews: "初次加载中",
				//Hero Trouble I'm In  สั่น（颤动） Is This Love
				musicList: [{
						"name": "Hero",
						"code": "17863892"
					},
					{
						"name": "Trouble I'm In",
						"code": "29758362"
					},
					{
						"name": "สั่น（颤动）",
						"code": "28935319"
					},
					{
						"name": "Is This Love",
						"code": "29357332"
					},
					{
						"name": "Havana",
						"code": "494865824"
					}
				],
				musicIndex: 0
			}
		},
		created: function() {
			//随机一首歌曲
			this.musicIndex = Math.floor(Math.random() * this.musicList.length);
		},
		mounted: function() {
			let _homeAudioInint = this.$getCookie("homeAudioInint");
			if (_homeAudioInint && (_homeAudioInint == "false" || _homeAudioInint == false)) {
				this.homeAudioInint = false;
			}
			if (this.homeAudioInint) {
				let _this = this;
				setInterval(function() {
					if (_this.waveHeight < 100) {
						_this.waveHeight++;
					} else {
						_this.waveNews = "点击继续";
					}
				}, 100);
			} else {
				this.waveHeight = 100;
			}
		},
		watch: {
			$route(to, from) {
				if (to.path != "/") {
					this.backApp = true;
				} else {
					this.backApp = false;
					this.particlesBoo = true;
				}
				let src = to.path.split("/");
				if (src.length > 1 && src[1] != "") {
					if (src[1] == "world") {
						this.particlesBoo = false;
					} else {
						this.particlesBoo = true;
					}
				}
			}
		},
		computed: {
			getTheme:function(){
				return this.$getTheme();
			},
			loadSpecialEffects: function() {
				if (this.homeAudioInint) {
					if (this.waveHeight > 90) {
						return this.waveHeight / 100;
					} else if (this.waveHeight > 40) {
						return this.waveHeight / 160 - 0.2;
					} else {
						return 0;
					}
				} else {
					return 1;
				}
			},
			musicURL: function() {
				return "http://music.163.com/song/media/outer/url?id=" + this.musicList[this.musicIndex].code + ".mp3";
			},
			musicName: function() {
				return this.musicList[this.musicIndex].name;
			}
		},
		methods: {
			playVideo: function() {
				this.videoBoo = !this.videoBoo;
			},
			backOf: function() {
				if (window.location.pathname == "/" && window.location.hash == "#/") {
					this.backApp = false;
					this.particlesBoo = true;
					return;
				} else {
					window.history.back();
					this.backApp = true;
				}
			},
			changePlay: function() {
				let myAudio = document.getElementById("home_audio");
				if (!myAudio) {
					return;
				}
				if (this.homeAudioInint) {
					if (this.waveHeight < 99) {
						//如果音频已暂停返回true，否则返回false
						if (myAudio.paused) {
							myAudio.pause();
							this.audioExpress = ">";
						}
						return;
					} else {
						this.$setCookie("homeAudioInint", "false");
						this.homeAudioInint = false;
					}
				}
				if (!myAudio.paused) {
					myAudio.pause();
					this.audioExpress = ">";
				} else {
					myAudio.src = this.musicURL;
					myAudio.play();
					//■▲
					this.audioExpress = "=";
					console.log("当前播放：" + this.musicList[this.musicIndex].name);
				}
			},
			audioEnded: function() {
				// 不重复播放同一首歌
				let _musicIndex = Math.floor(Math.random() * this.musicList.length);
				while (_musicIndex == this.musicIndex) {
					_musicIndex = Math.floor(Math.random() * this.musicList.length);
				}
				this.musicIndex = _musicIndex;
				this.changePlay();
			},

		}
	}
</script>

<style>
	* {
		box-sizing: border-box;
		transition: all 0.3s ease;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s;
	}

	.fade-enter,
	.fade-leave-to

	/* .fade-leave-active below version 2.1.8 */
		{
		opacity: 0;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	html,
	body {
		margin: 0 auto;
		width: 100%;
		height: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	#app {
		margin: 0 auto;
		width: 100%;
		height: 100%;
		/* background: linear-gradient(to right bottom, rgba(255, 210, 111, 0.6), rgba(54, 119, 255, 0.6)); */

	}

	.home_video {
		height: 50%;
		width: 50%;
	}

	.home_audio_inint {
		cursor: pointer;
		color: #FFFFFF;
		top: 0%;
		right: 0%;
		z-index: 999;
		position: fixed;
		height: 100%;
		width: 100%;
		font-size: 18px;
		font-weight: bolder;
		background-color: rgba(35, 10, 8, 0.6);
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: initial;
	}

	.home_vlog {
		cursor: pointer;
		color: #FFFFFF;
		top: 15%;
		right: 6%;
		z-index: 999;
		position: absolute;
		height: 30px;
		width: 30px;
		font-size: 18px;
		font-weight: bolder;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: initial;
		animation: audioVlog 2s infinite alternate;
	}

	.home_audio {
		cursor: pointer;
		color: #FFFFFF;
		top: 5%;
		right: 6%;
		z-index: 999;
		position: absolute;
		height: 30px;
		width: 30px;
		font-size: 18px;
		font-weight: bolder;
		background-color: rgba(35, 10, 8, 1);
		border-radius: 50%;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: initial;
		animation: audioIn 3s infinite;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
	}

	.home_audio_audio {
		display: none;
	}

	.home_audio_div {
		box-sizing: border-box;
		text-align: center;
		display: inline-block;
		margin: 0 auto;
		height: 30px;
		width: 30px;
		line-height: 30px;
		vertical-align: top;
		border-radius: 50%;


	}

	.home_egg_particles {
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	.home_top_muen {
		cursor: pointer;
		color: #000000;
		top: 0px;
		z-index: 999;
		position: absolute;
		text-align: center;
		left: 0rem;
		height: 50px;
		width: 50px;
		line-height: 50px;
		font-size: 2em;
		color: #999999;
		border-radius: 50%;
		display: none;
	}

	@media (max-width: 1400px) {
		.home {
			background-color: #fdfdfd;
		}

		.home_egg_botom_button {
			border: 2px solid #b6c1c7;
		}

	}

	@media screen and (min-width: 35.5rem) and (max-width: 55.25rem) {
		.home_video {
			height: 40% !important;
			width: 60% !important;
		}
	}

	@media (max-width: 35.5rem) {
		.home_video {
			height: 35% !important;
			width: 100% !important;
		}

		.home_top_muen {
			display: inline !important;
		}

		.home_tracing {
			height: 100% !important;
			border-radius: 0px !important;
			border: 0px solid #b6c1c7 !important;
		}

		.home {
			top: 0% !important;
			bottom: 0% !important;
			left: 0% !important;
			right: 0% !important;
			padding-top: 0px !important;
			padding-left: 0px !important;
			padding-right: 0px !important;
			border-radius: 0px !important;
			box-shadow: 0 5px 10px rgba(0, 0, 0, 0) !important;
		}

		.home_egg {
			height: 100% !important;
			border: 0px solid #b6c1c7 !important;
			border-radius: 0px !important;

		}

		.home_egg_botom {
			display: none !important;
		}
	}

	.home {
		position: fixed;
		box-sizing: border-box;
		top: 10%;
		bottom: 10%;
		left: 15%;
		right: 15%;
		height: auto;
		padding-top: 15px;
		padding-left: 15px;
		padding-right: 15px;
		background-color: #fdfdfd;
		border-radius: 25px;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
		overflow-y: hidden;
		z-index: 998;
	}

	.home_tracing {
		width: 100%;
		height: calc(100% - 50px);
		box-sizing: border-box;
		border-radius: 15px;
	}

	.home_egg {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: center;
		background-color: #fdfdfd;
		position: relative;
		width: 100%;
		height: 100%;
		border-radius: 15px;
		overflow-y: auto;
		padding: 15px;

	}

	.home_egg_botom {
		position: relative;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: flex-end;
	}

	.home_egg_botom_button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		border: 2px solid #b6c1c7;
		border-radius: 50%;
	}

	.home_egg_botom_button:hover {
		background-color: #A2B0B8;
	}

	.home_egg_botom_button:hover .home_egg_botom_button_square {
		border: 1px solid #FFFFFF;
		background-color: #FFFFFF;
	}

	.home_egg_botom_button:active {
		background-color: #ffffff;
	}

	.home_egg_botom_button:active .home_egg_botom_button_square {
		border: 1px solid #666666;
		background-color: #666666;
	}

	.home_egg_botom_button_square {
		border-radius: 3px;
		height: 70%;
		width: 70%;
		background-color: #b6c1c7;
	}

	@keyframes audioVlog {
		from {
			transform: rotate(-30deg);
		}

		to {
			transform: rotate(30deg);
		}
	}

	@keyframes audioIn {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	/*--------*/
	.fensug {
		width: 9.25rem;
		height: 9.25rem;
		background: #fff;
		border: 9px #5576ac solid;
		margin: 100px auto;
		padding: 5px;
		-webkit-border-radius: 25em;
		-moz-border-radius: 25em;
		border-radius: 25em;
		overflow: hidden;
		position: relative
	}

	.fensug .wavenum {
		width: 9.25rem;
		height: 9.25rem;
		overflow: hidden;
		-webkit-border-radius: 50%;
		border-radius: 50%;
		text-align: center;
		display: table-cell;
		vertical-align: middle;
		position: absolute;
		left: -10px;
		top: -5px;
		z-index: 6;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.fensug .wavenum b {
		color: #fff;
		font-size: 30px;
		text-align: center;
		display: block;
		position: relative;
		z-index: 2;
		line-height: 45px;
	}

	.fensug .wavenum tt {
		color: #fff;
		font-size: 16px;
		text-align: center;
		display: block;
		position: relative;
		z-index: 2;
		font-weight: bold;
		width: 124px;
		border-top: 2px #fff solid;
		margin: 3px auto;
		line-height: 35px;
	}


	.waven {
		/* width: 168px; */
		height: 7.5rem;
		border-radius: 25em;
		background-color: #5576ac;
		overflow: hidden;
		position: relative;
		z-index: 5;
	}

	.wave {
		width: 25.5rem;
		height: 80%;
		position: absolute;
		left: 0px;
		bottom: 0px;
		z-index: 4;
		background: url(../static/wave.png) no-repeat;
		animation: move_wave 1s linear infinite;
		-webkit-animation: move_wave 1s linear infinite;
	}

	@keyframes move_wave {
		0% {
			transform: translateX(0)
		}

		50% {
			transform: translateX(-25%)
		}

		100% {
			transform: translateX(-50%)
		}
	}
</style>
