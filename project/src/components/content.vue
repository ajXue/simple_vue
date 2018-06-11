<template>
  <el-row class="tac fillcontain">
    <el-col :span="4" style="min-height: 100%; background-color: #324057;">
      <el-menu defaultActive="3" style="min-height: 100%;" background-color="#324057" active-text-color="#ffd04b" text-color="#fff"  router>
        <el-menu-item index="home"><i class="el-icon-menu"></i>首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-phone"></i>
            <span slot="title">管理详情</span>
          </template>
          <el-menu-item index="pageshow">欢迎</el-menu-item>
        </el-submenu>
        <el-submenu index="wuliu">
          <template slot="title">
            <i class="el-icon-search"></i>
            <span>物流管理</span>
          </template>
          <el-menu-item index="wuliu1">物流查询</el-menu-item>
          <el-menu-item index="wuliu2">2</el-menu-item>
          <el-menu-item index="wuliu3">3</el-menu-item>
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

<script>
import ElMenu from "../../node_modules/element-ui/packages/menu/src/menu.vue";

export default {
  components: {ElMenu}
}
</script>


