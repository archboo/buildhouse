<template>
  <q-card
    v-for="item in optionArray"
    :key="item.id"
    flat
    bordered
    class="flex construction"
    :class="item.id % 2 === 0 ? 'row reverse' : ''"
    :style="
      item.id % 2 === 0
        ? 'background-color: #363432'
        : 'background-color: #141414'
    "
    square
  >
    <q-card-section
      class="q-ma-none q-pa-none construction__img media__wrp-width"
    >
      <imageComponentHelper :src="item.img" style="height: 100%" fit="cover" />
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
      :style="
        item.id % 2 === 0
          ? 'padding: 30px 60px 30px 130px'
          : 'padding: 30px 130px 30px 60px'
      "
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
import imageComponentHelper from "../helpers/imageComponentHelper.vue";

const optionArray = [
  {
    id: 1,
    img: "/images/home/main-banner.png",
    title:
      'Строим дома <p style="font-weight:800; text-transform: uppercase">Под ключ с гарантией</p>',
    subtitle:
      "ПрофСтройСервис» предлагает желающим жить за городом построить дом под ключ, который будет выполнен в соответствии со всеми требованиями. Мы занимаемся возведением строений из разных материалов (кирпича, бруса, газоблоков и т.д.) в нескольких районах Московской области: Воскресенском, Раменском, Коломенском и Домодедовском.",
  },
  {
    id: 2,
    img: "/images/home/main-banner.png",
    title:
      'Проводим устройство <p style="font-weight:800; text-transform: uppercase" class="q-ma-none">Новой кровли</p> или ремонтируем старую',
    subtitle:
      "Одним из самых важных этапов строительства дома считается возведение крыши. От того, насколько качественным будет устройство кровли, зависит комфорт проживания людей. Наша компания предлагает выполнить кровельные работы в Воскресенском, Раменском, Коломенском и Домодедовском районах Московской области.",
  },
  {
    id: 3,
    img: "/images/home/main-banner.png",
    title:
      'СТРОИМ РАЗЛИЧНЫЕ ФУНДАМЕНТЫ <p style="font-weight:800; text-transform: uppercase">ПО СОВРЕМЕННЫМ ТЕХНОЛОГИЯМ</p>',
    subtitle:
      "Всем известно, что основой надежности и долговечности любого строения является фундамент. В нашей компании «ПрофСтойСервис» желающие могут заказать фундамент под ключ в нескольких районах Подмосковья. В их числе Воскресенский, Раменский, Коломенский и Домодедовский.",
  },
  {
    id: 4,
    img: "/images/home/main-banner.png",
    title:
      'СТРОИМ ЗАБОРЫ ВОРОТА, НАВЕСЫ <p style="font-weight:800; text-transform: uppercase">В СРОК И С ГАРАНТИЕЙ</p>',
    subtitle:
      "Одним из самых важных этапов строительства дома считается возведение крыши. От того, насколько качественным будет устройство кровли, зависит комфорт проживания людей. Наша компания предлагает выполнить кровельные работы в Воскресенском, Раменском, Коломенском и Домодедовском районах Московской области.",
  },
];
</script>
<style scoped lang="scss">
.ref {
  color: $accent !important;
}
.construction {
  background-color: #1b1b1b;
  min-height: 600px;
  border-top: 1px solid white;

  &__img {
    width: 50%;
  }
  &__text {
    width: 50%;
    color: white;
    font-family: "Montserrat";
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
@media (max-width: 1280px) {
  .construction {
    display: flex;
    flex-direction: column;
    &__text {
      width: 100%;
      margin: 0 auto;
      padding: 25px 50px !important;
      font-size: 24px;
      &-wrp {
        margin: 0 auto;
        width: 80%;
      }
      &-subtitle {
        font-size: 16px;
      }
      &__btn {
        display: flex;
        margin: 0 auto !important;
        width: 80% !important;
      }
    }
  }
  .media__wrp-width {
    width: 100% !important;
    height: 500px !important;
  }
}
@media (max-width: 768px) {
  .construction {
    display: flex;
    flex-direction: column;
    &__text {
      text-align: center;
      width: 100%;
      margin: 0 auto;
      padding: 25px 0px !important;
      font-size: 20px;
      &-wrp {
        margin: 0 auto;
        width: 80%;
      }
      &-title {
        margin-bottom: 25px !important;
      }
      &-subtitle {
        font-size: 14px;
        margin-bottom: 25px;
      }
      &__btn {
        display: flex;
        margin: 0 auto !important;
        width: 83% !important;
      }
    }
  }
  .media__wrp-width {
    width: 100% !important;
    height: 500px !important;
  }
}
</style>
