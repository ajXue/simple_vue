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
          验证码登录（待开发。。。）1
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style>
.loginContainer #loginWrap{position: absolute;top: 100px;left: 50%;width: 400px;margin-left:-200px;}
.el-tabs__nav{width: 100%;}
.el-tabs__item {width: 50%;text-align: center;}
</style>


<script>
  import "../../assets/pluds/particles.js"
  import axios from "axios"
  import qs from 'qs';

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
        if (this.loginForm.username == "") {
          alert("输入账号不能为空");
          return;
        } else if (!this.loginForm.username || this.loginForm.username == "root" || this.loginForm.username == "null" || this.loginForm.username == "undefined") {
          alert("输入账号名不规范");
          return;
        } else {
          this.submitHandler();
        }
      },
      submitHandler() {
        axios.post('http://localhost:8001/login', 
        {
          "username":this.loginForm.username.trim(), 
          "password": this.loginForm.password.trim()
        })
        .then((res) =>{
          console.log("------登录信息成功返回------" + JSON.stringify(res))
          console.log(res.data)
          if( res.data.code == "ok" ) {
            console.log(this)
            this.$router.push({path:'/content'})
          }else if (res.data.code = "error") {
            alert("账号或密码不正确");
          }else {
            alert("系统错误")
          }
        })
        .then((error)=>{
          console.log("------登录信息错误-------" + error);
        })
      },
      handleClick() {

      }
    }
  }
</script>
