<template>
  <avatar></avatar>
   <post />
</template>

<script>
import post from '../post/post.vue'
import avatar from '../avatar/avatar.vue'
export default {
  name: 'Issues',
  setup () {
    return {}
  },
  components: {
    post,
    avatar
  },
  props: {
    nickname: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      require: true
    },
    stars: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
