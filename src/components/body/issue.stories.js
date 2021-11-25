import avatar from '../avatar/avatar.vue';
import post from '../post/post.vue';
import issue from './issue.vue';

export default {
  title: 'UI/issue',
  component: { issue },
  subcomponents: { post, avatar },
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
  issue,
  post,
  avatar
},
data: () => {
  return { args }
},
template: `
<avatar :avatar='args.avatar' :nickname='args.name'></avatar>
   <post />
`
});
export const Default = template.bind({template});
Default.args = {
  avatar: 'http://s1.iconbird.com/ico/0612/customicondesignoffice2/w256h2561339870331Man256.png',
  name: 'UserName'
}
