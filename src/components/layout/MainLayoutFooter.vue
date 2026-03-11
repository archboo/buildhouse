<template>
  <div class="footer text-white flex justify-between">
    <q-card-section class="media__wrp">
      <p class="footer__title">Контакты</p>
      <div class="footer__subtitle">
        <p class="q-mb-none">Московская область</p>
        <p>г. Воскресенск, ул. Суворова, 2</p>
      </div>
      <div class="footer__info">
        <p>Время работы: с 09:00 до 18:00</p>
        <p>Выходной: Воскресенье</p>
        <p>Без перерыва на обед</p>
      </div>
    </q-card-section>
    <q-card-section class="footer__info media__wrp">
      <div class="q-mb-md">
        <p>Номер телефона:</p>
        <p>+7 (916) 926-71-86</p>
      </div>
      <div>
        <p>E-mail:</p>
        <p>pss-order@mail.ru</p>
      </div>
    </q-card-section>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped lang="scss">
.footer {
  font-family: "Montserrat";
  background-color: #141414;
  padding: 50px 125px;
  &__title {
    font-size: 36px;
    font-weight: 800;
  }
  &__subtitle {
    p {
      font-size: 36px;
      font-weight: 400;
    }
  }
  &__info {
    margin-top: 40px;
    p {
      font-size: 20px;
      font-weight: 300;
      margin-bottom: 0px;
    }
  }
}
@media (max-width: 1280px) {
  .footer {
    &__title {
      font-size: 24px;
    }
    &__subtitle {
      :first-child {
        font-size: 24px;
      }
      :last-child {
        font-size: 16px;
      }
    }
    &__info {
      p {
        font-size: 16px;
      }
    }
  }
}
@media (max-width: 768px) {
  .media__wrp {
    padding: 0px;
  }
  .footer {
    padding: 50px 50px;
    &__title {
      font-size: 20px;
    }
    &__subtitle {
      :first-child {
        font-size: 20px;
      }
      :last-child {
        font-size: 14px;
      }
    }
    &__info {
      p {
        font-size: 14px;
      }
    }
  }
}
</style>
