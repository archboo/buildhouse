<template>
  <div class="footer text-white flex justify-between">
    <q-card-section>
      <p style="font-size: 36px; font-weight: 800">Контакты</p>
      <div>
        <p class="q-mb-none" style="font-size: 36px; font-weight: 400">Московская область</p>
        <p style="font-size: 20px; font-weight: 300">г. Воскресенск, ул. Суворова, 2</p>
      </div>
      <div class="footer__info">
        <p>Время работы: с 09:00 до 18:00</p>
        <p>Выходной: Воскресенье</p>
        <p>Без перерыва на обед</p>
      </div>
    </q-card-section>
    <q-card-section class="footer__info">
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
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: { footerSize: (_size: { width: number; height: number }) => true },
})
</script>
<style scoped lang="scss">
.footer {
  font-family: 'Montserrat';
  background-color: #141414;
  padding: 50px 125px;
  &__info {
    margin-top: 40px;
    p {
      font-size: 20px;
      font-weight: 300;
      margin-bottom: 0px;
    }
  }
}
</style>
