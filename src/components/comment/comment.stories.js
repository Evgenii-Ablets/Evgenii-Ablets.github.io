import comment from './comment.vue';
import toggler from '../toggler/toggler.vue';
import icon from '../../icons/icon.vue';

export default {
  title: 'UI/comment',
  component: { comment },
  subcomponents: { icon, toggler },
  argTypes: { 
    show: {
      control: {
        type: 'boolean'
      }
    },
    toggle: {},
    username: {
      type: 'string'
    },
    text: {
      type: 'string'
    }
  }
};

const template = (args, { argTypes }) => ({
  prors: Object.keys(argTypes),
  components: {
  comment,
  toggler,
  icon
},
setup() {
  return { args }
},

template: `
<toggler @onToggle="toggle" />
    <div class="comments" v-if="args.show">
      <ul class="comments-list">
        <li class="comments-item" v-for="n in 5" :key="n">
          <comment :text = "args.text" :username = "args.username" />
        </li>
      </ul>
    </div>
`
});
export const ShowIssues = template.bind({});

ShowIssues.args = {
  username: 'John',
  text: 'Something interesting.',
  show:true
  };
 