<template>
  <div>
    <a-menu mode="inline" :open-keys="openKeys" :inlineCollapsed="false">
      <a-menu-item :key="'/movies'">
        <router-link to="movies">热门电影</router-link>
      </a-menu-item>

      <a-menu-item :key="'/MoButton'">
        <router-link to="MoButton">推荐电影</router-link>
      </a-menu-item>

      <a-sub-menu :key="'/Icon'" title="用户记录">
        <a-menu-item :key="'/Letter'">
          <router-link to="Letter">收藏记录</router-link>
        </a-menu-item>

        <a-menu-item :key="'/MoButton'">
          <router-link to="MoButton">浏览记录</router-link>
        </a-menu-item>

        <a-menu-item :key="'/MoButton'">
          <router-link to="MoButton">评价记录</router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item :key="'/Breadcrumb'">
        <router-link to="Breadcrumb">面包屑</router-link>
      </a-menu-item>

      <a-menu-item :key="'/Dropdown'">
        <router-link to="Dropdown">下拉菜单</router-link>
      </a-menu-item>

      <a-menu-item :key="'/Steps'">
        <router-link to="Steps">步骤条</router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import {
  MailOutlined,
  QqOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import type { MenuProps } from "ant-design-vue";
export default defineComponent({
  components: {
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const selectedKeys = ref<string[]>(["1"]);
    const openKeys = ref<string[]>(["sub1"]);
    const handleClick: MenuProps["onClick"] = (e) => {
      console.log("click", e);
    };
    const titleClick = (e: Event) => {
      console.log("titleClick", e);
    };
    watch(openKeys, (val) => {
      console.log("openKeys", val);
    });
    return {
      selectedKeys,
      openKeys,

      handleClick,
      titleClick,
    };
  },
});
</script>

<style scoped></style>
