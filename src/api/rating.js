// 评价
import request from "../utils/request";

export const saveRating = (rating) =>
  request({
    url: "/rating/saveRating",
    method: "POST",
    data: rating,
  });
export const saved = (stars) =>
  request({
    url: "/rating/saved",
    method: "POST",
    data: stars,
  });
export const deleteRating = (stars) =>
  request({
    url: "/rating/delete",
    method: "POST",
    data: stars,
  });
export const showRating = (id, page) =>
  request({
    url: "/rating/showRating" + "/" + id,
    method: "GET",
    params: {
      page: page,
    },
  });
// // 获取某个用户的所有评价
// rating / showRating;
// //保存评价
// saveRating;
// //搜索某个电影的所有评价
// search;
// //搜索这个用户对这个电影的评价
// searchUserRating;
