<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <van-list
      v-model:loading="listLoading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="waterfall-container">
        <div
          class="waterfall-column"
          v-for="(column, index) in columns"
          :key="index"
        >
          <div class="waterfall-item" v-for="item in column" :key="item.id">
            <v-card
              class="mx-auto"
              style="width: 100%"
              @click="openVideoDialog(item)"
            >
              <v-img :src="item.image" :height="item.imageHeight" cover></v-img>
              <div class="video-play-icon" v-if="item.videoUrl">
                <v-icon size="24" color="white">mdi-play-circle</v-icon>
              </div>

              <div class="top">
                {{ item.title }}
              </div>

              <div class="tag">
                <span>{{ item.tag }}</span>
              </div>

              <div class="bottom">
                <div class="left">
                  <v-avatar size="20">
                    <v-img alt="John" :src="item.authorAvatar"></v-img>
                  </v-avatar>
                  {{ item.author }}
                </div>
                <div class="right">
                  <v-icon size="13">mdi-thumb-up-outline</v-icon>
                  {{ item.likes }}
                </div>
              </div>
            </v-card>
          </div>
        </div>
      </div>

      <!-- 视频播放对话框 -->
      <v-dialog v-model="videoDialog" max-width="800">
        <v-card>
          <video
            v-if="currentVideo"
            controls
            autoplay
            style="width: 100%"
            :src="currentVideo"
          ></video>
        </v-card>
      </v-dialog>
    </van-list>
  </van-pull-refresh>
</template>

<script setup>
import { ref, computed } from "vue";
import { showToast } from "vant";
import waterfallMock from "@/assets/mock/waterfall.json";

const count = ref(0);
const loading = ref(false);
const listLoading = ref(false);
const finished = ref(false);
const items = ref(waterfallMock);
const currentPage = ref(1);
const pageSize = 6; // 每页加载的数据量

const columns = computed(() => {
  const columnCount = 2; // 设置列数
  const columns = Array.from({ length: columnCount }, () => []);

  items.value.forEach((item, index) => {
    columns[index % columnCount].push(item);
  });

  return columns;
});

const videoDialog = ref(false);
const currentVideo = ref(null);

// 视频播放弹窗
const openVideoDialog = (item) => {
  if (item.videoUrl) {
    currentVideo.value = item.videoUrl;
    videoDialog.value = true;
  }
};

// 下拉刷新
const onRefresh = () => {
  setTimeout(() => {
    showToast("刷新成功");
    loading.value = false;
    count.value++;
    // 重置数据
    currentPage.value = 1;
    items.value = waterfallMock.slice(0, pageSize);
    finished.value = false;
  }, 1000);
};

// 滚动加载更多
const onLoad = () => {
  setTimeout(() => {
    const startIndex = (currentPage.value - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const newItems = waterfallMock.slice(startIndex, endIndex);

    if (newItems.length > 0) {
      items.value = [...items.value, ...newItems];
      currentPage.value++;
    } else {
      finished.value = true; // 没有更多数据了
    }

    listLoading.value = false;
  }, 1000);
};
</script>

<style lang="scss" scoped>
.waterfall-container {
  display: flex;
  gap: 8px;
  padding: 8px;
  width: 100%;
}

.waterfall-column {
  flex: 1;
  max-width: calc(50% - 4px);
  display: flex;
  flex-direction: column;
  gap: 8px;

  .waterfall-item {
    width: 100%;

    .v-card {
      width: 100%;
      position: relative;

      .video-play-icon {
        position: absolute;
        top: 10px;
        right: 10px;
      }

      .top {
        padding: 8px;
        padding-bottom: 0;
        font-size: 15px;
        letter-spacing: 1px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .tag {
        padding: 4px 8px;

        span {
          color: #999;
          padding: 1px 4px;
          background-color: #f6f6f4;
          border-radius: 2px;
          font-size: 12px;
        }
      }

      .bottom {
        padding: 4px 8px 8px 8px;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #999;

        .left,
        .right {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .right {
          margin-top: 4px;
        }
      }
    }
  }
}
</style>
