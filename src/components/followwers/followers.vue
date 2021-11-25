<template>
  <div class="followers">
    <p>{{ forks }}</p>
  </div>
</template>

<script>
export default {
  name: 'rating',
  props: {
    forks: {
      type: String,
      required: true
    }
  }
}

</script>
<style lang="scss" scoped src="./followers.scss"></style>
