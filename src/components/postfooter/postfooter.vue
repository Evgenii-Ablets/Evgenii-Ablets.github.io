<template>
  <div class="postfooter">
        <div class="icon_1">
          <icon name="star" />
          <span class="teg">Star</span>
        </div>
        <div class="rating">
          <rating :stars="stars" />
        </div>
        <div class="icon_1">
          <icon name="fork" />
          <span class="teg">Fork</span>
        </div>
        <div class="followers">
          <followers :forks='forks' />
        </div>
  </div>
</template>

<script>
import { icon } from '../../icons'
import rating from '../rating/rating.vue'
import followers from '../followwers/followers.vue'
export default {
  name: 'postfooter',
  components: {
    icon,
    rating,
    followers
  },
  props: {
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    }
  }
}
</script>
<style lang='scss' scoped src='./postfooter.scss'>

</style>
