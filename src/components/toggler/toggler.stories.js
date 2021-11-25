import toggler from './toggler.vue';
import icon from '../../icons/icon.vue';

export default {
  title: 'UI/toggler',
  component: { toggler },
  subcomponents: { icon },
  argTypes: {
    toggle: {},
  }
};

const template = (args) => ({
components: {
  toggler,
  icon
},
setup() {
  return { args };
},
template: `
<toggler v-bind="args" />
`
});
export const Default = template.bind({template});
