import request from "../utils/request";

//得到所有菜品
export const getAllMovies = (page) =>
  request({
    // url:API.API_STORE_SEARCH+"/"+id
    url: "/movies/all",
    method: "GET",
    params: {
      page: page,
    },
  });

//根据类型查找菜品、
export const getMoviesByType = (id, page) =>
  request({
    // url:API.API_STORE_SEARCH+"/"+id
    url: "/movies/inTypeMovies" + "/" + id,
    method: "GET",
    params: {
      page: page,
    },
  });

//推荐
export const getRecommend = (id) =>
  request({
    // url:API.API_STORE_SEARCH+"/"+id
    url: "/movies/recommend" + "/" + id,
  });
export const getSearchMovies = (searchValue, page) =>
  request({
    // url:API.API_STORE_SEARCH+"/"+id
    url: "/movies/search" + "/" + searchValue,
    method: "GET",
    params: {
      page: page,
    },
  });

//删除电影
export const deleteMovie = (id) =>
  request({
    url: "/movies/delete" + "/" + id,
    method: "POST",
  });
//新增电影
export const addMovie = (movie) =>
  request({
    url: "/movies/add",
    method: "POST",
    data: movie,
  });
//修改电影
export const updateMovie = (id, movie) =>
  request({
    url: "/movies/update" + "/" + id,
    method: "POST",
    data: movie,
  });
//相似电影
export const getSimilarMovies = (id) =>
  request({
    url: "/movies/similar" + "/" + id,
    method: "POST",
  });

//删除电影
export const idInfo = (id) =>
  request({
    url: "/movies/idInfo" + "/" + id,
    method: "POST",
  });

// //展示所有电影
// movies / all;
// //分类查询电影
// inTypeMovies;
// //生成推荐电影
// recommend;
// //根据电影名查询电影
// search;
// //新增电影
// add;
// //修改电影
// update;
// //删除
// ("delete");
// //生成相似电影
// similar;
