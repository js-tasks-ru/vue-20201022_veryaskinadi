<template>
  <AppInput v-on="$listeners" v-bind="$attrs" :type="type">
    
    <!-- Так можно передать все слоты в дочерний компонент -->
    <template v-for="slot of Object.keys($slots)" v-slot:[slot]>
      <slot :name="slot" />
    </template>
  </AppInput>
</template>

<script>
import AppInput from './AppInput';

export default {
  name: 'DateInput',

  components: { AppInput },

  props: {
    // Чтобы value не было в списке $attrs, его можно указать в списке параметров
    value: {},
    type: {
      type: String,
      default: 'date',
      validator: function (value) {
        return ['date', 'time', 'datetime-local'].indexOf(value) !== -1
      }
    },
    valueAsNumber: {
      type: Number,
    },
    valueAsDate: {
      type: Date,
    }
  },
};
</script>

<style scoped></style>
