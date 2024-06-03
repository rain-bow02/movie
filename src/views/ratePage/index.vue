<template>
  <div>
    <div class="orderDetail_top">
      <span>请为这部电影评分</span>
    </div>

    <div>
      <!-- 订单信息 -->
      <a-card class="orderDetail_card">
        <div slot="header" class="orderDetail_header">
          <span class="orderCard_title">{{ movie.name }} </span>
        </div>

        <div class="orderDetail_body">
          <a-rate v-model:value="evaluate.score" />
          <div>
            <a-input
              style="margin-right: 20px; width: 240px"
              type="textarea"
              :rows="2"
              v-model="evaluate.comment"
              placeholder="说说你对这部电影的看法"
            >
            </a-input>
          </div>
        </div>
        <div class="orderDetail_footer">
          <span style="font-size: 12px">故事情节</span>
          <span style="font-size: 12px; float: right; margin-right: 20px">
            <a-rate v-model:value="plot_score"
          /></span>
        </div>
        <div class="orderDetail_footer">
          <span style="font-size: 12px">视觉效果</span>
          <span style="font-size: 12px; float: right; margin-right: 20px">
            <a-rate v-model:value="visual_score"
          /></span>
        </div>
        <div class="orderDetail_footer">
          <span style="font-size: 12px">音乐效果</span>
          <span style="font-size: 12px; float: right; margin-right: 20px">
            <a-rate v-model:value="sound_score"
          /></span>
        </div>
        <div class="orderDetail_footer">
          <span style="font-size: 12px">角色塑造</span>
          <span style="font-size: 12px; float: right; margin-right: 20px">
            <a-rate v-model:value="actor_score"
          /></span>
        </div>
        <div class="orderDetail_footer">
          <span style="font-size: 12px">艺术价值</span>
          <span style="font-size: 12px; float: right; margin-right: 20px">
            <a-rate v-model:value="artistic_score"
          /></span>
        </div>
      </a-card>

      <!-- 配送信息 -->
    </div>
    <div class="toRate">
      <button class="btnToRate" v-on:click="submitEvaluate()">提交评分</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { saveRating } from "../../api/rating";

import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const evaluate = ref({
  movie_id: 0,
  user_id: 0,
  score: 0,
  comment: "好",
});
const plot_score = ref();
const visual_score = ref();
const sound_score = ref();
const actor_score = ref();
const artistic_score = ref();
const user = ref({});
const type = ref("已完成");
const order = ref({});
const movie = ref({});
const submitEvaluate = () => {
  console.log(evaluate.value);
  evaluate.value.movie_id = movie.value.id;
  evaluate.value.user_id = user.value.id;
  alert("评价成功");
  console.log(evaluate.value);
  saveRating(evaluate.value);
};

const jumpToHomePage = () => {
  router.push({ name: "dishes" });

  console.log("  movie");

  console.log(movie.value);
  console.log(" evaluate.movie_id");
  console.log(evaluate.value.user_id);
  console.log("evaluate");
  console.log(evaluate.value);
};
onMounted(() => {
  movie.value = JSON.parse(localStorage.getItem("movie"));
  user.value = JSON.parse(localStorage.getItem("user"));
  console.log(user.value);
  console.log(movie.value.id);
});
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>
//顶部标题
.orderDetail_top {
  font-size: 18px;
  text-align: left;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  font-weight: 600;
}
//评分卡片
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
  margin-top: 5px;
}
.orderDetail_footer {
  text-align: left;
  padding-bottom: 10px;
  padding-top: 10px;
  border-top: 1px solid #ebeef5;
  margin-left: 20px;
}
.orderDetail_button {
  margin-right: 20px;
  height: 25px;
}
.orderDetail_title {
  font-size: 14px;
  font-weight: 600;
}
.orderDetail_type {
  float: right;
  padding: 3px 10px;
  font-size: 12px;
}
/deep/ .el-card {
  padding-right: 10px;
}
/deep/ .el-card__body {
  padding: 0px;
}
/deep/.el-card__header {
  padding: 10px;
}

.van-card__thumb {
  height: 60px;
  width: 60px;
}
// 标题
.van-card {
  padding: 0;
  margin: 10px;
  background-color: white;
  border-radius: 10px;
}
.van-card__title {
  padding-top: 6px;
  font-size: 14px;
  font-weight: 600;
}
.van-card__content {
  min-height: 60px;
}
.van-card__bottom {
  line-height: 45px;
  padding-right: 10px;
}
// 标签
.van-tag {
  font-size: 9px;
  height: 13px;
  margin-left: 3px;
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
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
}
.btnToRate:hover {
  background-color: #fff;
  color: #1795bb;
  border: 1px solid #ccc;
}
</style>
