<template>
  <div>
    <a-menu mode="inline" :open-keys="openKeys" :inlineCollapsed="false">
      <a-menu-item :key="'/movies'">
        <router-link to="movies">热门电影</router-link>
      </a-menu-item>

      <a-menu-item :key="'/recommend'">
        <router-link to="recommend">推荐电影</router-link>
      </a-menu-item>

      <a-sub-menu :key="'/Icon'" title="用户中心">
        <a-menu-item :key="'/personal'">
          <router-link to="personal">个人中心</router-link>
        </a-menu-item>
        <a-menu-item :key="'/stars'">
          <router-link to="stars">收藏记录</router-link>
        </a-menu-item>

        <a-menu-item :key="'/viewRecord'">
          <router-link to="viewRecord">浏览记录</router-link>
        </a-menu-item>

        <a-menu-item :key="'/rating'">
          <router-link to="rating">评价记录</router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu :key="'/system'" title="系统管理">
        <a-menu-item :key="'/user'">
          <router-link to="user">用户管理</router-link>
        </a-menu-item>
        <a-menu-item :key="'/role'">
          <router-link to="role">角色管理</router-link>
        </a-menu-item>
        <a-menu-item :key="'/permission'">
          <router-link to="permission">角色权限管理</router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu :key="'/movie'" title="电影信息管理">
        <a-menu-item :key="'/movieManager'">
          <router-link to="movieManager">电影管理</router-link>
        </a-menu-item>
        <a-menu-item :key="'/movieTypeManager'">
          <router-link to="movieTypeManager">电影类别管理</router-link>
        </a-menu-item>
      </a-sub-menu>
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
