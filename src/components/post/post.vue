<template>
  <div class="post">
    <div class="post__container">
      <h1 class="post__tile">Vue.js</h1>
      <p class="post__description">
        JavaScript framework for building interactive web applications ⚡
      </p>
      <div class="post__footer">
        <div class="icon">
          <icon name="star" />
          <span class="teg">Star</span>
        </div>
        <div class="rating">
          133
        </div>
        <div class="icon">
          <icon name="fork" />
          <span class="teg">Fork</span>
        </div>
        <div class="followers">
          433
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import { icon } from '../../icons'
export default {
  name: 'Post',
  components: {
    icon
  }
}
</script>

<style lang='scss' scoped src='./post.scss'>

</style>
