<template>
  <div class="nav">
    <div class="nav_tab">
      <nav>
        <router-link :to='a.url' :key="index" v-for="(a,index) in Data">{{a.title}}</router-link>
      </nav>
    </div>
    <div class="nav-content">
      <!--路由插槽：路由跳转的位置-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navData from 'static/mock/nav.json'
export default {
  name: 'HomeNav',
  data () {
    return {
      Data: []
    }
  },
  methods: {
    init () {
      this.Data = navData.navData
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  nav_tab{
    width: 100%;
    height: 100%;
    overflow: hidden;
    float: left;
  }
    nav a{
      box-sizing: border-box;
      float: left;
      display: inline;
      width: 33.33%;
      height: 30px;
      color: #f2ffff;
      background: $bgColor;
      padding-left: 2px;
      line-height: 30px;
      font-size: 20px;
    }
  /* 下侧内容 */
  .content{
    flex: 1;
    padding: 20px;
  }
</style>
