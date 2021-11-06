<template>
  <div class="avatar">
    <img src="../../assets/Camilr.png" alt="" class="avatar__logo"/>
    <p class="avatar__text">{{ nickname }}</p>
  </div>
</template>

<script>
export default {
  name: 'avatar',
  props: {
    nickname: String
  }
}
</script>

<style lang='scss' scoped src='./avatar.scss'>

</style>
