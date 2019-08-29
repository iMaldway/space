<template>
	<div id="app">
		<div class="home">
			<div v-if="backApp" class="home_top_muen" @click="backOf()">
				<
			</div> 
			<div class="home_tracing">
				<div class="home_egg" id="home_egg">
					<vue-particles v-show="particlesBoo" color="#666" :particleOpacity="0.7" :particlesNumber="60" shapeType="circle" :particleSize="4"
					 linesColor="#999" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="200" :moveSpeed="2"
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
				particlesBoo:true

			}
		},
		created: function() {

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
		background-color: #5ca9ff;
		margin: 0 auto;
		box-sizing: border-box;
	}
	.home_egg_particles{
		width: 100%;
		height: 100%;
	}
	.home_top_muen {
		cursor: pointer;
		color: #000000 !important;
		top: 0px;
		z-index: 9999;
		position: fixed;
		text-align: center;
		height: 55px;
		width: 55px;
		line-height: 55px;
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
		background-color: #000000;
		border-radius: 25px;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
		overflow-y: hidden;
	}
	.home_tracing{
		width: 100%;
		height: calc(100% - 50px );
		box-sizing: border-box;
		overflow-y: hidden;
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
		overflow: hidden;
		
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
		border: 2px solid #e3e8ea;
	}
</style>
