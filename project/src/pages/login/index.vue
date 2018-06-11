<template>
  <div class="loginContainer">
    <el-row>
      <el-col :span="12" :push="6">
        <el-form ref="loginForm" :model="loginForm" >
          <el-form-item label="姓名">
            <el-input v-model="loginForm.username" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
