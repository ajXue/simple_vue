<template>
  <el-row class="tac">
    <el-col :span="4">
      <el-menu defaultActive="2" class="el-menu-vertical-demo">
        <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-search"></i>
            <span>物流管理</span>
          </template>
          <el-menu-item index="1-1">物流查询</el-menu-item>
          <el-menu-item index="1-2">2</el-menu-item>
          <el-menu-item index="1-3">3</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-phone"></i>
            <span slot="title">导航二</span>
          </template>
          <el-menu-item index="2-1">1</el-menu-item>
          <el-menu-item index="2-2">1</el-menu-item>
          <el-menu-item index="2-3">1</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-loading"></i>
            <span>导航三</span>
          </template>
          <el-menu-item index="3-1">1</el-menu-item>
          <el-menu-item index="3-2">1</el-menu-item>
          <el-menu-item index="3-3">1</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航四</span>
          </template>
          <el-menu-item index="4-1">1</el-menu-item>
          <el-menu-item index="4-2">1</el-menu-item>
          <el-menu-item index="4-3">1</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<!--<script>-->
<!--import ElMenu from "../../node_modules/element-ui/packages/menu/src/menu.vue";-->

<!--export default {-->
  <!--components: {ElMenu}-->
<!--}-->
<!--</script>-->


