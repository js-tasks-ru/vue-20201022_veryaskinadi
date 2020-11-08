function getDateOnlyString(date) {
  const YYYY = date.getFullYear();
  const MM = (date.getMonth() + 1).toString().padStart(2, '0');
  const DD = date.getDate().toString().padStart(2, '0');
  return `${YYYY}-${MM}-${DD}`;
}
export const MeetupInfo = {
  template: `
    <ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="dateFormated">{{ LocalDateFormated }}</time>
      </li>
    </ul>`,

  props: {
    organizer: {
      type: String,
      required: true,
    },
    place: {
      required: true,
      type: String,
    },
    date: {
      type: Date,
      required: true,
    }
  },

  computed: {
    dateFormated() { 
      const dateOnlyString = getDateOnlyString(this.date)
      return dateOnlyString
    },

    LocalDateFormated() {
      const localDate = this.date.toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      return localDate
    }
  }
};
