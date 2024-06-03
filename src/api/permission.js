// 权限
import request from "../utils/request";
//删除电影
export const getAllPermission = (page) =>
  request({
    url: "/permission/all",
    method: "GET",
    params: {
      page: page,
    },
  });

export const update = (page) =>
  request({
    url: "/permission/update",
    method: "POST",
    data: page,
  });

export const add = (page) =>
  request({
    url: "/permission/add",
    method: "POST",

    data: page,
  });

export const deleteMoviesType = (id) =>
  request({
    url: "/permission/delete" + "/" + id,
    method: "POST",
  });
// // 所有权限
// permission / all;
// // 新增权限
// add;
// //搜索权限
// search;
// // 修改权限
// update;
// // 删除权限
// ("delete");
