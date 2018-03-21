<template>
  <div class="show_page">
    <h1 style="text-align: left;padding-left: 20px;margin-bottom: 0px">物流显示</h1>
    <div class="cardWrap">
      <el-card class="box-card" v-for="(item, index) in message.data" v-bind:key="index">
        <p style="color: pink">{{item.time}}</p>
        <p style="font-weight: bold">{{item.context}}</p>
      </el-card>
    </div>
  </div>
</template>

<script>
import bus from '@/assets/eventBus.js'

export default {
  data () {
    return {
      message: ''
    }
  },
  mounted() {
    var self = this;
    bus.$on('test',function (msg) {
      self.message = msg;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  text-align: left;
}
.cardWrap{height: 400px;overflow: auto}

</style>
