<template>
<div class="topbox">
  <topbox>
    <template #headline>
      <div class="logo">
        <h1>Gitogram /</h1>
      </div>
      <div class="icon">
        <icon name="home" />
      </div>
      <div class="photo">
       <img src="../../assets/Photo.png" alt="">
      </div>
      <div class="icon">
        <icon name="signout" />
      </div>
    </template>
    <template #content>
      <ul class="stories">
        <li class="stories-item" v-for="story in stories" :key="story.id">
          <story-user-item
          :avatar="story.avatar"
          :username="story.username"
          @onPress="handlePress(story.id)"
          />
        </li>
      </ul>
    </template>
  </topbox>
</div>
<div class="c-feed">
  <c-feed>
    <div class="issue">
      <issues />
    </div>
    <toggler @onToggle="toggle" />
    <div class="comments" v-if="shown">
      <ul class="comments-list">
        <li class="comments-item" v-for="n in 5" :key="n">
          <comment text = "Something" username = "Camil"  />
        </li>
      </ul>
    </div>
  </c-feed>
</div>

</template>

<script>
import StoryUserItem from '../../components/storyUserItem/storyUserItem.vue'
import { topbox } from '../../components/topbox'
import { icon } from '../../icons'
import stories from './data.json'
import { toggler } from '../../components/toggler'
import comment from '../../components/comment/comment.vue'
import issues from '../../components/body/issue.vue'

export default {
  name: 'feeds',
  components: {
    topbox,
    icon,
    StoryUserItem,
    toggler,
    comment,
    issues
  },
  data () {
    return {
      stories,
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon {
    color: black;
    width: 32px;
  }
</style>

<style lang="scss" src='./feeds.scss' scoped>

</style>
