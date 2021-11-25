import postfooter from './postfooter.vue';
import icon from '../../icons/icon.vue';
import rating from '../rating/rating.vue';
import followers from '../followwers/followers.vue';
import '../postfooter/postfooter.scss'

export default {
  title: 'UI/postfooter',
  component: { postfooter },
  subcomponents: { icon, rating, followers },
  argTypes: {
    followers: {
      type: 'text'
    },
    rating: {
      type: 'text'
    }
  }
};

const template = (args, { argTypes }) => ({
  prors: Object.keys(argTypes),
  components: {
  postfooter,
  icon,
  rating,
  followers
},
setup() {
  return { args };
},
template: `
<div class="postfooter">
        <div class="icon_1">
          <icon name="star" />
          <span class="teg">Star</span>
        </div>
        <div class="rating">
          <rating :text='args.rating' />
        </div>
        <div class="icon_1">
          <icon name="fork" />
          <span class="teg">Fork</span>
        </div>
        <div class="followers">
          <followers :text='args.followers'/>
        </div>
  </div>
`
});
export const Default = template.bind({template});

Default.args = {
followers: 1424,
rating: 12331
}