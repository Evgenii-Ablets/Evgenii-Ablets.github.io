<template>
<div class="topbox">
  <topbox>
    <template #headline>
      <div class="sitename">
        <h1>Gitogram /</h1>
      </div>
      <div class="icon">
        <icon name="home" />
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
    <toggler />
  </div>
</template>

<script>
import StoryUserItem from '../../components/storyUserItem/storyUserItem.vue'
import { topbox } from '../../components/topbox'
import { icon } from '../../icons'
import stories from './data.json'
import { toggler } from '../../components/toggler'

export default {
  name: 'feeds',
  components: {
    topbox,
    icon,
    StoryUserItem,
    toggler
  },
  data () {
    return {
      stories
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon {
    color: green;
    width: 20px;
    margin-left: 90%;
  }

  .sitename {
    display: flex;
  }
</style>

<style lang="scss" src='./feeds.scss' scoped>

</style>
