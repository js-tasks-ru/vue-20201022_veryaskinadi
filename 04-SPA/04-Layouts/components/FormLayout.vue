<template>
  <main class="main">
    <div class="page page_onboarding">
      <div class="container">
        <h1 class="page__title text-center">Регистрация</h1>
        <form class="form">
          <div class="form-group">
            <label class="form-label">Email</label>
            <div class="input-group">
              <input type="email" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Имя</label>
            <div class="input-group">
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Пароль</label>
            <div class="input-group">
              <input type="password" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Повтор пароля</label>
            <div class="input-group">
              <input type="password" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label class="checkbox"><input type="checkbox" /> Я согласен с условиями <span></span></label>
          </div>
          <div class="form__buttons">
            <button type="submit" class="button button_primary">Зарегистрироваться</button>
          </div>
          <div class="form__append">Уже есть аккаунт? <a href="login.html" class="link">Войдите</a></div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'FormLayout',
};
</script>

<style scoped>
  .page.page_meetup-forms {
    padding: 70px 0;
  } 
  
  .page.page_onboarding {
    max-width: 374px;
    width: 100%;
    margin: 0 auto;
  }

  .page.page_404 {
    padding: 100px 0;
  }

  .page.page_404 h1 {
    font-family: Nunito, sans-serif;
    font-weight: 700;
    font-size: 52px;
    line-height: 1.2;
    text-align: center;
    color: var(--body-color);
  }

  .page.page_404 h1 > span {
    display: block;
    font-size: 144px;
  }

  .page.page_meetup-forms {
    padding: 70px 0;
  }

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

  @media all and (max-width: 767px) {
    .filters-panel {
      flex-direction: column;
    }

    .filters-panel__col + .filters-panel__col {
      margin-top: 16px;
    }

    .page.page_404 h1 {
      font-size: 36px;
    }

    .page.page_404 h1 > span {
      font-size: 108px;
    }
  }

  @media all and (max-width: 992px) {
    .page.page_meetup-forms {
      padding: 48px 0;
    }

    .container {
      padding: 0 16px;
    }
  }

  @media all and (max-width: 480px) {
    #filters-panel__search {
      width: calc(100% - 112px);
    }

    #filters-panel__search > .form-control {
      max-width: 100%;
    }
  }
</style>
