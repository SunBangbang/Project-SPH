<template>
  <div>
    <FsHeader/>
    <router-view></router-view>
    <FsFooter v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FsHeader from './components/Header'
import FsFooter from './components/Footer'

export default {
  name: 'App',
  components:{FsHeader,FsFooter},
  mounted(){
        //获取三级列表的数据
      this.$store.dispatch("categoryList");
  }
}
</script>

<style>

</style>
