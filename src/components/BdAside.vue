<template>
  <el-aside style="width: 210px">
    <div class="aside-top">
      <img src="../assets/Shape-Copy.png" alt="" />
    </div>
    <el-menu
      style="height: 100vh"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="  rgba(51, 65, 84, 1)"
      text-color="rgba(255, 255, 255, 1)"
      active-text-color="rgba(9, 109, 217, 1)"
    >
      <el-submenu index="1">
        <template slot="title">
          <span>首页</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <router-link  :to="{ path: '/about/mymain' }">
              <el-menu-item index="1-1">分析页</el-menu-item>
          </router-link>
          <router-link :to="{ path: '/home' }">
               <el-menu-item index="1-2">人员管理</el-menu-item>
          </router-link>
         
          <el-menu-item index="1-3">颜色自定义</el-menu-item>
          <el-menu-item index="1-4">活动管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>库存管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span>企业基因</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <span>列表页</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <span>引导页</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="6">
        <span slot="title">数据页</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
}
.el-aside {
  background: rgba(51, 65, 84, 1);
  color: rgba(192, 196, 204, 1);
}
.aside-top {
  text-align: center;
  > img {
    width: 147.13px;
    height: 29.27px;
    margin-top: 10px;
  }
}
</style>
