<template>
  <div id="app">
    <!-- 菜单区域 -->
    <menus></menus>
    <!-- 页面内容区域 -->
    <transition :name="transitionName" mode="out-in">
     <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import menus from './view/components/nav.vue'
export default {
  components: {menus},
  name: 'app',
  data(){
    return{
      transitionName:'transitionRouter',
    }
  },
  created(){
  }
}
</script>

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgba($color: #ffffff, $alpha:.8);
    margin-left: 200px;
    box-sizing: border-box;
  }
  // 页面路由切换转场动画
  .transitionRouter-enter-active{  // 进场
    transition: all .5s ease;
  }
  .transitionRouter-leave-active {  // 退场
    transition: all 0s ease;
  }
  .transitionRouter-enter,
  .transitionRouter-leave
  {
    // transform:translate3d(50%, 0, 0); // 自右向左
    // transform:translate3d(0, 50%, 0); // 自下而上
    transform:rotateX(90deg); // 绕X轴旋转
    // transform:rotateY(90deg); // 绕Y轴旋转
    opacity: 0;
  }
  
</style>
