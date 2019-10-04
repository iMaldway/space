<template>
	<div id="app">
		<div class="home">
			<div class="home_audio" @click="changePlay" title="点击播放">
				<audio id="home_audio" class="home_audio_audio" autoplay loop >
				  <source src="http://up_mp4.t57.cn/2015/1/05m/03/98032327569.m4a" type="audio/mpeg">
					您的浏览器不支持 audio 元素。
				</audio>
				<div id="home_audio_div" class="home_audio_div" title="点击播放" >{{ audioExpress }}</div>
			</div>
			<div v-if="backApp" class="home_top_muen" @click="backOf()">
				<
			</div> 
			<div class="home_tracing">
				<div class="home_egg" id="home_egg">
					<vue-particles v-show="particlesBoo" color="#505668" :particleOpacity="0.8" :particlesNumber="60" shapeType="circle" :particleSize="4"
					 linesColor="#dad7d7" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="250" :moveSpeed="2"
					 :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" class="home_egg_particles">
					</vue-particles>
						<transition name="fade">
							<router-view></router-view>
						</transition>
				</div>
			</div>
			<div class="home_egg_botom">
				<div class="home_egg_botom_button" @click="backOf()">
					<div class="home_egg_botom_button_square">
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
				particlesBoo:true,
				audioExpress:">"
			}
		},
		created: function() {
			
		},
		mounted: function() {
			let myAudio = document.getElementById("home_audio");
			if(myAudio){
				try{
					myAudio.pause();
				}catch(e){
					console.log("等待用户点击播放");
				}
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
				if(src.length>1 && src[1] != ""){
					if(src[1] == "world"){
						this.particlesBoo = false;
					}else{
						this.particlesBoo = true;
					}
				}
			}
		},
		methods: {
			backOf: () => {
				if (window.location.pathname == "/" && window.location.hash == "#/") {
					this.backApp = false;
					this.particlesBoo = true;
					return;
				} else {
					window.history.back();
					this.backApp = true;
				}
			},
			changePlay:()=>{
				//home_audio_div
				var myAudio = document.getElementById("home_audio");
				var homeAudioDiv = document.getElementById("home_audio_div");
				if(myAudio && myAudio.readyState){
					if(!myAudio.paused){
						myAudio.pause();
						homeAudioDiv.innerText = ">";
					}else{
						myAudio.play();
						//■▲
						homeAudioDiv.innerText = "=";
					}
				}
				
			}
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
	body{
		background: linear-gradient(to right bottom, rgba(255, 210, 111, 0.6), rgba(54, 119, 255, 0.6));
		/* filter:blur(15px); */
	}
	.home_audio{
		cursor: pointer;
		color: #FFFFFF;
		top: 5%;
		right: 5%;
		z-index: 999;
		position: absolute;
		height: 30px;
		width: 30px;
		font-size: 18px;
		font-weight: bolder;
		background-color: #230a08;
		border-radius: 50%;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: initial;
		animation: audioIn 3s infinite;
		/* background: radial-gradient(white,  blue, green); */
		/* background-color: #E3E8EA; */
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
	}
	.home_audio_audio{
		display: none;
	}
	.home_audio_div{
		box-sizing: border-box;
		text-align: center;
		margin: 0 auto;
		height: 30px;
		width: 30px;
		line-height: 30px;
		vertical-align:top;
		border-radius: 50%;
		
		
	}
	
	.home_egg_particles{
		width: 100%;
		height: 100%;
	}
	.home_top_muen {
		cursor: pointer;
		color: #000000 !important;
		top: 0px;
		z-index: 9;
		position: relative;
		text-align: center;
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
			background-color: #FFFFFF !important;
		}

		.home_egg_botom_button {
			border: 2px solid #b6c1c7 !important;
		}
	}

	@media (max-width: 600px) {
		.home_top_muen {
			display: inherit !important;
		}
		.home_tracing{
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
		background-color: #FFFFFF;
		border-radius: 25px;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
		overflow-y: hidden;
		z-index: 999;
	}
	.home_tracing{
		width: 100%;
		height: calc(100% - 50px );
		box-sizing: border-box;
		/* overflow-y: hidden; */
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
		background-color: #FFFFFF !important;
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
		border: 2px solid #b6c1c7;
		background-color: #b6c1c7;
	}
	@keyframes audioIn{
		from{
			transform: rotate(0deg);
		}
		to{
			transform: rotate(360deg);
		}
	}
</style>
