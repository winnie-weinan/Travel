<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
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
