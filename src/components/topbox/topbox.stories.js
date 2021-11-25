import topbox from './topbox.vue';
import storyUserItem from '../storyUserItem/storyUserItem';
import avatar from '../avatar/avatar.vue';
import icon from '../../icons/icon.vue';
import '../../pages/feeds/feeds.scss'

export default {
  title: 'UI/topbox',
  component: { topbox },
  subcomponents: { avatar, storyUserItem, icon },
  argTypes: {
    username: {
      type: 'text'
    },
    avatar: {
      type: 'text'
    }
  }
};

const template = (args, { argTypes }) => ({
  prors: Object.keys(argTypes),
  components: {
    topbox,
    avatar,
    storyUserItem,
    icon
  },
  data: () => {
    return { args }
  },

  template: `
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
         <avatar avatar='https://cdn-icons-png.flaticon.com/512/3048/3048122.png' class="icon" />
        </div>
        <div class="icon">
          <icon name="signout" />
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="(story, i) in 6" :key="i">
            <story-user-item
            :avatar="args.avatar"
            :username="args.username"
            />
          </li>
        </ul>
      </template>
    </topbox>
`
});

export const Default = template.bind({template});

Default.args = {
  avatar: "http://s1.iconbird.com/ico/0612/customicondesignoffice2/w256h2561339870331Man256.png",
  username: 'UserName'
}
