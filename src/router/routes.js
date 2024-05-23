
const routes =[
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/login',
        name:'login',
        component: () => import("../views/login/index.vue"),
        meta:{
            title:'登录',
        }
    }

 
]
export default routes