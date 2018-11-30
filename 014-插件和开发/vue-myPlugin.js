
(function () {
	const MyPlugin = {}

	MyPlugin.install = function (Vue, options) {
		// 1. 添加全局方法或属性
		Vue.myGlobalMethod = function () {
			console.log('Vue.myGlobalMethod')
		}

		// 2. 添加全局资源----转换成大写
		Vue.directive('upper-text', {
			bind (el, binding, vnode, oldVnode) {
				el.textContent = binding.value.toUpperCase()
			}
		})

		// 3. 注入组件
		Vue.mixin({
			created: function () {
				console.log('Vue.mixin')
			}
		})

		// 4. 添加实例方法
		Vue.prototype.$myMethod = function (methodOptions) {
			console.log('Vue.prototype.$myMethod')
		}
	}

	window.MyPlugin = MyPlugin
})()
