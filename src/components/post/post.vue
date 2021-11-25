<template>
  <div class="post">
    <div class="post__container">
      <h1 class="post__tile">Vue.js</h1>
      <p class="post__description">
        JavaScript framework for building interactive web applications ⚡
      </p>
      <div class="post__footer">
        <postfooter />
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
  }
}
</script>

<style lang='scss' scoped src='./post.scss'>

</style>
