import slider from './slider.vue';
import progress from '../../components/progress/progress.vue';
import avatar from '../../components/avatar/avatar.vue';
import button from '../../components/button/button.vue';


export default {
  title: 'UI/slider',
  component: { slider },
  subcomponents: { avatar, progress, button },
  argTypes: {
    name: {
      type: 'text'
    },
    avatar: {
      type: 'text'
    },
    onFinish: {
      action: 'onFinish'
    },
    onClick: {}
  }
};

const template = (args, { argTypes }) => ({
  prors: Object.keys(argTypes),
  components: {
    slider,
    avatar,
    xProgress: progress,
    xButton: button
  },
  data () {
    return { args }
  },

  template: `
  <x-progress @onFinish='args.onFinish' />
  <avatar :avatar='args.avatar' :nickname='args.name'></avatar>
<h1>Компонент слайдера</h1>
<p>Обратите внимание что необходимо реализовать только один компонент (данные могут быть тестовые).
 Саму страницу пока верстать не нужно. Компонент можно реализовать непосредственно в среде Storybook и мы используем его когда придет время.
  Естественно этот компонент состоит из других, более мелких компонентов.</p>
  <x-button v-bind="args" />
`
});

export const Default = template.bind({template});

Default.args = {
  avatar: "http://s1.iconbird.com/ico/0612/customicondesignoffice2/w256h2561339870331Man256.png",
  name: 'UserName',
  label: 'Follow',
}