<template>
  <!--渐隐渐现动画效果-->
  <transition>
    <!--外部组件插入进来的插槽-->
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: opacity 1s
</style>
