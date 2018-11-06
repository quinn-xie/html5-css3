import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./view/home/index.vue"; // 首页
import listEffect from "./view/listEffect/index.vue"; // 列表
import loadingEffect from "./view/loadingEffect/index.vue"; // 加载
import menuEffect from "./view/menuEffect/index.vue"; // 菜单
import picEffect from "./view/picEffect/index.vue"; // 图片
import tableEffect from "./view/tableEffect/index.vue"; // 表格
import fontEffect from "./view/fontEffect/index.vue"; // 文字

Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        component: home,
        meta: {
            title: 'CSS3 EFFECTS'
        }
    },
    {
        path:"/listEffect",
        component: listEffect,
        meta: {
            title: '列表特效'
        }
    },
    {
        path:"/loadingEffect",
        component: loadingEffect,
        meta: {
            title: '加载特效'
        }
    },
    {
        path: "/menuEffect",
        component: menuEffect,
        meta: {
            title: '菜单特效'
        }
    },
    {
        path: "/picEffect",
        component: picEffect,
        meta: {
            title: '图片特效'
        }
    },
    {
        path: "/tableEffect",
        component: tableEffect,
        meta: {
            title: '表格特效'
        }
    },
    {
        path: "/fontEffect",
        component: fontEffect,
        meta: {
            title: '文字特效'
        }
    }
]

var router =  new VueRouter({
    routes
})

export default router;