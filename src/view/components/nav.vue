<template>
    <div class="nav">
        <div class="logo"><img src="./../../assets/img/css3effect.png" alt="logo"></div>
        <router-link to="/">特效首页</router-link>
        <router-link to="/menuEffect">菜单特效</router-link>
        <router-link to="/listEffect">列表特效</router-link>
        <router-link to="/loadingEffect">加载特效</router-link>
        <router-link to="/fontEffect">文字特效</router-link>
        <router-link to="/picEffect">图片特效</router-link>
        <router-link to="/tableEffect">表格特效</router-link>
    </div>
</template>
<script>
    export default {
        name: 'menus',
        created() {
        }
    }
</script>
<style lang="scss">
    //菜单样式
    .nav {
        width:200px;
        height:100%;
        font-size:14px;
        text-decoration: none;
        letter-spacing: 1px;
        position:fixed;
        left:0px;
        top:0px;
        bottom: 0px;
        border-right:1px dashed rgba(255, 255, 255, .8);
        background:rgba($color: #000000, $alpha: .5);
        .logo{
            vertical-align: middle;
            width:100%;
            padding:20px 10px;
            box-sizing: border-box;
            img{
                width:100%;
            }
        }
        a{  
            width: 100%;
            color:rgba(255, 255, 255, .5);
            text-decoration: none;
            padding:18px 0px;
            box-sizing: border-box;
            text-transform:uppercase;
            vertical-align: middle;
            transition: all .5s;
            display: inline-block;
            text-align: center;
            &:hover{
                color:#00f883;
                transform: rotate(5deg) scale(1.1);
                &::before, &::after{
                    transition: all 0.3s ease;
                    opacity: 1;
                    width: 10px;
                }
            }
            &::before,&::after{
                opacity: 0;
                border-top: 1px solid #00f883;
                content: '';
                display: block;
                position: relative;
                z-index: -1;
                margin: auto;
                width: 0px;
                top: 0px;
            }
            &::before{
                transform: rotate(120deg) translateY(-50%) translateX(-50%);
            }
            &::after {
                transform: rotate(-60deg) translateY(-50%) translateX(-50%);
            }

        }
        .router-link-exact-active{ //当前路由样式
            color:#00f883;
            transform: rotate(5deg) scale(1.1);
            &::before, &::after{
                transition: all 0.3s ease;
                -webkit-transition: all 0.3s ease;
                -moz-transition: all 0.3s ease;
                opacity: 1;
                width: 10px;
            }
        }

        
    }
</style>
