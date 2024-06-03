import Movies from '../views/movies/index.vue'
import Menu from '../components/menu.vue'
import MoviesDetail from '../views/moviesDetail/index.vue'

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/movies",
    name: "movies",
    components:{
            //header: Navbar, //告知该路由头部应该展示那个组件
            default:Movies,
            menu:Menu,
        },
    meta: {
      title: "电影",
    },
  },
  {
    path: "/moviesDetail",
    name: "moviesDetail",
    components:{
            //header: Navbar, //告知该路由头部应该展示那个组件
            default:MoviesDetail,
            menu:Menu,
        },
    meta: {
      title: "电影详情",
    },
  },
];
export default routes;
