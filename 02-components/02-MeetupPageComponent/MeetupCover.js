export const MeetupCover = {
  template: `
    <div v-if="this.link" :style="this.style">
      <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>
    <div v-else>
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
