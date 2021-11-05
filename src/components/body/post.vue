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
          <span>Star</span>
        </div>
        <div class="rating">
          13354
        </div>
        <div class="icon">
          <icon name="fork" />
          <span>Fork</span>
        </div>
        <div class="followers">
          4333545
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

<style scoped>
* {
  box-sizing: border-box;
}

.post__container {
  padding: 20px;
}
h1 {
  margin: 0;
}
.post__description, .post__tile {
  text-align: left;
}
.post__footer {
  display: flex;
  border: 1px solid #1B1F2326;
  border-radius: 4px;
  margin-top: 32px;
}
.rating, .followers {
  border: 1px solid #1B1F2326;
}
.icon {
  display: flex;
  margin-inline: 5px;
  border: 1px solid #1B1F2326;
}
</style>
