<template>
  <div class="paging">
    <div
      class="prev"
      :style="{ '--prevColor': prevColor, transition: 'all 0.1s' }"
      @click="handlePrev"
    ></div>
    <div class="page">
      <span>{{ currentPage }} / {{ pageCout }}</span>
    </div>
    <div
      class="next"
      :style="{ '--nextColor': nextColor }"
      @click="handleNext"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  size: {
    type: Number,
    default: 10,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(["next", "prev"]);
//总页数
const pageCout = computed(() => {
  return Math.ceil(props.total / props.size);
});
//动态绑定背景颜色 自定义属性

const prevColor = computed(() => {
  return props.currentPage == 1 ? "#D9D9D9" : "#A6A6A6";
});

const nextColor = computed(() => {
  return props.currentPage == pageCout.value ? "#D9D9D9" : "#A6A6A6";
});
//上一页
const handlePrev = () => {
  if (props.currentPage == 1) {
    return;
  }
  emit("prev");
};

//下一页
const handleNext = () => {
  if (
    props.currentPage == pageCout.value ||
    props.currentPage > pageCout.value
  ) {
    return;
  }
  emit("next");
};
</script>
<style scoped>
.prev {
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-right: 14px solid var(--prevColor);
  cursor: pointer;
}
.next {
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 14px solid var(--nextColor);
  cursor: pointer;
}
.page {
  font-size: 14px;
  padding: 0 10px;
  color: #8a96a8;
}
.paging {
  display: flex;
  align-items: center;
}
</style>
