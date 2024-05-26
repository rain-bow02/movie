import request from "../utils/request";

//得到所有菜品
export const getAllMovies = (id, page) =>
  request({
    // url:API.API_STORE_SEARCH+"/"+id
    url: "/movies/all",
    method: "GET",
    params: {
      page: page,
    },
  });

//根据类型查找菜品、
export const getMoviesByType = (id) =>
  request({
    // url:API.API_STORE_SEARCH+"/"+id
    url: API.API_Movies_BY_TYPE + "/" + id,
  });

//推荐
export const getRecommend = (id) =>
  request({
    // url:API.API_STORE_SEARCH+"/"+id
    url: API.API_RECOMMEND + "/" + id,
  });
export const getSearchMovies = (searchValue) =>
  request({
    // url:API.API_STORE_SEARCH+"/"+id
    url: API.API_GET_SEARCH_MOVIES + "/" + searchValue,
    method: "GET",
    data: {
      searchValue,
    },
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
