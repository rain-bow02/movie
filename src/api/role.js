// // 角色
import request from "../utils/request";
//删除电影
export const getAllRole = (page) =>
  request({
    url: "/role/all",
    method: "GET",
    params: {
      page: page,
    },
  });
//删除电影
export const deleteMoviesType = (id) =>
  request({
    url: "/role/delete" + "/" + id,
    method: "POST",
  });
//新增电影
export const add = (movie) =>
  request({
    url: "/role/add",
    method: "POST",
    data: movie,
  });
//修改电影
export const update = (id, movie) =>
  request({
    url: "/role/update" + "/" + id,
    method: "POST",
    data: movie,
  });
// // 新增角色
// //展示所有角色
// role / all;
// //查询角色
// search;
// //新增角色
// add;
// // 修改角色
// update;
// //删除
// ("delete");
