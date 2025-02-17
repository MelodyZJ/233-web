<template>
  <div class="home-container">
    <!-- 顶部窗口 -->
    <v-window v-model="windowValue" show-arrows="hover" class="v-window">
      <v-window-item v-for="(item, index) in windowList" :key="index">
        <div class="window">
          <div class="left">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
            <div class="detail"></div>
            <div class="footer">
              <v-btn
                class="footer-btn"
                size="x-large"
                color="#3b73f0"
                @click="handleClick"
              >
                点击进入&nbsp;
                <v-icon icon="mdi-arrow-right"></v-icon>
              </v-btn>
            </div>
          </div>
          <div class="right">
            <img src="@/assets/imgs/personWeb.png" alt="" class="right-img" />
          </div>
        </div>
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const windowValue = ref(0);

// 跳转到个人网页
const handleClick = () => {};

const windowList = reactive([
  {
    title: "主页",
    desc: "好日子在后头呢，但人得往前走。",
  },
  {
    title: "我才是主页",
    desc: "“给你加薪了哈！”，食人族向正在向被煮的我说。",
  },
]);

// 模块卡片数据
const modeCardList = reactive([
  {
    title: "个人分享",
    desc: "我的日常记录，平时所想、记录旅游、摄影…",
    path: "/share",
  },
  {
    title: "项目&文件",
    desc: "设计及开发项目总结，不限于开发完成的项目。",
    path: "/product",
  },
  {
    title: "技术交流",
    desc: "站在设计的角度去看开发问题。",
    path: "/communication",
  },
]);

// 点击卡片
const handleClickToCard = (path) => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
.home-container {
  box-shadow: $box-shadow;

  .v-window {
    height: 460px;
    border-radius: 12px;

    .window {
      display: flex;
      height: 460px;
      background-color: var(--theme-card);
      padding: 30px;
      transition: background-color 0.3s ease;

      .left {
        flex: 2;
        display: flex;
        flex-direction: column;

        .title {
          font-size: 36px;
          font-weight: bold;
          color: var(--fontColorBasic);
          transition: color 0.3s ease;
        }

        .desc {
          margin-top: 20px;
          color: var(--fontColorSecond);
          transition: color 0.3s ease;
        }

        .detail {
          margin-top: 70px;
          color: var(--fontColorBottom);
          transition: color 0.3s ease;
        }

        .footer {
          position: absolute;
          bottom: 30px;

          .footer-btn {
            border-radius: 50px;
          }
        }
      }

      .right {
        flex: 3;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #efc596;
        border-radius: 12px;

        .right-img {
          width: 300px;
        }
      }
    }
  }

  .footer {
    margin-top: 50px;

    .title {
      font-size: 24px;
      font-weight: 700;
      padding-bottom: 30px;
      color: var(--fontColorBasic);
      transition: all 0.3s;
    }

    .footer-box {
      display: flex;

      .data {
        flex: 1;

        .data-one,
        .data-two {
          padding-bottom: 20px;

          .num {
            font-size: 48px;
            font-weight: 700;
            line-height: 1.4;
            color: var(--fontColorBasic);
            transition: all 0.3s;
          }

          .text {
            font-size: 14px;
            color: var(--fontColorSecond, #3b3948);
            transition: all 0.3s;
          }
        }
      }

      .card-box {
        flex: 3;
        display: flex;
        gap: 20px;

        .card-item {
          flex: 1;
          position: relative;
          height: 200px;
          background-color: var(--theme-card);
          border-radius: 15px;
          padding: 20px;
          transition: all 0.3s ease;

          .title {
            font-size: 18px;
            font-weight: 700;
            padding-bottom: 25px;
            color: var(--fontColorBasic);
            transition: all 0.3s ease;
          }

          .desc {
            color: var(--fontColorBottom);
          }

          .footer-btn {
            position: absolute;
            bottom: 20px;
            right: 20px;
          }
        }
      }
    }
  }
}
</style>
