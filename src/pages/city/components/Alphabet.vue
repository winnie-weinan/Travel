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
      touchStatus: false,
      startY: 0,
      timer: null // 节流第一步
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
    // 生命周期钩子，页面的数据更新的时候，同时页面完成自己的渲染之后执行钩子
    // 初次渲染alphabet.vue使用city.vue里面的空对象，不显示任何东西，
    // city.vue ajax获取到数据后，city的值才发生变化，alphabet.vue才被渲染出来
    // 数据变化，alphabet.vue重新渲染，之后updated钩子执行，展示列表所有内容，可获取$refs['A'][0].offsetTop
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

    // 节流前
    // handleTouchMove (e) {
    //   if (this.touchStatus) {
    //     // 有钩子后删除const startY = this.$refs['A'][0].offsetTop // 获取A元素距离顶部的高度
    //     const touchY = e.touches[0].clientY - 47
    //     // 有钩子后替换this.startY   const index = Math.floor((touchY - startY) / 20)
    //     // 每个字母是20px,floor取整，当前手指滑动的位置
    //     const index = Math.floor((touchY - this.startY) / 20)
    //     if (index >= 0 && index < this.letters.length) {
    //       this.$emit('change', this.letters[index])
    //     }
    //     // console.log('startY:' + startY + ' touchY:' + touchY+ ' index:' + index)
    //   }
    // },
    // 不节流handleTouchMove执行频率过高
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 节流第二步：如果已经存在了，去除this.timer，否则创建一个timer,16ms间隔
        // 滑动字母后16ms内又点击了一次，会先清除上一次操作，重新执行下一次操作
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 29
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
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
