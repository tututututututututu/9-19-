<template>
  <el-header style="height: 56px" class="header">
    <div class="header-right">
      <i class="el-icon-search"></i>
      <img src="../assets/Fill 1.png" alt="" align="absmiddle">
      <div class="tt">
        <img src="../assets/Oval.png" alt="" align="absmiddle"/>
        <span>管理员</span>
      </div>
      <i class="el-icon-orange"></i>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header {
  .header-right {
    float: right;
    width: 200px;
    line-height: 3;
     i{
       margin:0px 10px 0px 10px;
     }
     img{
       margin-right: 10px;
     }
    .tt{
      display: inline-block;
    }
  }
}
</style>
