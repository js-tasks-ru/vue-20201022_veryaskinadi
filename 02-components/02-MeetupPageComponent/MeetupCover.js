export const MeetupCover = {
  template: `
    <div :style="{ '--bg-url': this.bgUrl }">
      <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
  
  props: {
    link: {
      type: String,
    },
  
    title: {
      type: String,
    }
  },

  computed: {
    bgUrl() {
      return this.link ? `url(${this.link})` : 'var(--default-cover)'
    }
  },
};
