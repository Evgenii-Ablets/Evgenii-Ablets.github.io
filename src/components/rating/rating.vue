<template>
  <div class="c-rating">
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
<style lang="scss" scoped src="./rating.scss"></style>
