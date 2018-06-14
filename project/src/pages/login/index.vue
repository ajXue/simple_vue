<template>
  <div class="loginContainer">
    <div id="particles-js"></div>
    <div id="loginWrap">
      <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="center">
        <el-tab-pane label="账号登录" name="first">
          <div id="loginForm">
            <el-form ref="loginForm" :model="loginForm" >
                <el-input v-model="loginForm.username" placeholder="请输入姓名"></el-input>
                <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
              <el-form-item style="text-align:center;margin-top:30px;">
                <el-button type="primary" @click="submit">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="验证码登录" name="second">
          11
        </el-tab-pane>
      </el-tabs>
      
      
    </div>
  </div>
</template>

<style>
/* .loginContainer{position: relative;width: 100%;height: 100%;} */
/* .loginContainer #particles-js{position: absolute;top: 0;left: 0;width: 100%;height: 100%;} */
.loginContainer #loginWrap{position: absolute;top: 100px;left: 50%;width: 400px;margin-left:-200px;}
.el-tabs__nav{width: 100%;}
.el-tabs__item {width: 50%;text-align: center;}
</style>


<script>
  import "../../assets/pluds/particles.js"
  import axios from "axios"
  import qs from 'qs';

//  import qs from 'qs'
  export default {
    data () {
      return {
        loginForm: {
          username: "",
          password: ""
        },
        activeName: "first"
      }
    },
    methods: {
      submit() {
        axios.post('http://localhost:8001/login', {"username":1, "password": 2})
          .then(function(res) {
            console.log("------登录信息成功返回------" + res)
          })
          .then(function(error) {
            console.log("------登录信息错误-------" + error);
          })
      },
      handleClick() {

      }
    }
  }
</script>
