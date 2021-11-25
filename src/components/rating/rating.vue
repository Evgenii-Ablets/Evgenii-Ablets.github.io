<template>
  <div class="c-rating">
    <p>{{ stars }}</p>
  </div>
</template>

<script>
export default {
  name: 'rating',
  setup () {
    return {}
  },
  props: {
    stars: {
      type: Number,
      required: true
    }
  }
}

</script>
<style lang="scss" scoped src="./rating.scss"></style>
