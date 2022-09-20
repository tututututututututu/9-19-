<template>
  <el-container direction="vertical">
    <bd-header></bd-header>
    <bd-main></bd-main>
  </el-container>
</template>

<script>
import BdHeader from "@/components/BdHeader.vue";
import BdMain from "@/components/BdMain.vue";
export default {
  components: {
    BdHeader,
    BdMain,
  },
};
</script>

<style></style>
