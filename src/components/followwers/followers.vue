<template>
  <div class="followers">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'rating',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}

</script>
<style lang="scss" scoped src="./followers.scss"></style>
