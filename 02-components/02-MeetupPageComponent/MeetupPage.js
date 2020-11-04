import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

const API_URL = 'https://course-vue.javascript.ru/api';

export const MeetupPage = {
  name: 'MeetupPage',

  template: `
  <div>
    <meetup-view v-if="this.meetup" :meetup="this.meetup"/>
  </div>`,

  components: { MeetupView },

  data() {
    return {
      meetup: null
    }
  },

  mounted() {
    // Требуется получить данные митапа с API
    this.getMeetupData()
  },

  methods: {
    // Получение данных с API предпочтительнее оформить отдельным методом,
    // а не писать прямо в mounted()
    async getMeetupData() {
      this.meetup = await fetchMeetup(MEETUP_ID);
    },
  }
};
