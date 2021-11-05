<template>
  <avatar nickname='joshua_l'></avatar>
   <post />
   <issueslist />
</template>

<script>
import post from './post.vue'
import avatar from './avatar.vue'
export default {
  name: 'Issues',
  data () {
    return {
    }
  },
  components: {
    post,
    avatar
  }
}
</script>

<style scoped>

</style>
