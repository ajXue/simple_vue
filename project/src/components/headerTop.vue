<template>
  <div class="content_header">
    <el-breadcrumb separator="/" router>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    </el-breadcrumb>
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
</style>
