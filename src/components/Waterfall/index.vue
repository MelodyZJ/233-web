<template>
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
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const items = ref([
  {
    id: 1,
    title: "[版本前瞻] 手游新版本预告",
    tag: "恐龙岛",
    image: "https://picsum.photos/300/200?random=1",
    imageHeight: "150px",

    author: "泡芙云",
    authorAvatar: "https://picsum.photos/200/300?random=1",
    likes: 10,
  },
  {
    id: 2,
    title: "落在捕梦网上的雨滴",
    tag: "来自小镇日常生活",
    image: "https://picsum.photos/300/200?random=2",
    imageHeight: "200px",
    videoUrl:
      "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4",
    author: "小雨雪",
    authorAvatar: "https://picsum.photos/200/300?random=2",
    likes: 88,
  },
  {
    id: 3,
    title: "三角洲行动：全面战场趣味性升级，夺旗合集上线",
    tag: "三角洲行动",
    image: "https://picsum.photos/300/200?random=3",
    imageHeight: "150px",
    author: "我是你的乖乖",
    authorAvatar: "https://picsum.photos/200/300?random=3",
    likes: 56,
  },
  {
    id: 4,
    title: "推荐地图-第三期",
    tag: "我的世界",
    image: "https://picsum.photos/300/200?random=4",
    imageHeight: "200px",
    author: "熊猫游戏",
    videoUrl:
      "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4",
    authorAvatar: "https://picsum.photos/200/300?random=4",
    likes: 100,
  },
  {
    id: 5,
    title: "LPL宫斗大换人时代已到来",
    tag: "英雄联盟",
    image: "https://picsum.photos/300/200?random=5",
    imageHeight: "200px",
    author: "陨落星辰",
    videoUrl:
      "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4",
    authorAvatar: "https://picsum.photos/200/300?random=5",
    likes: 43,
  },
  {
    id: 6,
    title:
      "明明早了类似的设定——元素化，也是自保无敌，且只能用霸气破解，现在尾田又故弄玄虚的整个不死不灭的设定看",
    tag: "来自小镇日常生活",
    image: "https://picsum.photos/300/200?random=6",
    imageHeight: "200px",
    author: "母鸡哇啦boy",
    authorAvatar: "https://picsum.photos/200/300?random=6",
    likes: 67,
  },
  {
    id: 7,
    title:
      "英雄名称受害者协会不过是一群b级c级的成员，他们甚至还因为英雄名称对协会抗议和不满，但是在灾害降临的时候，他们却义无反顾地挡在了灾害面前",
    tag: "来自小镇日常生活",
    image: "https://picsum.photos/300/200?random=7",
    imageHeight: "150px",
    author: "一只野生老王",
    authorAvatar: "https://picsum.photos/200/300?random=7",
    likes: 67,
  },
  {
    id: 8,
    title: "萌新在狂肝出魔弹奥后一发十连出了魔弹奥",
    tag: "来自小镇日常生活",
    image: "https://picsum.photos/300/200?random=8",
    imageHeight: "200px",
    author: "盗梦",
    authorAvatar: "https://picsum.photos/200/300?random=8",
    likes: 102,
  },
]);

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
