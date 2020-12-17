<template>
  <base-button :tag="tag" :block="block" :to="to" class="button_danger" v-on="$listeners"><slot/></base-button>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
  inheritAttrs: false,
  components: { BaseButton },
  name: 'DangerButton',

  props: {
    block: {
      type: Boolean,
    },
    tag: {
      type: String,
      default: 'button',
      validator: function (value) {
        return ['button', 'a', 'router-link'].indexOf(value) !== -1
      }
    },
    to: {
      type: String
    }
  }
};
</script>

<style scoped>
.button_danger {
  background-color: var(--white);
  border-color: var(--red);
  color: var(--red);
}

.button_danger:hover {
  border-color: var(--red-light);
}
</style>
