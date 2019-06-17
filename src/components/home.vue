<template>
	<div class="home_body" id="home_major_body">
		<div class="home_left">
			<div class="home_left_title">
				{{content.name}}
			</div>
			<div class="home_left_body">
				&nbsp;&nbsp;&nbsp;&nbsp;
				{{content.body}}
			</div>
			<div class="home_left_bottom">
				<div class="last" @click="last()">
					<div class="solid">
						<</div> </div> <div class="middle">{{middle}}/{{lastIndex}}
					</div>
					<div class="next" @click="next()">
						<div class="solid">></div>
					</div>
				</div>
			</div>
			<div class="hone_right">
				<div class="home_right_top">
					<div style="font-size: 1rem;flex-basis: 100%;">Use time</div>
					{{content.year}}year
				</div>
				<div class="home_right_bottom">
					<div style="font-size: 1rem;flex-basis: 100%;">Ability Level</div>
					{{content.level}}
					<div style="font-size: 1rem;flex-basis: 100%;">A full score of 10</div>
				</div>
				<div></div>
			</div>
		</div>
</template>

<script>
	let data = [{
			"name": "Java",
			"body": "三年开发经验。 最先接触的框架是SSH，没在实际项目中使用过，后面一直使用的是SSM框架。现在工作中主要用到的是Spring Boot，以及Spring系列的微服务架构。干了这么久，意识到自己的欠缺，现在努力在数据结构、算法方面填坑。在工作中首先是需求然后是可行性再然后解决方案最后是技术选择。技术相对不是最重要的，解决用户痛点才是使命。 ",
			"level": 6,
			"year": 3.4
		},
		{
			"name": "JavaSript",
			"body": "这是一门全栈式语言。 从一接触就深爱的语言，无论从语法架构还是设计方式都令我深深着迷。它正在风靡全球。 涉及的领域从PC到移动，从服务器到浏览器，从游戏甚至嵌入式开发，简直太棒了。 当然这一切离不开背后的各种编译器将它编译成适当的机器码。得益于V8引擎才燃起了前端革命之火。",
			"level": 4,
			"year": 2
		},
		{
			"name": "HTML",
			"body": "简直是最理想的GUI啊，不得不感叹它的强大，各种界面绘制简直不要太顺手。HTML5之后是移动互联网的开端，一时间开发者们纷纷站队，我这个后端开发的也经不起它的诱惑投入了它的怀抱。",
			"level": 4,
			"year": 3
		},
		{
			"name": "APP",
			"body": "全栈APP开发工程师，在以前的定义是要会IOS跟Android开发。 但现在不一样了，HTML5APP出现了，跨平台式开发，一份代码两种平台。 高效快捷，节省人力成本。开发框架更是多种多样，甚至都有官方的开发框架。 拖拉组件，编写交互代码即可制作出APP。 使用过它开发过几款APP，现已在各大应用商店上架。但，也正是开发过这几款APP，让我意识到了很多问题，中等大型、性能型、特定性APP还是无法离开原生编程。",
			"level": 3,
			"year": 2
		},
		{
			"name": "WeChat",
			"body": "微信，几乎成了居民的第二张“身份证”。庞大的使用人群，严格的注册方式，都成了它独特的标签。 它还有一颗想成为“系统”级应用的心。从公众号到小程序小游戏，几乎涵盖了你生活中所需的APP的一切功能点。",
			"level": 1,
			"year": 1
		}
	];
	export default {
		name: 'home',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				middle: 1,
				content: {
					"name": "Java",
					"body": "",
					"level": 6,
					"year": 3.5
				},
				index: 0,
				lastIndex:data.length
			}
		},
		created: function() {
			this.content = data[this.index];
		},
		methods: {
			next: function(){
				if (this.index >= data.length - 1) {
					this.index = 0;
				} else {
					this.index++;
				}
				this.middle = this.index + 1;
				this.content = data[this.index];
			},
			last: function() {
				if (this.index <= 0) {
					this.index = data.length - 1;
				} else {
					this.index--;
				}
				this.middle = this.index + 1;
				this.content = data[this.index];
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
		text-align: center;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		flex-basis: 55%;
		width: 55%;
		height: 100%;
	}

	.hone_right {
		display: flex;
		text-align: center;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: center;
		flex-basis: 45%;
		width: 45%;
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

	.home_left_title {
		font-size: 3rem;
		height: 25%;
		color: #333333;
		transition: all 0.3s ease;
	}

	.home_left_body {
		height: 60%;
		align-items: flex-start !important;
		align-self: flex-start !important;
		align-content: flex-start !important;
		font-size: 16px;
		color: #666666;
		transition: all 0.3s ease;
	}

	.home_left_bottom {
		height: 15%;
		flex-wrap: nowrap;
	}

	.last {
		cursor: pointer;
		flex-basis: 25% !important;
	}

	.middle {
		flex-basis: 50% !important;
	}

	.next {
		cursor: pointer;
		flex-basis: 25% !important;
	}

	.solid {
		width: 35px;
		height: 35px;
		background-color: #666666;
		cursor: pointer;
		font-size: 18px;
		color: #FFFFFF;
	}

	.home_right_top {
		width: 70%;
		height: 30%;
		background-color: #000000;
		color: #FFFFFF;
		font-size: 2rem;
		margin-left: 30%;
		margin-bottom: 1.25%;
	}

	.home_right_bottom {
		width: 70%;
		height: 30%;
		margin-right: 30%;
		margin-top: 1.25%;
		font-size: 2rem;
		background-color: rgba(253, 51, 89, 0.6);
	}

	@media (max-width: 840px) {
		.home_left {
			height: 70% !important;
		}
		.hone_right{
			height: 30% !important;
		}
		.home_right_top {
			width: 50% !important;
			height: 60% !important;
			font-size: 1.25rem !important;
			margin-left: 0% !important;
			margin-bottom: 5.25% !important;
		}

		.home_right_bottom {
			width: 50% !important;
			height: 60% !important;
			margin-right: 0% !important;
			margin-top: 5.25% !important;
			font-size: 2rem;
		}
	}
</style>
