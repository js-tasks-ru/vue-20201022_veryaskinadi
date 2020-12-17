<template>
  <base-button :tag="tag" :block="block" :to="to" class="button_secondary" v-on="$listeners"><slot/></base-button>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
  inheritAttrs: false,
  components: { BaseButton },
  name: 'SecondaryButton',
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
.button_secondary {
  background-color: var(--white);
  border-color: var(--blue);
  color: var(--blue);
}

.button_secondary:hover {
  border-color: var(--blue-light);
}
</style>
