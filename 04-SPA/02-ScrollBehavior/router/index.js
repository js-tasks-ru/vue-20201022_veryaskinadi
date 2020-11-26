import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export function scrollBehavior(to, from, savedPosition) {

  console.log('from :', from)
  console.log('to :', to)
  console.log('savedPosition :', savedPosition)

  if (savedPosition) {
    return savedPosition
  }

  if (to.hash) {
    return {
      selector: to.hash
    }
  }

  if (to.meta.saveScrollPosition && from.meta.saveScrollPosition) {
    return false
  }

  if (to.name === 'meetup-description' && from.name === 'meetups') {
    return { x: 0, y: 0 }
  }

  return { x: 0, y: 0}
}
export const router = new VueRouter({
  mode: 'history',

  base: '/04-SPA/02-ScrollBehavior',

  scrollBehavior,

  routes: [
    {
      path: '/',
      name: 'index',
      // alias: 'meeetups'
      // redirect: '/meetups',
      component: () => import('../views/MeetupsPage'),
    },
    {
      path: '/meetups',
      name: 'meetups',
      component: () => import('../views/MeetupsPage'),
    },
    {
      path: '/meetups/:meetupId(\\d+)',
      name: 'meetup',
      redirect: (to) => ({ name: 'meetup-description', params: to.params }),
      meta: {
        showReturnToMeetups: true,
        saveScrollPosition: true,
      },
      component: () => import('../views/MeetupPage'),
      children: [
        {
          path: '',
          alias: 'description',
          name: 'meetup-description',
          props: true,
          meta: {
            saveScrollPosition: true,
          },
          component: () => import('../views/MeetupDescriptionPage'),
        },
        {
          path: 'agenda',
          name: 'meetup-agenda',
          props: true,
          meta: {
            saveScrollPosition: true,
          },
          component: () => import('../views/MeetupAgendaPage'),
        },
      ],
    },
  ],
});
