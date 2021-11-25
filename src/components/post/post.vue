<template>
  <div class="post">
    <div class="post__container">
      <h1 class="post__tile">{{ title }}</h1>
      <p class="post__description" v-if="description">
        {{ description }}
      </p>
      <div class="post__footer">
        <postfooter :stars="stars" :forks='forks' />
      </div>
    </div>
  </div>
</template>

<script>
import postfooter from '../postfooter/postfooter.vue'
export default {
  name: 'Post',
  components: {
    postfooter
  },
  props: {
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

<style lang='scss' scoped src='./post.scss'>

</style>
