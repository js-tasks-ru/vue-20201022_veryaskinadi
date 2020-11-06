export const MeetupCover = {
  template: `
    <div class="meetup-cover" v-if="link" :style="style">
      <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>
    <div class="meetup-cover" v-else>
      <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>
  `,
  
  props: {
    link: {
      type: String,
    },
  
    title: {
      type: String,
    }
  },

  computed: {
    style() {
      return  { '--bg-url': `url(${this.link})` } 
    }
  },
};
