import { useIntersectionObserver } from '@vueuse/core'

// 定义图片懒加载插件
export const lazyPlugin = {
  install(app) {
    // 定义全局指令
    app.directive('img-lazy', {
      // el:定绑定的元素  bingding:指令对象
      mounted(el, binding) {
        // 监听的对象是否在视口区域(横向纵向都在监听)
        const { stop } = useIntersectionObserver(
          el, // 监听的对象
          ([{ isIntersecting }]) => {
            // 进入了视口区域 实现图片懒加载
            if (isIntersecting) {
              el.src = binding.value
              // 取消监听 防止内存浪费
              stop()
            }
          },
        )
      }
    })
  }
}