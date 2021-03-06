// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Timeline from './Timeline'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.config.productionTip = true

/* Creating root Vue instance */
new Vue({
      el: '#app',
      template: '<App/>',
      components: {
        App
       },
       data: {
       	hello: "hello biyani"
       }
})

new Vue({
	el: '#timeline',
	template: '<Timeline/>',
	components: {
		Timeline
	}
})
