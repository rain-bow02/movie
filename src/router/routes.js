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
    component: () => import("../views/movies/index.vue"),
    meta: {
      title: "电影",
    },
  },
];
export default routes;
