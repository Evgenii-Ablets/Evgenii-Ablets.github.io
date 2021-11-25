<template>
  <div class="c-button">
    <button class='button' @click="onClick" >{{ label }}</button>
</div>
</template>
<script>

export default {
   props: {
    label: {
      type: String,
      required: true,
      }
    },
    emits: ['click'],
  methods: {
    onClick () {
        this.$emit('click')
      }
  }
}
</script>
<style lang='scss' scoped src='./button.scss'>

</style>
