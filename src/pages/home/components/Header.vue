<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="./city">
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  /*@import '../../../assets/styles/varibles.styl'
  @import '~@/assets/styles/varibles.styl' build/webpack.base.con.js中
  第34行设置简略文件路径别名：styles*/
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight /* .86em:  1rem=html reset.css 中font-size=50px，简化了尺寸计算 二倍屏86px*/
    background:$bgColor
    color:#fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-style: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top .12rem
      margin-left .2rem
      padding-left .2em
      background: #fff
      border-radius: .1rem
      color:#ccc
  .header-right
      width: 1.24rem
      float: right
      text-align:center
      color: #fff
      .arrow-icon
        margin-left:-.04rem
        font-size: .24rem
</style>
