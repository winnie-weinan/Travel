<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  // 数据定义，结合第三行:options="swiperOption"，使得不自动轮播
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  // data () {
  //   return {
  //     iconList: [{
  //       id: '0001',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
  //       desc: '景点门票'
  //     }, {
  //       id: '0002',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
  //       desc: '水上乐园'
  //     }, {
  //       id: '0003',
  //       imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png',
  //       desc: '暑期大促'
  //     }, {
  //       id: '0004',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/f5/c4c9d9830404e602.png',
  //       desc: '室内乐园'
  //     }, {
  //       id: '0005',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
  //       desc: '动植物园'
  //     }, {
  //       id: '0006',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
  //       desc: '世纪公园'
  //     }, {
  //       id: '0007',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
  //       desc: '上海野生'
  //     }, {
  //       id: '0008',
  //       imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
  //       desc: '上海迪士尼'
  //     }, {
  //       id: '0009',
  //       imgUrl: 'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
  //       desc: '上海海昌'
  //     }]
  //   }
  // },
  computed: {
    pages () {
      const pages = []
      /* ajax前
      this.iconList.forEach((item, index) => { */
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .icons>>>.swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        ///*box-sizing:border-box*/
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
    .icon-desc
      position: absolute
      left:0
      right:0
      bottom:0
      height:.44rem
      line-height:.44rem
      color:$darkTextColor
</style>
