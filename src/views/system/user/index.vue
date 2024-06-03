<template>
  <div>
    <a-space style="width: 100%; padding-left: 12px">
      <a-button @click="add">新增用户</a-button>
    </a-space>
    <!-- 搜索按钮 -->

    <!-- 分类宫格 -->

    <a-row :gutter="[60, 24]" style="margin: 5px -30px 10px -16px">
      <a-col :span="6" v-for="movie in users" :key="movie.id">
        <a-card hoverable style="width: auto">
          <template #actions>
            <icon-font type="icon-chakan" @click.stop="show(movie)" />
            <icon-font type="icon-bianji" @click.stop="edit(movie)" />
            <a-popconfirm
              title="是否确定删除?"
              ok-text="Yes"
              cancel-text="No"
              @confirm="deleteById(movie.id)"
              @cancel="cancel"
            >
              <icon-font type="icon-shanchu" />
            </a-popconfirm>
          </template>
          <a-card-meta class="ellipsis">
            <template #title>
              <div class="ellipsis" style="font-size: 14px">
                <span :title="movie.name">
                  {{ movie.name }}
                </span>
              </div>
            </template>
            <template #description>
              <div class="ellipsis" style="font-size: 13px">
                <span :title="movie.intro">
                  {{ movie.intro }}
                </span>
              </div>
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
    <div>
      <a-pagination
        v-model:current="currentPage"
        show-quick-jumper
        :total="total"
        @change="onChangePage"
        pageSize="20"
      />
    </div>
  </div>
  <Save
    v-if="visible"
    :data="currentData"
    :type="type"
    @save="onSave"
    @close="visible = false"
  />
</template>

<script setup lang="ts">
import { watch } from "vue";

import { useRouter } from "vue-router";

import { getAllUser, idInfo, deleteUser } from "../../../api/user";
import { saveViewRecord } from "../../../api/viewRecord";
import { ref, onMounted } from "vue";
// import { getImageUrl } from "../../utils/funtion";
import Save from "./save.vue";
import { saved } from "@/api/stars";

const router = useRouter();
let searchValue = ref("");
const currentPage = ref(1);
const total = ref(1);
const users = ref([]);
const visible = ref(false);
const currentData = ref({});
const type = ref("add");
const similarMovies = ref([]);
const types = [
  { id: 0, name: "全部" },
  { id: 1, name: "音乐剧" },
  { id: 2, name: "战争" },
  { id: 3, name: "犯罪" },
  { id: 4, name: "浪漫" },
  { id: 5, name: "幻想" },
  { id: 6, name: "戏剧" },
  { id: 7, name: "音乐" },
  { id: 8, name: "科幻" },
  { id: 9, name: "动作" },
  { id: 10, name: "喜剧" },
  { id: 11, name: "传记" },
  { id: 12, name: "家庭" },
  { id: 13, name: "恐怖" },
  { id: 14, name: "短片" },
  { id: 15, name: "纪录片" },
  { id: 16, name: "黑色电影" },
  { id: 17, name: "动画" },
  { id: 18, name: "冒险" },
  { id: 19, name: "新闻" },
  { id: 20, name: "神秘" },
  { id: 21, name: "体育运动" },
  { id: 22, name: "历史" },
  { id: 23, name: "惊悚" },
  { id: 24, name: "西方" },
];
const onChangePage = (pageNumber: number) => {
  currentPage.value = pageNumber;
};
const getSimilar = (id) => {
  getSimilarMovies(id).then((resp) => {
    similarMovies.value = resp;
    console.log(similarMovies.value);
  });
};
function getImageUrl(url) {
  return new URL(url, import.meta.url).href;
}
const jumpToMovieDetail = async (data: any) => {
  getSimilarMovies(data.id).then((resp) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const pa = {
      movie_id: data.id,
      user_id: user.id,
    };
    saveViewRecord(pa);
    similarMovies.value = resp;
    console.log(similarMovies.value);
    localStorage.setItem("movie", JSON.stringify(data));
    localStorage.setItem("similarMovies", JSON.stringify(similarMovies.value));
    router.push({
      name: "moviesDetail",
      params: { movie: data, similarMovies: similarMovies.value },
    });
  });
};
const add = () => {
  console.log(visible.value);
  visible.value = true;
  type.value = "add";
  currentData.value = {};
};
const edit = (mpvie) => {
  visible.value = true;
  type.value = "edit";
  currentData.value = mpvie;
};
const show = (mpvie) => {
  visible.value = true;
  type.value = "show";
  currentData.value = mpvie;
};
const deleteById = (id) => {
  console.log("deleteById");
  deleteMovie(id).then(() => {
    message.success("删除成功");
    getAll(currentPage.value);
  });
};

const onSave = () => {
  console.log("resp");
  visible.value = false;
  getAll(currentPage.value);
};
// // 查看电影详情

// const jumpToMovieDetail = (data) => {
//   localStorage.setItem("movie", JSON.stringify(data));
//   router.push({ name: "dishesDetail", params: { movie: data } });
// };
const getAll = (page: number) => {
  getAllUser(page).then((resp) => {
    console.log(resp);
    users.value = resp.data;
    total.value = resp.total;
  });
};
watch(
  () => currentPage.value,
  (value) => {
    getAll(value);
  },
  { immediate: true }
);
</script>
<!-- scoped: 作用域，当前css只当前的组件生效-->
<style lang="less" scoped>
// 菜品卡片
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ant-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
:deep(.ant-card-body) {
  padding: 15px;
}
</style>
