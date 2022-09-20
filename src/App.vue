<template>
  <div id="app">
    <el-container>
      <BdAside/>
      <router-view></router-view>
    </el-container>
  </div>
</template>
<script>

import BdAside from '@/components/BdAside.vue';
export default {
  name: "HomeView",
  components: {
    BdAside,
  },
  
};
</script>

<style lang="scss">
*{
padding:0 ;
margin: 0;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-header {
  height: 56px;
  background: rgba(255, 255, 255, 1);
  color: #333;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background: rgba(51, 65, 84, 1);
  color: rgba(192, 196, 204, 1);
}
.aside-top {
  width: 210px;
  height: 56px;
  text-align: center;
  > img {
    width: 147.13px;
    height: 29.27px;
    margin-top: 10px;
  }
  
}

.el-main {
  background: rgba(240, 243, 247, 1);
  color: #333;
}
</style>
