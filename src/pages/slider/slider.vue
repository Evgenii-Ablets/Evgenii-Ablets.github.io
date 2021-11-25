<template>
  <div class="progress">
    <progress />
  </div>
  <div class="avatar">
    <avatar avatar='https://cdn-icons-png.flaticon.com/512/3048/3048122.png' nickname='Joshua'></avatar>
  </div>
  <div class="button">
    <button />
  </div>
  
</template>

<script>
import avatar from '../../components/avatar/avatar.vue'
import progress from '../../components/progress/progress.vue'
import button from '../../components/button/button.vue'

export default {
  name: 'slider',
  components: {
   avatar,
   progress,
   button
  }
}
</script>
<style lang='scss' scoped src='./slider.scss'>

</style>
