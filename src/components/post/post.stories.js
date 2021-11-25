import postfooter from '../postfooter/postfooter.vue';
import post from './post.vue';

export default {
  title: 'UI/post',
  component: { post },
  subcomponents: { postfooter },
};

const template = () => ({
  components: {
  postfooter,
  post
},
template: `
<div class="post">
    <div class="post__container">
      <h1 class="post__tile">Vue.js</h1>
      <p class="post__description">
        JavaScript framework for building interactive web applications ⚡
      </p>
      <div class="post__footer">
        <postfooter />
      </div>
    </div>
  </div>
`
});
export const Default = template.bind({template});

