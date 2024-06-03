import request from "../utils/request";
// 电影观看记录

export const showViewRecord = (id, page) =>
  request({
    url: "/viewRecord/showViewRecord" + "/" + id,
    method: "GET",
    params: {
      page: page,
    },
  });
// 新增观看记录
export const saveViewRecord = (viewRecord) =>
  request({
    url: "/viewRecord/saveViewRecord",
    method: "POST",
    data: viewRecord,
  });
// // 新增id浏览记录
// viewRecord / saveViewRecord;
// //用户的所有浏览记录
// allViewRecord;
// //删除浏览记录
// ("delete");
