<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
      <span
        v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
        class="no-redirect"
        >{{ item.meta.title }}</span
      >
      <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const levelList = ref([]);

function getBreadcrumb() {
  // only show routes with meta.title
  let matched = route.matched.filter((item) => item.meta && item.meta.title);
  const first = matched[0];
  // 判断是否为首页
  if (!isDashboard(first)) {
    matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
  }

  levelList.value = matched.filter((item) => item.meta && item.meta.title);
}
function isDashboard(route) {
  const name = route && route.name;
  if (!name) {
    return false;
  }
  return name.trim() === "Home";
}
function handleLink(item) {
  const { redirect, path } = item;
  if (redirect) {
    router.push(redirect);
    return;
  }
  router.push(path);
}

watchEffect(() => {
  // if you go to the redirect page, do not update the breadcrumbs
  if (route.path.startsWith("/redirect/")) {
    return;
  }
  getBreadcrumb();
});
getBreadcrumb();
</script>

<style lang="scss" scoped>
.app-breadcrumb {
  padding: 10px 40px;
}

.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
