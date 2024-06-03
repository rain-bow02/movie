import request from "../utils/request";
// 用户
// 登录
export const login = (user) =>
  request({
    method: "POST",
    url: "/user/login",
    params: {
      name: user.username,
      password: user.password,
    },
  });
// 修改
export const update = (id, user) =>
  request({
    method: "POST",
    url: "/user/update" + "/" + id,
    data: user,
  });
//删除电影
export const deleteUser = (id) =>
  request({
    url: "/user/delete" + "/" + id,
    method: "POST",
  });
//删除电影
export const idInfo = (id) =>
  request({
    url: "/user/idInfo" + "/" + id,
    method: "POST",
  });

//删除电影
export const getAllUser = (page) =>
  request({
    url: "/user/all",
    method: "GET",
    params: {
      page: page,
    },
  });
// user / login;
// // 注册
// register;
// // 用户信息
// userShow;
// // 新增用户
// add;
// //展示所有用户
// all;
// // 修改用户
// update;
// //删除用户
// ("delete");
