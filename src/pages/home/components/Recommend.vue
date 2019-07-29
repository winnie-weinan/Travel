<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
    <!--1px的底边框-->
    <!--ajax 前
    <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
    -->
    <router-link  tag="li"
                  class="item border-bottom"
                  v-for="item of list"
                  :key="item.id"
                  :to="'/detail/' + item.id">
      <img class="item-img" :src="item.imgUrl" alt="">
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
  /*
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title: '上海迪士尼乐园',
        desc: '251016条评论'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/10/10ba58a425abc2ada3.img.jpg_200x200_5823f5d2.jpg',
        title: '上海野生动物园',
        desc: '58823条评论'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/9f/fbff2a5302c0ce906ef9b64159730f89.water.jpg_200x200_87806940.jpg',
        title: '上海海洋水族馆',
        desc: '24239条评论'
      }]
    }
  }
  */
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    /*min-width: 0,ellipsis()超出范围的文字展示为省略号*/
    .item-info
      flex: 1
      padding: .1rem
      text-align: left
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height:.4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: orange
        padding: 0 .2rem
        border-radius: .06rem
        color: #eee
</style>
