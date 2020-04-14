<template>
  <div class="home">
    首页
  </div>
</template>

<script>
import getListService from '@/api/index'
export default {
  name: 'home',
  data () {
    return {}
  },
  created () {
    getListService.getList()
  }
}
</script>

<style lang="scss" scoped>
</style>
