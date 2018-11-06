<template>
    <div class="home">
        <router-link to="/menuEffect">
            <dl style="background-color:#00adea">
                <i class="iconfont icon-num-one bgicon"></i>
                <dt>菜单特效</dt>
            </dl>
        </router-link>
        <router-link to="/listEffect">    
            <dl style="background-color:#62d5fe">
                <i class="iconfont icon-num-two bgicon"></i>
                <dt>列表特效</dt>
            </dl>
        </router-link>
        <router-link to="/loadingEffect">
            <dl style="background-color:#80c535">
                <i class="iconfont icon-num-three bgicon"></i>
                <dt>加载特效</dt>
            </dl>
        </router-link>
        <router-link to="/fontEffect">
            <dl style="background-color:#70c5c5">
                <i class="iconfont icon-num-four bgicon"></i>
                <dt>文字特效</dt>
            </dl>
        </router-link>
        <router-link to="/picEffect">
            <dl style="background-color:#f2b800">
                <i class="iconfont icon-num-five bgicon"></i>
                <dt>图片特效</dt>
            </dl>
        </router-link>
        <router-link to="/tableEffect">
            <dl style="background-color:#f45c5c">
                <i class="iconfont icon-num-six bgicon"></i>
                <dt>表格特效</dt>
            </dl>
        </router-link>
    </div>
</template>
<script>
    export default {
        data () {
            return {
            }
        },
        created(){
        },
        methods:{
        }
    }
</script>
<style lang="scss">
    .home{
        width:80%;
        height:450px;
        margin-left:10%;
        margin-top:150px;
        dl{
            height:450px;
            display: inline-block;
            width:calc(100% / 6);
            overflow: hidden;
            position: relative;
            dt{
                margin: 0;
                padding: 0;
                font-size:18px;
                position: absolute;
                bottom: 10px;
                right: 10px;
                letter-spacing:1px;
                color: rgba($color:#ffffff, $alpha:.6);
            }
            .bgicon{
                position: absolute;
                top:-150px;
                left:-250px;
                font-size: 500px;
                color:rgba(255, 255, 255, .2);
                transition: all 1s
            }
            &::before{
                content:'';
                display: inline-block;
                background:rgba($color:#ffffff, $alpha:.1);
                position: absolute;
                z-index: 1;
                top:-160px;
                left:-270px;
                width:520px;
                height:520px;
                border-radius:520px;
                transform-origin: center center;
                transform: translate(0, 0);
                transition: all 0.8s;
            }
            &:hover{
                &::before{
                    transform:scale(3);
                }
                .bgicon{
                    left:-150px;
                }
            }
        }
    }
</style>