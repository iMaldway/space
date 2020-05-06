<template>
	<div class="home_body">
		<div class="home_left">
			<div class="home_left_title">
				{{getTheme.describe}}
			</div>
			<div class="home_left_body">
				
			</div>
			<div class="home_left_name" data-content="iMaldway"></div>
			<div class="home_left_explain">
				
			</div>
		</div>
		<div class="home_right">
			
		</div>
		<div class="home_bottom">
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index_theme_red',
		data() {
			return {
				mapHeight: 400,
			}
		},
		methods: {
	
		},
		mounted: function() {
			let home_egg = document.getElementById('home_egg');
			let home_egg_height = home_egg.clientHeight;
			this.mapHeight = home_egg_height;
		},
		computed: {
			getTheme: function() {
				return this.$getTheme();
			}
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
	}
</style>
