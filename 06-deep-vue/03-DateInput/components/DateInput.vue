<template>
  <AppInput v-on="$listeners" v-bind="$attrs" :type="type" :value="result" @input.native="sync">
    
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

  computed: {
    result(){
      if (this.valueAsNumber) {
        return this.getValue(new Date(this.valueAsNumber));
      } else if (this.valueAsDate) {
        return this.getValue(this.valueAsDate);
      } else {return this.value}
    }
  },

  methods: {
    getValue(date) {
      const YYYY = date.getUTCFullYear();
      const MM = (date.getUTCMonth() + 1).toString().padStart(2, '0');
      const DD = date.getUTCDate().toString().padStart(2, '0');
      const hh = date.getUTCHours().toString().padStart(2, '0');
      const mm = date.getUTCMinutes().toString().padStart(2, '0');      
      const ss = date.getUTCSeconds().toString().padStart(2, '0');
      if (this.type == 'date') {
        return (YYYY + '-' + MM + '-' + DD)
      } else if (this.type == 'time') {
        const sec = !this.$attrs.step || Number(this.$attrs.step) % 60 == 0 ? "" : ':' + ss 
        return (hh + ':' + mm + sec)
      } else if (this.type == 'datetime-local') {

        return (YYYY + '-' + MM + '-' + DD + 'T' + hh + ':' + mm)
      }
    },

    sync(event) {
      this.$emit('update:valueAsNumber', event.target.valueAsNumber)
      this.$emit('update:valueAsDate', event.target.valueAsDate || new Date(event.target.valueAsNumber))
    }
  }
};
</script>

<style scoped></style>
