<template>
  <v-dialog v-model="showDialog" width="auto">
    <v-card>
      <v-card-title class="text-lg px-3">{{ dialogTitle }}</v-card-title>
      <v-card-text class="px-3 pb-0">
        <slot></slot>
      </v-card-text>

      <template v-slot:actions>
        <div class="mr-1">
          <v-btn
            variant="outlined"
            class="border border-gray-300"
            @click="showDialog = false"
            >取消</v-btn
          >
          <v-btn variant="outlined" class="primary-btn2 ml-3" @click="showDialog = false"
            >确定</v-btn
          >
        </div>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup>
const showDialog = ref(false);
const dialogTitle = ref("");

const open = (title = "标题") => {
  dialogTitle.value = title;
  showDialog.value = true;
};

defineExpose({
  open,
});
</script>

<style lang="scss" scoped>
.v-card {
  padding: 8px 4px;
  min-width: 400px;
}
</style>
