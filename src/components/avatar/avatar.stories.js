import avatar from './avatar.vue';

export default {
  title: 'UI/avatar',
  component: { avatar },
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
    avatar
  },
  data: () => {
    return { args }
  },
  template: `
  <div class="avatar">
  <avatar :avatar='args.avatar' :nickname='args.name' />
  <p class="avatar__text">{{ nickname }}</p>
  </div>`
});

export const Default = template.bind({template});

Default.args = {
  avatar: 'http://s1.iconbird.com/ico/0612/customicondesignoffice2/w256h2561339870331Man256.png',
  name: 'UserName'
}
