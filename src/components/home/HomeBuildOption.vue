<template>
  <q-card
    v-for="item in optionArray"
    :key="item.id"
    flat
    bordered
    class="flex construction"
    :class="item.id % 2 === 0 ? 'row reverse' : ''"
    :style="item.id % 2 === 0 ? 'background-color: #363432' : 'background-color: #141414'"
    square
  >
    <q-card-section class="q-ma-none q-pa-none construction__img">
      <q-img
        src="../../assets/images/home/main-banner.png"
        style="height: 100%"
        fit="cover"
      ></q-img>
      <div
        :style="{
          position: 'absolute',
          top: 0,
          bottom: 0,
          [item.id % 2 === 0 ? 'right' : 'left']: 0,
          width: '50%',
          background: `linear-gradient(
          ${item.id % 2 === 0 ? 'to left' : 'to right'},
          rgba(0, 0, 0, 0.9),
          rgba(0, 0, 0, 0)
        )`,
        }"
      ></div>
    </q-card-section>
    <q-card-section
      class="q-ma-none construction__text content-center"
      :style="item.id % 2 === 0 ? 'padding: 30px 60px 30px 130px' : 'padding: 30px 130px 30px 60px'"
    >
      <div class="construction__text-wrp">
        <p class="construction__text-title" v-html="item.title"></p>
        <p class="construction__text-subtitle">{{ item.subtitle }}</p>
      </div>
      <q-btn outline square label="подробнее" class="construction__text__btn" />
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
const optionArray = [
  {
    id: 1,
    img: '../../assets/images/home/main-banner.png',
    title:
      'Строим дома <p style="font-weight:800; text-transform: uppercase">Под ключ с гарантией</p>',
    subtitle:
      'ПрофСтройСервис» предлагает желающим жить за городом построить дом под ключ, который будет выполнен в соответствии со всеми требованиями. Мы занимаемся возведением строений из разных материалов (кирпича, бруса, газоблоков и т.д.) в нескольких районах Московской области: Воскресенском, Раменском, Коломенском и Домодедовском.',
  },
  {
    id: 2,
    img: '../../assets/images/home/main-banner.png',
    title:
      'Проводим устройство <p style="font-weight:800; text-transform: uppercase" class="q-ma-none">Новой кровли</p> или ремонтируем старую',
    subtitle:
      'Одним из самых важных этапов строительства дома считается возведение крыши. От того, насколько качественным будет устройство кровли, зависит комфорт проживания людей. Наша компания предлагает выполнить кровельные работы в Воскресенском, Раменском, Коломенском и Домодедовском районах Московской области.',
  },
  {
    id: 3,
    img: '../../assets/images/home/main-banner.png',
    title:
      'СТРОИМ РАЗЛИЧНЫЕ ФУНДАМЕНТЫ <p style="font-weight:800; text-transform: uppercase">ПО СОВРЕМЕННЫМ ТЕХНОЛОГИЯМ</p>',
    subtitle:
      'Всем известно, что основой надежности и долговечности любого строения является фундамент. В нашей компании «ПрофСтойСервис» желающие могут заказать фундамент под ключ в нескольких районах Подмосковья. В их числе Воскресенский, Раменский, Коломенский и Домодедовский.',
  },
  {
    id: 4,
    img: '../../assets/images/home/main-banner.png',
    title:
      'СТРОИМ ЗАБОРЫ ВОРОТА, НАВЕСЫ <p style="font-weight:800; text-transform: uppercase">В СРОК И С ГАРАНТИЕЙ</p>',
    subtitle:
      'Одним из самых важных этапов строительства дома считается возведение крыши. От того, насколько качественным будет устройство кровли, зависит комфорт проживания людей. Наша компания предлагает выполнить кровельные работы в Воскресенском, Раменском, Коломенском и Домодедовском районах Московской области.',
  },
]
</script>
<style scoped lang="scss">
.ref {
  color: $accent !important;
}
.construction {
  background-color: #1b1b1b;
  min-height: 600px;

  &__img {
    width: 50%;
  }
  &__text {
    width: 50%;
    color: white;
    font-family: 'Montserrat';
    font-size: 30px;
    font-weight: 400;
    &-title {
      text-transform: uppercase;
      :last-child {
        text-transform: uppercase;
      }
      margin-bottom: 45px;
    }
    &-subtitle {
      text-transform: none;
      font-size: 18px;
      font-weight: 200;
      margin-bottom: 45px;
    }
    &__btn {
      color: $primary;
      width: 100% !important;
      height: 60px;
    }
  }
}
</style>
