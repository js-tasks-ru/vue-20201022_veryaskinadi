<template>
  <form v-on:submit.prevent="onSubmit" class="form">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input v-model="email" type="email" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Имя</label>
      <div class="input-group">
        <input v-model="fullname" type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input v-model="password" type="password" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Повтор пароля</label>
      <div class="input-group">
        <input v-model="repeatPassword" type="password" class="form-control" />
      </div>
    </div>
    <div class="form-group">
      <label class="checkbox"><input v-model="checkbox" type="checkbox" /> Я согласен с условиями <span></span></label>
    </div> 
    <div class="form__buttons">
      <button type="submit" class="button button_primary">Зарегистрироваться</button>
    </div>
    <div class="form__append">Уже есть аккаунт? <router-link to="/login" class="link">Войдите</router-link></div>
  </form>
</template>

<script>
import { register } from '../data';

export default {
  name: 'RegisterPage',

  data() {
    return {
      email: '',
      fullname: '',
      password: '',
      repeatPassword: '',
      checkbox: false
    }
  },

  methods: {
    async onSubmit(){
      if (!this.email){
        alert("Требуется ввести Email")
      } else if (!this.fullname) {
        alert("Требуется ввести полное имя")
      } else if (!this.password){
        alert("Требуется ввести пароль")
      } else if (this.password != this.repeatPassword) {
        alert("Пароли не совпадают")
      } else if (this.checkbox == false) {
        alert("Требуется согласиться с условиями")
      } else {
        let registerResult = await register(this.email, this.fullname, this.password)
        if (!registerResult.error) {
          alert(registerResult.id)
        } else {
          alert(registerResult.message)
        }
      } 
    } 
  }
};
</script>

<style scoped>
  .form-group {
    position: relative;
    margin-bottom: 24px;
  }

  .form-group.form-group_inline {
    display: inline-block;
    margin-bottom: 0;
  }

  .form-group.form-group_inline + .form-group.form-group_inline {
    margin-left: 16px;
  }

  .form-label {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: var(--body-color);
    margin-bottom: 10px;
    display: block;
  }

  .form-control {
    padding: 12px 16px;
    height: 52px;
    border-radius: 8px;
    border: 2px solid var(--blue-light);
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: var(--body-color);
    transition: 0.2s all;
    background-color: var(--white);
    outline: none;
    box-shadow: none;
  }

  .form-control::placeholder {
    font-weight: 400;
    color: var(--blue-2);
  }

  .form-control:focus {
    border-color: var(--blue);
  }

  textarea.form-control {
    width: 100%;
    min-height: 211px;
  }

  .form-control.form-control_rounded {
    border-radius: 26px;
  }

  .form-control.form-control_sm.form-control_rounded {
    border-radius: 22px;
  }

  .form-control.form-control_sm {
    padding: 8px 16px;
    height: 44px;
    border-radius: 4px;
  }

  .input-group {
    position: relative;
  }

  .input-group .form-control {
    width: 100%;
  }

  .input-group.input-group_icon .form-control {
    padding-left: 50px;
  }

  .input-group.input-group_icon .icon {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  .input-group.input-group_icon.input-group_icon-left .icon {
    left: 16px;
  }

  .input-group.input-group_icon.input-group_icon-right .icon {
    right: 16px;
  }
  .button {
    display: inline-block;
    padding: 10px 24px;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: initial;
    text-align: center;
    border: 4px solid transparent;
    transition: .2s all;
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

  .button.button_primary {
    background-color: var(--blue);
    border-color: var(--blue);
    color: var(--white);
  }
</style>
