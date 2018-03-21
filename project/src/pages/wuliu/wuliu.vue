<template>
  <div class="wuliu_page">
    <header-top></header-top>
    <h2>物流查询工具</h2>
    <wuliusearch></wuliusearch>
    <wuliudetail></wuliudetail>
  </div>
</template>

<script>
import wuliusearch from '@/pages/wuliu/wuliusearch'
import wuliudetail from '@/pages/wuliu/wuliudetail'
import headerTop from '@/components/headerTop'

export default {
  components: {
    wuliusearch,
    wuliudetail,
    headerTop
  }
}
</script>

<style lang="scss">
  h2{
    text-align: center;
    margin: 10px 0;
  }
</style>
