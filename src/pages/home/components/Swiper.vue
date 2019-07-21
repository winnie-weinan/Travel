<template>
<!--撑开高度解决抖动-->
<div class="wrapper">
  <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt="I'm Slide 1">
    </swiper-slide>
    <!-- Optional controls 通过slot把数据传递给页面的组件-->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!--轮播左右箭头不需要删掉-->
    <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--<div class="swiper-button-next" slot="button-next"></div>-->
    <!--背景灰色小条去掉-->
    <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1609/47/0cfdc871ac183702.jpg_750x200_f6896acd.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/f4168ba20e0f5218ed83e743efd802b2.jpg_750x200_53edd3a0.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  /*scoped导致单独写样式无效，swiper组件去做显示的，所以使用样式穿透>>>*/
  .wrapper>>>.swiper-pagination-bullet-active
    background: #fff !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    /*图片宽高比：640/200=31.25，宽高比例始终保持在31.25%,高度相对于100%的宽度自动撑开31.25%*/
    padding-bottom: 26.67%
    background: #eee
    .swiper-img
      width :100%

</style>
