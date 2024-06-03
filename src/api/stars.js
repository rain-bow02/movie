import request from "../utils/request";
// 新增收藏
export const saveStars = (stars) =>
  request({
    url: "/stars/saveStars",
    method: "POST",
    data: stars,
  });
export const saved = (stars) =>
  request({
    url: "/stars/saved",
    method: "POST",
    data: stars,
  });
export const deleteStars = (stars) =>
  request({
    url: "/stars/delete",
    method: "POST",
    data: stars,
  });

export const showStars = (id, page) =>
  request({
    url: "/stars/showStars" + "/" + id,
    method: "GET",
    params: {
      page: page,
    },
  });
// // 收藏
// //展示所有收藏
// stars / showStars;
// // 新增收藏
// saveStars;
// //删除收藏
// ("delete");
