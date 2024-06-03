<script setup></script>

<template>
  <div id="app">
    <ConfigProvider
      :locale="zhCN"
      :IconConfig="{
        scriptUrl: '//at.alicdn.com/t/c/font_4035907_o5hxqjo7dq.js',
      }"
    >
      <div class="app">
        <div class="left">
          <router-view name="menu" />
        </div>
        <div class="right">
          <router-view />
        </div>
      </div>
    </ConfigProvider>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 1rem;
  max-width: 960px;
}
.app {
  display: flex;
  display: flex;
  flex-direction: row-reverse;
}
.left {
  width: 15%;
  position: fixed; /* 设置固定定位 */
  top: 0; /* 距离顶部0像素 */
  left: 0; /* 距离左侧0像素 */
  background-color: #333; /* 背景颜色 */
  color: white; /* 文字颜色 */
  z-index: 1000; /* 确保菜单在其他内容之上 */
}
.right {
  width: 87%;
  /* float: right; */
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
