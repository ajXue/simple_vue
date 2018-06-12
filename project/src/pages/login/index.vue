<template>
  <div class="loginContainer">
    <div id="particles-js"></div>
    <div id="loginWrap">
      <el-tabs tab-position="center">
        <el-tab-pane label="账号登录" name="first">
          <div id="loginForm">
            <el-form ref="loginForm" :model="loginForm" >
                <el-input v-model="loginForm.username" placeholder="请输入姓名"></el-input>
                <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
              <el-form-item>
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
.loginContainer #loginWrap{position: absolute;top: 100px;left: 50%;width: 500px;margin-left:-250px;}
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
        }
      }
    },
    methods: {
      submit() {
        console.log(this.loginForm.username)
        console.log(this.loginForm.password)
//        var params = new URLSearchParams()
//        params.append("username",this.loginForm.username)
//        params.append("password",this.loginForm.password)
//        let postData = this.$qs.stringify({
//          username:1,
//          key2:2,
//          key3:3,
//        });
        axios.post('http://localhost:8001/login', {"username":1, "password": 2})
          .then(function(res) {
            console.log("------登录信息成功返回------" + res)
          })
          .then(function(error) {
            console.log("------登录信息错误-------" + error);
          })
      }
    }
  }
</script>
