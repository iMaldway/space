// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import 'echarts/map/js/china'
import VueParticles from 'vue-particles'


Vue.prototype.$echarts = echarts

Vue.use(VueParticles)
Vue.config.productionTip = false

//设置cookie
Vue.prototype.$setCookie = function(cname, cvalue, exdays) {
	let d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires=" + d.toUTCString();
	// console.info(cname + "=" + cvalue + "; " + expires);
	document.cookie = cname + "=" + cvalue + "; " + expires;
}
//获取cookie
Vue.prototype.$getCookie = function(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) != -1) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
//清除cookie
Vue.prototype.$clearCookie = function() {
	this.$setCookie("username", "", -1);
}
Vue.prototype.$checkCookie = function() {
	let user = this.$getCookie("username");
	if (user != "") {
		alert("Welcome again " + user);
	} else {
		user = prompt("Please enter your name:", "");
		if (user != "" && user != null) {
			this.$setCookie("username", user, 365);
		}
	}
}
//主题配置
Vue.prototype.$themeList = [{
		name: "indexTheme",
		dateStart: "",
		dateEnd: "",
		frameColor:"#fdfdfd",
		bodyBackgroundColor:"linear-gradient(to right bottom, rgba(255, 210, 111, 0.6), rgba(54, 119, 255, 0.6))",
		backgroundColor: "#fdfdfd",
		color: "#333333",
		describe: "默认主题",
		other: {
			buttonBorderColor: "#b6c1c7",
			buttonCoreColor: "#b6c1c7",
			audioBackgroundColor: "#230a08",
			audioColor: "#FFFFFF",
			navigation: "#000000",
			aboutArticle:"#666666",
			hyperlink:"#144082",
			chronicleColor:"#5576AC"
		}
	},
	{
		name: "indexThemeBlued",
		dateStart: "",
		dateEnd: "",
		frameColor:"#0f4c81",
		bodyBackgroundColor:"linear-gradient(to right bottom, rgba(255, 210, 111, 0.6), rgba(54, 119, 255, 0.6))",
		backgroundColor: "#0f4c81",
		color: "#f1efe0",
		describe: "2020经典蓝",
		other: {
			buttonBorderColor: "#f1efe0",
			buttonCoreColor: "#f1efe0",
			audioBackgroundColor: "#f1efe0",
			audioColor: "#0f4c81",
			navigation: "#f1efe0",
			aboutArticle:"#f1efe0",
			hyperlink:"#f1efe0",
			chronicleColor:"#f1efe0"
		}
	},
	{
		name: "indexThemeRed",
		dateStart: "",
		dateEnd: "",
		frameColor:"#ffffff",
		bodyBackgroundColor:"#dfdfe1",
		backgroundColor: "#ffffff",
		color: "#bf2929",
		describe: "2020本命红",
		other: {
			buttonBorderColor: "#bf2929",
			buttonCoreColor: "#bf2929",
			audioBackgroundColor: "#bf2929",
			audioColor: "#ffffff",
			navigation: "#f1efe0",
			aboutArticle:"#f1efe0",
			hyperlink:"#f1efe0",
			chronicleColor:"#f1efe0"
		}
	}
];
//默认主题
Vue.prototype.$theme = 0;
//取得主题
let date = new Date();
Vue.prototype.$getTheme = function() {
	let hours = date.getHours();
	if (hours < 6 || hours > 18) {
		this.$theme = 1;
	} else {
		this.$theme = 0;
	}
	// if (hours > 6 && hours < 18) {
	// 	this.$theme = 1;
	// } else {
	// 	this.$theme = 0;
	// }
	return this.$themeList[this.$theme];
}

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})
