<template>
  <div>
    <div class="movie">
      <div class="moviePhoto">
        <img
          width="90%"
          fit="cover"
          :src="'	http://localhost:5173/src/poster/' + movie.imdb_id + '.jpg'"
          style="border-radius: 8px"
        />
      </div>
      <div class="movieInfo">
        <ul>
          <li>电影名：{{ movie.name }}</li>
          <li>评分：{{ movie.avg_rating }}</li>
          <li>类型：{{ movie.genre }}</li>
          <li>简介：{{ movie.intro }}</li>
          <li>导演：{{ movie.director }}</li>
          <li>主演：{{ movie.actors }}</li>
          <li>编剧：{{ movie.writers }}</li>
          <li>发行时间：{{ movie.release_time }}</li>
          <li>时长：{{ movie.time }}</li>
        </ul>

        <div class="toRate">
          <button class="btnToRate" v-on:click="jumpToRatePage(movie)">
            收藏
          </button>
          <button class="btnToRate" v-on:click="jumpToRatePage(movie)">
            去评价
          </button>
        </div>
      </div>
    </div>
    <div class="otherMovies">
      <div style="text-align: left; margin-bottom: 10px">
        喜欢这部电影的人也喜欢
      </div>
      <a-row :gutter="[60, 24]">
        <a-col :span="4" v-for="m in similarMovies" :key="m.id">
          <a-card hoverable style="width: auto" @click="jumpToMovieDetail(m)">
            <template #cover>
              <span :title="m.name">
                <img
                  width="auto"
                  alt="example"
                  :src="
                    '	http://localhost:5173/src/poster/' + m.imdb_id + '.jpg'
                  "
                  style="width: -webkit-fill-available"
                />
              </span>
            </template>
            <a-card-meta class="ellipsis">
              <template #title>
                <div class="ellipsis">
                  <span :title="m.name">
                    {{ m.name }}
                  </span>
                </div>
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getSimilarMovies } from "../../api/movies";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const movie = ref({
  id: 1,
  name: "冰糖麒麟西瓜 约4.5斤",
  imdb_id: "1",
  release_time: "24.80",
  intro: "29.80",
  director:
    "https://img1.baidu.com/it/u=1036227057,120946014&fm=253&fmt=auto&app=138&f=JPEG?",
  writers: "",
  actors: 1000,
  time: "1h",
});
const similarMovies = ref([]);
const jumpToRatePage = (data: any) => {
  router.push({ name: "orderDetail", params: { movie: data } });
};
const getSimilar = (id: number) => {
  getSimilarMovies(id).then((resp) => {
    similarMovies.value = resp;
  });
};
const jumpToMovieDetail = async (data: any) => {
  getSimilarMovies(data.id).then((resp) => {
    similarMovies.value = resp;
    console.log(movie.value);
    localStorage.setItem("movie", JSON.stringify(data));
    localStorage.setItem("similarMovies", JSON.stringify(similarMovies.value));
    router.push({
      name: "moviesDetail",
      params: { movie: data, similarMovies: similarMovies.value },
    });
    movie.value = JSON.parse(localStorage.getItem("movie"));
    similarMovies.value = JSON.parse(localStorage.getItem("similarMovies"));
  });
};
onMounted(() => {
  movie.value = JSON.parse(localStorage.getItem("movie"));
  similarMovies.value = JSON.parse(localStorage.getItem("similarMovies"));
  console.log(similarMovies.value);
});

//  onMounted() {
//     movie.value = JSON.parse(localStorage.getItem("movie"));
//     similarMovies.value = JSON.parse(localStorage.getItem("similarMovies"));
//     //  this.getSimilar(this.movie.id)
//     //得到菜种类
//     console.log(similarMovies.value);
//   }
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>
.movie {
  width: 100%;
  height: 300px;
}
.van-card__content {
  min-height: 10px;
}
/deep/.van-card {
  height: 40px;
  background-image: linear-gradient(to right, rgb(255, 128, 0), yellow);
}
//价格数字
.van-card__price {
  color: white;
  font-size: 16px;
  font-weight: 600;
}
.van-card__price-integer {
  font-size: 22px;
}
.van-card__origin-price {
  color: white;

  font-size: 14px;
}

.van-card__thumb {
  width: 53px;
  height: 53px;
  border-radius: 8px;
}
.van-card__desc {
  padding-top: 18px;
}

// 菜品信息
.dishes_infor {
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.dish_tittle {
  padding-top: 10px;
  margin-top: 0;
  margin-left: 5px;
  margin-bottom: 0;
  font-weight: 600;
}

.dish_sale {
  margin-top: 5px;
  margin-left: 5px;
  padding-bottom: 8px;
  font-size: 11px;
  color: #656565;
}
// 店铺卡片
.shop_card {
  border: 1px solid #ebeef5;
  margin: 5px;
  border-radius: 10px;
  text-align: left;
  margin-top: 10px;
  padding: 5px;
  height: 50px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.shop_title {
  font-size: 14px;
  font-weight: 600;
  margin-top: 5px;
}
.van-button {
  float: right;
  font-size: 10px;
  padding-left: 5px;
  padding-right: 5px;
  margin-right: 10px;
  height: 30px;
}

.orderDetail_card {
  margin: 5px;
  border-radius: 10px;
}
.orderDetail_header {
  text-align: left;
  height: 20px;
}
.orderDetail_body {
  text-align: left;
  margin-left: 20px;
  margin-top: 20px;
}
/deep/ .el-card {
  padding-right: 10px;
}
/deep/ .el-card__body {
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
}
/deep/.el-card__header {
  padding: 10px;
}
.toRate {
  // margin-top: 30px;
}
.btnToRate {
  background-color: #1795bb;
  border-radius: 12px;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 20px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
}
.btnToRate:hover {
  background-color: #fff;
  color: #1795bb;
  border: 1px solid #ccc;
}

.moviePhoto {
  float: left;
  overflow: hidden;
  text-align: center;
}
.movieInfo {
  max-width: 380px;
  margin-top: 0;
  margin-left: 40px;
  float: left;
  word-wrap: break-word;
  text-align: left;
  line-height: 20px;
}
.otherMovies {
  margin: 0px 30px;
  display: contents;
}
.image {
  width: 60px;
  height: 60px;
  line-height: 100px;
}

.ellipsis {
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
:deep(.ant-card-body) {
  padding: 11px;
}
.container {
  position: relative;
}

.text {
  width: 50%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 1000;
  background-color: rgb(199, 189, 189, 0.3);
}

.container:hover .text {
  opacity: 1;
}
</style>
