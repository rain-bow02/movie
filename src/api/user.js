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
