<template>
  <el-form ref="form" :model="form">
    <el-row>
      <el-col :span="4" :offset="3">
        <el-form-item>
          <el-select v-model="form.pinpai" placeholder="物流品牌">
            <el-option label="顺风" value="shunfeng"></el-option>
            <el-option label="申通" value="shentong"></el-option>
            <el-option label="EMS" value="ems"></el-option>
            <el-option label="韵达" value="yunda"></el-option>
            <el-option label="圆通" value="yuantong"></el-option>
            <el-option label="中通" value="zhongtong"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item>
          <el-input v-model="form.number" placeholder="请输入物流单号"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="2">
        <el-form-item>
          <el-button type="primary" @click="search()">查询</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import axios from 'axios'
import bus from '@/assets/eventBus.js'

export default {
  data () {
    return {
      form: {
        pinpai: '',
        number: ''
      }
    }
  },
  methods: {
    search (){
      let url = "http://localhost:8001/query";
      let pinpai = this.form.pinpai;
      let number = this.form.number;
      axios.get(url+'?pinpai='+pinpai+"&number="+number).
        then(function (res) {
          let wuliuData = res.data;
          if( wuliuData.message == "ok" ) {
            bus.$emit('test', wuliuData)
          } else {
            console.log('物流出错！');
            bus.$emit('test', '')
          }
      })
    }
  }
}
</script>

