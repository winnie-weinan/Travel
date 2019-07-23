<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities"
        :key="key" @click="headleLtterClick">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  methods: {
    // 点击字母列表时，函数拿到一个对象：e
    headleLtterClick (e) {
      this.$emit('change', e.target.innerText)
      console.log(e.target.innerText)
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
