<template>
  <div class="avatar">
    <img :src='avatar' alt='useravatar' class="avatar__logo" />
    <p class="avatar__text">{{ nickname }}</p>
  </div>
</template>

<script>
export default {
  name: 'avatar',
  setup () {
    return {}
  },
  props: {
    avatar: {
      type: String,
      require: true
    },
    nickname: {
      type: String,
      required: true
    }
  }
}

</script>

<style lang='scss' scoped src='./avatar.scss'>

</style>
