<template>
  <avatar nickname='joshua_l'></avatar>
   <post />
</template>

<script>
import post from '../post/post.vue'
import avatar from '../avatar/avatar.vue'
export default {
  name: 'Issues',
  data () {
    return {
    }
  },
  components: {
    post,
    avatar
  }
}
</script>

<style lang='scss' scoped>
</style>
