<template>
  <q-card
    v-for="item in props.items"
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
      <q-btn
        outline
        square
        label="подробнее"
        class="construction__text__btn"
        @click="handleBtnClick(item)"
        v-if="!item.hideButton"
      />
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import imageComponentHelper from "../helpers/imageComponentHelper.vue";

export interface ConstructionItem {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  hideButton?: boolean;
}

const props = defineProps<{
  items: ConstructionItem[];
}>();

const emit = defineEmits<{
  (e: "btn-click", item: ConstructionItem): void;
}>();
const handleBtnClick = (item: ConstructionItem) => {
  emit("btn-click", item);
};
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
