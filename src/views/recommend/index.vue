<template>
  <div>
    <a-row :gutter="[60, 24]" style="margin: 5px -30px 10px -16px">
      <a-col :span="6" v-for="movie in movies" :key="movie.id">
        <a-card hoverable style="width: auto" @click="jumpToMovieDetail(movie)">
          <template #cover>
            <img
              alt="example"
              :src="
                '	http://localhost:5173/src/poster/' + movie.imdb_id + '.jpg'
              "
            />
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
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { getRecommend } from "../../api/movies";
import { ref, onMounted, watch } from "vue";
const router = useRouter();

import {
  getAllMovies,
  getMoviesByType,
  getSearchMovies,
  deleteMovie,
  getSimilarMovies,
  idInfo,
} from "../../api/movies";
const similarMovies = ref([]);
const movies = ref([{}]);
const jumpToMovieDetail = async (data: any) => {
  getSimilarMovies(data.id).then((resp) => {
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

onMounted(() => {
  const user_id = JSON.parse(localStorage.getItem("user")).id;
  getRecommend(user_id).then((resp) => {
    movies.value = resp;
  });
});
</script>
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
