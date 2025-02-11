<template>
  <div class="moreProducts-container">
    <div class="top">
      <div class="left">
        <div class="left-title">线棒材轧制数字化系统简介</div>
        <div class="left-content">
          <p>
            线棒材轧制数字化是中冶赛迪长材板块数字化转型的核心系统，
            该系统包含铸轧温度演变模块、全线温度演变模块、孔型轧制计算模块、
            减定径计算模块、组织性能预报模块、钢铁数据库模块等。其中温度演变计算、
            轧制计算、孔型设计等一键计算，大幅提高设计效率，
            并可通过组织性能预报模块打通产品与产线之间数据联通，
            为客户提供一站式设计到生产服务，提升核心技术竞争力。
          </p>

          <p>
            目前该系统已经应用于
            宝钢、宝武重钢、永锋、新兴铸管、攀长钢、徐钢、台湾烨兴
            等几十个海内外工程项目，为客户提高产品质量、提高生产效率、
            降低生产成本的同时，助力行业数字化转型升级。
          </p>

          <p>
            线棒材轧制数字化系统研发团队致力于共创数字化及智能化生态，
            共建设计及生产数字化平台、共用设计及生产工业化大数据，
            共享数字化创新成果。
          </p>
        </div>
      </div>
      <div class="right">
        <div class="right-title">
          <img src="@/assets/icons/contact.png" alt="联系方式" />
          <span>联系方式</span>
        </div>
        <div class="right-content">
          <div class="item" v-for="(item, index) in contactList" :key="index">
            <span class="lable">{{ item.lable }}</span>
            <span class="value">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-title">
        <img src="@/assets/icons/rocket.png" alt="产品更新动态" />
        <span>产品更新动态</span>
      </div>
      <div class="bottom-content">
        <div class="item">
          <div class="item-title">
            <span class="version">1.0.0</span>
            <span>&nbsp;版本更新</span>
            <span class="ml-5 text-sm text-grayB3B3B3">2024/12/30</span>
          </div>
          <div class="item-list" v-for="(item, index) in 3" :key="index">
            01 优化水冷模块稳定性
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const contactList = ref([
  { lable: "联络公司", value: "中冶赛迪技术研究中心有限公司" },
  { lable: "联络人", value: "周民" },
  { lable: "邮政编码", value: "400000" },
  { lable: "联系电话", value: "02368484482" },
  { lable: "联络地址", value: "重庆市渝北区汇金路11号" },
]);
</script>

<style lang="scss" scoped>
.moreProducts-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - $base-main-padding * 2 - $top-header-height - 10px);
  gap: 20px;

  .top {
    flex: 3;
    display: flex;
    gap: 20px;

    .left {
      flex: 3;
      background:
        linear-gradient(
          to bottom right,
          rgba(255, 255, 255, 1),
          rgba(255, 255, 255, 0.5)
        ),
        url("@/assets/imgs/more-product.png") no-repeat right / cover;

      .left-title {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #0c5fff;
      }

      .left-content {
        p {
          margin-bottom: 20px;
          line-height: 1.5;
          color: #53606d;
          font-size: 15px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    .right {
      flex: 2;

      .right-content {
        height: 100%;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .item {
          .lable {
            display: inline-block;
            width: 100px;
            color: #8d90a5;
          }

          .value {
            color: #363f4d;
          }
        }
      }
    }
  }

  .bottom {
    flex: 2;

    .bottom-content {
      margin-top: 20px;

      .item {
        border-radius: 4px;
        border: 1px solid #ededed;
        padding: 15px 20px;

        .item-title {
          color: #0c5fff;
          margin-bottom: 10px;

          .version {
            position: relative;
            margin-left: 15px;
            font-size: 18px;

            &::before {
              content: "";
              width: 8px;
              height: 8px;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              border-radius: 50%;
              background-color: #0c5fff;
            }
          }
        }

        .item-list {
          color: #62686a;
          font-size: 14px;
          margin-top: 5px;
        }
      }
    }
  }

  .left,
  .right,
  .bottom {
    border-radius: $base-border-radius;
    background-color: #fff;
    padding: 25px 30px;
    box-shadow: $box-shadow;
  }

  .right-title,
  .bottom-title {
    display: flex;
    align-items: center;
    font-size: 18px;

    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
}
</style>
