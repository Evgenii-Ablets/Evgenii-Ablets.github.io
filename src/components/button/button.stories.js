import button from './button.vue';

export default {
  title: 'UI/my-button',
  component: button,
  argTypes: {
    onClick: {}
  }
};

const template = (args) => ({
components: {
 xButton: button
},
setup() {
  return { args };
},
template: `
<x-button v-bind="args" />
`
});
export const Default = template.bind({template});
Default.args = {
  label: 'Follow',
};
