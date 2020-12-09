<template>
  <div class="container">
    <meetups-view 
    @update:view="updateView" :view="query.view"
    @update:date="updateDate" :date="query.date"
    @update:participation="updateParticipation" :participation="query.participation"
    @update:search="updateSearch" :search="query.search" 
    />
  </div>
</template>

<script>
import MeetupsView from '../components/MeetupsView';
import { router } from '../router';


export default {
  name: 'PageWithQuery',
  components: { MeetupsView },

  data() {
    return {
      query: {
        view: router.currentRoute.query.view || "list",
        date: router.currentRoute.query.date || "all",
        participation: router.currentRoute.query.participation || "all",
        search: router.currentRoute.query.search || ""
      }
    }
  },

  computed: {
    queryDefault() {
      const queryDefault = {
        view: this.query.view,
        date: this.query.date,
        participation: this.query.participation,
        search: this.query.search
      }
      if (queryDefault.view === 'list') {
        delete queryDefault.view
      }
      if (queryDefault.date === 'all') {
        delete queryDefault.date
      }
      if (queryDefault.participation === 'all') {
        delete queryDefault.participation
      }
      if (queryDefault.search === '') {
        delete queryDefault.search
      }
      return queryDefault
    }
  },

  watch: {
    queryDefault: function(queryDefault){
      this.replace(queryDefault)
    }
  },

  beforeMount() {
    this.replace(this.queryDefault)
  },

  methods: {
    updateView: function(view) {
      this.query.view = view
    },
    updateDate: function(date) {
      this.query.date = date
    },
    updateParticipation: function (participation) {
      this.query.participation = participation
    }, 
    updateSearch: function (search) {
      this.query.search = search
    },
    replace: function(queryDefault) {
      router.replace({ query: queryDefault }).catch(err => {
        if (err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    }
  }
};
</script>

<style scoped></style>
