//电影类型
import request from "../utils/request";

//得到所有菜品
export const getAllMoviesType = (page) =>
  request({
    // url:API.API_STORE_SEARCH+"/"+id
    url: "/moviesType/all",
    method: "GET",
    params: {
      page: page,
    },
  });
//删除电影
export const deleteMoviesType = (id) =>
  request({
    url: "/moviesType/delete" + "/" + id,
    method: "POST",
  });
//新增电影
export const add = (movie) =>
  request({
    url: "/moviesType/add",
    method: "POST",
    data: movie,
  });
//修改电影
export const update = (id, movie) =>
  request({
    url: "/moviesType/update" + "/" + id,
    method: "POST",
    data: movie,
  });
// //展示所有电影类型
// moviesType / all;
// //查询电影类型
// search;
// //新增电影类型
// add;
// // 修改电影
// update;
// //删除
// ("delete");
