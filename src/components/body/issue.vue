<template>
  <avatar :avatar="avatar" :nickname="nickname" ></avatar>
   <post :stars="stars" :forks='forks' :title="title" :description="description" />
</template>

<script>
import post from '../post/post.vue'
import avatar from '../avatar/avatar.vue'
export default {
  name: 'Issues',
  data () {
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
    },
    description: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    forks: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
