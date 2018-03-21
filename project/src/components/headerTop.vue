<template>
  <div class="content_header">
    <el-breadcrumb separator="/" router>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown class="content_dropdown">
      <span class="el-dropdown-link">
        <img src="@/assets/img/cat.jpg" class="avator" alt="">
        <i class="el-icon-arrow-down el-icon--right" style="vertical-align: middle"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>信息</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import ElMenu from "../../node_modules/element-ui/packages/menu/src/menu.vue";

export default {
  components: {ElMenu}
//  name: 'contentVue',
//  data () {
//    return {
//      msg: 'Welcome to Your Vue.js App'
//    }
//  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content_header{
  height: 60px;
  background-color: #EFF2F7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.content_dropdown{
  margin-right: 26px;
}
.avator{
  width: 36px;
  height:36px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  vertical-align: middle;
}
</style>
