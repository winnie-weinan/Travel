<template>
  <ul class="list">
    <!-- 修改循环前：<li class="item" v-for="item of letter"
        :key="key" @click="headleLtterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >{{key}}</li>，
    为了滑动字母表城市列表一起滑动-->
    <li class="item" v-for="item of letters"
        :key="item" @click="headleLtterClick"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    // 点击字母列表时，函数拿到一个对象：e
    headleLtterClick (e) {
      this.$emit('change', e.target.innerText)
      console.log(e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop // 获取A元素距离顶部的高度
        const touchY = e.touches[0].clientY - 47
        const index = Math.floor((touchY - startY) / 20) // 每个字母是20px,floor取整，当前手指滑动的位置
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
        // console.log('startY:' + startY + ' touchY:' + touchY+ ' index:' + index)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display: flex
    flex: 1
    flex-direction: column
    justify-content: center
    position: absolute
    right: 0
    top: .58rem
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      color: $bgColor
</style>
