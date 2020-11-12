/*
  Полезные функции по работе с датой можно описать вне Vue компонента
 */

export const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  template: `<div class="rangepicker">
    <div class="rangepicker__calendar">
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <button 
            class="rangepicker__selector-control-left"
            @click= "changeMonth(-1)"
          ></button>
          <div> {{ dateString }} </div>
          <button 
            class="rangepicker__selector-control-right"
            @click= "changeMonth(+1)"
          ></button>
        </div>
      </div>
      <div class="rangepicker__date-grid">
        <div 
          v-for="day in daysArray" 
          class="rangepicker__cell"
          :class="!day.active ? 'rangepicker__cell_inactive' : ''"
        >
          {{ day.date }}
          <a 
            class="rangepicker__event"
            v-for="meetup in day.meetups"
          >
            {{ meetup.title }}
          </a>
        </div>
      </div>
    </div>
  </div>`,

  data () {
    return {
      date: new Date(),
    }
  },
  // Пропсы
  props: {
    meetups: {
      type: Array,
      required: true,
    }
  },

  computed: {
    dateString() {
      var options = { month: 'long' };
      return this.date.toLocaleDateString(navigator.language, options) + ' ' + this.date.getFullYear()
    },
    daysArray() {
      const daysArray = []
      const lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate()
      const weekDay = this.date.getDay()
      const currentMonth = this.date.getMonth()
      const currentYear = this.date.getFullYear()
      const currentDate = new Date(this.date)
      currentDate.setMonth(currentMonth - 1)
      const previousMonth = currentDate.getMonth()
      const previousYear = currentDate.getFullYear()
      currentDate.setMonth(currentMonth + 1)
      const nextMonth = currentDate.getMonth()
      const nextYear = currentDate.getFullYear()

      // Заполняется календарь днями текущего месяца
      for (let date = 1; date <= lastDay; date++) {
        const month = currentMonth
        const year = currentYear
        const meetups = []
        for (let meetup of this.meetups) {
          const dateMeetup = new Date(meetup.date)
          if (date === dateMeetup.getDate() && month === dateMeetup.getMonth() && year === dateMeetup.getFullYear()) {
            meetups.push(meetup)
          }
        }
        daysArray.push({date, month, year, meetups, active: true})
      }
      // Заполняется календарь днями предыдущео месяца
      const lastDayPreviousMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate()
      for (let date = lastDayPreviousMonth; date > lastDayPreviousMonth - ((weekDay || 7)- 1); date--) {
        const month = previousMonth
        const year = previousYear
        const meetups = []
        for (let meetup of this.meetups) {
          const dateMeetup = new Date(meetup.date)
          if (date === dateMeetup.getDate() && month === dateMeetup.getMonth() && year === dateMeetup.getFullYear()) {
            meetups.push(meetup)
          }
        }
        daysArray.unshift({date, month, year, meetups, active: false })
      }
      // Заполняется календарь днями следующего месяца
      for (let date = 1; daysArray.length % 7 > 0; date++ ) {
        const month = nextMonth
        const year = nextYear
        const meetups = []
        for (let meetup of this.meetups) {
          const dateMeetup = new Date(meetup.date)
          if (date === dateMeetup.getDate() && month === dateMeetup.getMonth() && year === dateMeetup.getFullYear()) {
            meetups.push(meetup)
          }
        }
        daysArray.push({date, month, year, meetups, active: false })
      } 
      return daysArray
    },

    
  },

  mounted() {
    this.getFirstDayOfCurrentMonth()
  },

  methods: {
    changeMonth(interval) {
      this.date = new Date(this.date.setMonth(this.date.getMonth() + interval))

    },
    getFirstDayOfCurrentMonth() {
      let date = new Date()
      date.setDate(1)
      this.date = date
    },
  },

  // В качестве локального состояния требуется хранить что-то,
  // что позволит определить текущий показывающийся месяц.
  // Изначально должен показываться текущий месяц

  // Вычислимые свойства помогут как с получением списка дней, так и с выводом информации

  // Методы понадобятся для переключения между месяцами
};
