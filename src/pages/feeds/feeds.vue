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
       <avatar avatar='https://cdn-icons-png.flaticon.com/512/3048/3048122.png' class='icon' />
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
      <ul class='list'>
        <li class='item' v-for="item in items" :key="item.id">
          <avatar :avatar='item.owner.avatar_url' :nickname='item.owner.login' class='icon' />
           <issues
           :nickname='item.owner.login'
           :stars='item.owner.stargazers_count'
           :avatar='item.owner.avatar_url'
            />
            <toggler @onToggle="toggle" />
    <div class="comments" v-if="shown">
      <ul class="comments-list">
        <li class="comments-item" v-for="n in 5" :key="n">
          <comment text = "Something" username = "Camil" />
        </li>
      </ul>
    </div>
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
import avatar from '../../components/avatar/avatar.vue'
import * as api from '../../api'

export default {
  name: 'feeds',
  components: {
    topbox,
    icon,
    StoryUserItem,
    toggler,
    comment,
    issues,
    avatar
  },
  data () {
    return {
      stories,
      shown: false,
      items: []
    }
  },
  props: {
    stars: Number
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<style lang="scss" src='./feeds.scss' scoped>

</style>
