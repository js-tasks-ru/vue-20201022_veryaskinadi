<script>
export default {
  name: 'BaseButton',
  
  render(h) {
    return h(
      this.tag,
      { 
        class: 'button' + (this.block ? ' button_block' : ''),
        on: {
          click: () => {
            this.$emit('click')
          }
        },
        props: {
          to: this.to || ''
        }
      }, 
      this.$slots.default
    )
  },

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
.button {
  display: inline-block;
  padding: 10px 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: initial;
  text-align: center;
  border: 4px solid transparent;
  transition: 0.2s all;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
}

.button.button_block {
  display: block;
  width: 100%;
}
</style>
