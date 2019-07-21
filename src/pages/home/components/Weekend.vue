<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <!--1px的底边框-->
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
  /*
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
        title: '上海必打卡',
        desc: '中西合璧，现代和传统各有各的精彩'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
        title: '上海城市观光',
        desc: '来这里寻找你所不认识的魔都 ，感受云端漫步，品味老上海风情，享受休闲时光'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/6f/2711e071838590.jpg_r_640x214_8f1ad9a1.jpg',
        title: '戏水清凉一夏',
        desc: '夏日戏水，玩“乐”无穷'
      }]
    }
  }
  */
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .weekend-title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
  .item-img
    width: 100%
  /*min-width: 0,ellipsis()超出范围的文字展示为省略号*/
  .item-info
    padding: .1rem
    text-align: left
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height:.4rem
      color: #ccc
      ellipsis()
</style>
