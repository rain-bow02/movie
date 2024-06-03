<template>
  <div class="fontClass" @click="onClickLeft">
    <icon-font type="icon-zhankai-1" />返回
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const onClickLeft = () => {
  router.back(); //返回上一级
};
</script>
<style>
.fontClass {
  color: black;
  text-align: justify;
}
.fontClass:hover {
  color: blue;
  cursor: pointer;
}
</style>
