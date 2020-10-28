import Vue from './vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение митапа для митапа
 * @param meetup - объект с описанием митапа (и параметром meetupId)
 * @return {string} - ссылка на изображение митапа
 */
function getMeetupCoverLink(meetup) {
  return `${API_URL}/images/${meetup.imageId}`;
}

/**
 * Словарь заголовков по умолчанию для всех типов элементов программы
 */
const agendaItemTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов элементов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

function getDateOnlyString(date) {
  const YYYY = date.getFullYear();
  const MM = (date.getMonth() + 1).toString().padStart(2, '0');
  const DD = date.getDate().toString().padStart(2, '0');
  return `${YYYY}-${MM}-${DD}`;
}

export const app = new Vue({
  el: '#app',

  data() {
    return {
      meetup: {}
    }
  },
  

  mounted() {
    // Требуется получить данные митапа с API
    this.getMeetupData()

  },

  computed: {
    meetupFormated() {
      return {
        cover: this.meetup.imageId
          ? getMeetupCoverLink(this.meetup)
          : undefined,
        date: new Date(this.meetup.date),
        localDate: new Date(this.meetup.date).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        dateOnlyString: getDateOnlyString(new Date(this.meetup.date)),
      }
    }
  },

  methods: {
    // Получение данных с API предпочтительнее оформить отдельным методом,
    // а не писать прямо в mounted()
    async getMeetupData() {
      let response = await fetch(API_URL + '/meetups/' + MEETUP_ID);
      this.meetup = await response.json();
      console.log(this.meetup)

      for(const agendaItem of this.meetup.agenda) {
        if (!agendaItem.title) {
          agendaItem.title = agendaItemTitles[agendaItem.type]
        }
        agendaItem.icon = 'icon' + '-' + agendaItemIcons[agendaItem.type] + '.' + 'svg'
      }
    },

  }
});
