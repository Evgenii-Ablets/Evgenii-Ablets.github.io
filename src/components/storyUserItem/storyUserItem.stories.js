import storyUserItem from './storyUserItem.vue';
import avatar from '../avatar/avatar.vue';

export default {
  title: 'UI/storyUserItem',
  component: { storyUserItem },
  subcomponents: { avatar },
  argTypes: {
    name: {
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
    storyUserItem
  },
  data: () => {
    return { args }
  },

  template: `<storyUserItem :avatar='args.avatar' :username='args.name' />`
});

export const Default = template.bind({template});

Default.args = {
  avatar: "http://s1.iconbird.com/ico/0612/customicondesignoffice2/w256h2561339870331Man256.png",
  name: 'UserName'
}
