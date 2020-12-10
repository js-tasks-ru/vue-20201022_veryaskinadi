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

export default {
  name: 'PageWithQuery',
  components: { MeetupsView },

  data() {
    return {
      query: {
        view: this.$route.query.view || "list",
        date: this.$route.query.date || "all",
        participation: this.$route.query.participation || "all",
        search: this.$route.query.search || ""
      }
    }
  },

  computed: {
    queryRoute() {
      return this.$route.query
    }
  },

  watch: {
    queryRoute(query) {
      this.query.view = query.view || 'list'
      this.query.date = query.date || 'all'
      this.query.participation = query.participation || 'all'
      this.query.search = query.search || ''
    }
  },

  methods: {
    updateView: function(view) {
      this.replace({view})
    },
    updateDate: function(date) {
      this.replace({date})
    },
    updateParticipation: function (participation) {
      this.replace({participation})
    }, 
    updateSearch: function (search) {
      this.replace({search})
    },
    replace: function(query) {
      const routerQuery = {
        date: this.$route.query.date,
        participation: this.$route.query.participation,
        search: this.$route.query.search,
        view: this.$route.query.view,
      }
      
      Object.assign(routerQuery, query)

      if (routerQuery.view === 'list') {
        routerQuery.view = undefined
      }
      if (routerQuery.date === 'all') {
        routerQuery.date = undefined
      }
      if (routerQuery.participation === 'all') {
        routerQuery.participation = undefined
      }
      if (routerQuery.search === '') {
        routerQuery.search = undefined
      }

      this.$router.replace({ query: routerQuery }).catch(error => {
        if (error.name !== 'NavigationDuplicated') {
          throw error
        }
      });
    }
  }
};
</script>

<style scoped></style>
