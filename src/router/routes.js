import Movies from "../views/movies/index.vue";
import Menu from "../components/menu.vue";
import RatePage from "../views/ratePage/index.vue";
import Back from "../components/back.vue";
import MoviesDetail from "../views/moviesDetail/index.vue";
import Recommend from "../views/recommend/index.vue";
import Personal from "../views/person/personal/index.vue";
import Rating from "../views/person/rating/index.vue";
import Stars from "../views/person/stars/index.vue";
import ViewRecord from "../views/person/viewRecord/index.vue";
import User from "../views/system/user/index.vue";
import Role from "../views/system/role/index.vue";
import Permission from "../views/system/permission/index.vue";
import MovieManager from "../views/systemMovie/movie/index.vue";
import MovieTypeManager from "../views/systemMovie/movieType/index.vue";
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
    components: {
      //header: Navbar, //告知该路由头部应该展示那个组件
      default: Movies,
      menu: Menu,
    },
    meta: {
      title: "电影",
    },
  },
  {
    path: "/moviesDetail",
    name: "moviesDetail",
    components: {
      //header: Navbar, //告知该路由头部应该展示那个组件
      default: MoviesDetail,
      menu: Menu,
      back: Back,
    },
    meta: {
      title: "电影详情",
    },
  },
  {
    path: "/ratePage",
    name: "ratePage",
    components: {
      //header: Navbar, //告知该路由头部应该展示那个组件
      default: RatePage,
      menu: Menu,
      back: Back,
    },
    meta: {
      title: "电影详情",
    },
  },
  {
    path: "/personal",
    name: "personal",
    components: {
      //header: Navbar, //告知该路由头部应该展示那个组件
      default: Personal,
      menu: Menu,
    },
    meta: {
      title: "电影详情",
    },
  },
  {
    path: "/user",
    name: "user",
    components: {
      //header: Navbar, //告知该路由头部应该展示那个组件
      default: User,
      menu: Menu,
    },
    meta: {
      title: "电影详情",
    },
  },
  {
    path: "/role",
    name: "role",
    components: {
      //header: Navbar, //告知该路由头部应该展示那个组件
      default: Role,
      menu: Menu,
    },
    meta: {
      title: "电影详情",
    },
  },
  {
    path: "/permission",
    name: "permission",
    components: {
      //header: Navbar, //告知该路由头部应该展示那个组件
      default: Permission,
      menu: Menu,
    },
    meta: {
      title: "电影详情",
    },
  },
  {
    path: "/rating",
    name: "rating",
    components: {
      //header: Navbar, //告知该路由头部应该展示那个组件
      default: Rating,
      menu: Menu,
    },
    meta: {
      title: "电影详情",
    },
  },
  {
    path: "/stars",
    name: "stars",
    components: {
      //header: Navbar, //告知该路由头部应该展示那个组件
      default: Stars,
      menu: Menu,
    },
    meta: {
      title: "电影详情",
    },
  },
  {
    path: "/viewRecord",
    name: "viewRecord",
    components: {
      //header: , //告知该路由头部应该展示那个组件
      default: ViewRecord,
      menu: Menu,
    },
    meta: {
      title: "电影详情",
    },
  },
  {
    path: "/recommend",
    name: "recommend",
    components: {
      //header: Navbar, //告知该路由头部应该展示那个组件
      default: Recommend,
      menu: Menu,
    },
    meta: {
      title: "电影详情",
    },
  },
  {
    path: "/movieManager",
    name: "movieManager",
    components: {
      //header: Navbar, //告知该路由头部应该展示那个组件
      default: MovieManager,
      menu: Menu,
    },
    meta: {
      title: "电影详情",
    },
  },
  {
    path: "/movieTypeManager",
    name: "movieTypeManager",
    components: {
      //header: Navbar, //告知该路由头部应该展示那个组件
      default: MovieTypeManager,
      menu: Menu,
    },
    meta: {
      title: "电影详情",
    },
  },
];
export default routes;
