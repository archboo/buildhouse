<template>
  <q-card class="dialog q-pa-none" style="width: 100%; height: 100%">
    <q-card-section
      class="flex justify-between items-start q-pa-none dialog-wrp"
    >
      <q-card-section class="q-pt-none dialog__menu">
        <q-item :class="widthScreen < 768 ? 'q-px-none' : ''">
          <q-item-section>
            <header-toolbar-link
              :class="widthScreen < 768 ? 'q-px-none' : ''"
              link="/"
              label="Главная"
            />
          </q-item-section>
          <q-item-section v-if="widthScreen <= 1280">
            <q-btn
              flat
              dense
              v-close-popup
              class="dialog__btn-close__wrp items-end"
            >
              <div class="self-start dialog__btn-close__wrp-icon q-ma-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  :height="widthScreen < 768 ? '30px' : '50px'"
                  viewBox="0 -960 960 960"
                  :width="widthScreen < 768 ? '30px' : '50px'"
                  fill="#FFFFFF"
                >
                  <path
                    d="M256-227.69 227.69-256l224-224-224-224L256-732.31l224 224 224-224L732.31-704l-224 224 224 224L704-227.69l-224-224-224 224Z"
                  />
                </svg>
              </div>
            </q-btn>
          </q-item-section>
        </q-item>
        <q-item :class="widthScreen < 768 ? 'q-px-none' : ''">
          <q-item-section>
            <header-toolbar-link
              :class="widthScreen < 768 ? 'q-px-none' : ''"
              link="/doma"
              label="Строительство домов"
            />
            <q-item-section>
              <header-toolbar-link
                :class="widthScreen < 768 ? 'q-px-none' : ''"
                link="/doma/timber"
                label="Дома из бруса"
                class="dialog__menu-sub__menu q-py-none q-my-none"
              />
              <header-toolbar-link
                disable
                :class="widthScreen < 768 ? 'q-px-none' : ''"
                link="/doma/brick"
                label="Дома из кирпича"
                class="dialog__menu-sub__menu q-py-none q-my-none"
              />
              <header-toolbar-link
                disable
                :class="widthScreen < 768 ? 'q-px-none' : ''"
                link="/doma/blocks"
                label="Дома из газоблоков"
                class="dialog__menu-sub__menu q-py-none q-my-none"
              />
              <header-toolbar-link
                disable
                :class="widthScreen < 768 ? 'q-px-none' : ''"
                link="/doma/frame-panel"
                label="Каркасно-щитовые дома"
                class="dialog__menu-sub__menu q-py-none q-my-none"
              />
              <header-toolbar-link
                disable
                :class="widthScreen < 768 ? 'q-px-none' : ''"
                link="/doma/ceramic"
                label="Дома из керамических блоков"
                class="dialog__menu-sub__menu q-py-none q-my-none"
              />
            </q-item-section>
          </q-item-section>
        </q-item>
        <q-item
          class="q-my-none q-py-none btnbtn"
          :class="widthScreen < 768 ? 'q-px-none' : ''"
        >
          <q-item-section class="q-ma-none q-py-none">
            <header-toolbar-link
              :class="widthScreen < 768 ? 'q-px-none' : ''"
              link="/katalog-proektov"
              label="Готовые проекты"
              class="q-ma-none q-py-none"
              disable
            />
          </q-item-section>
        </q-item>
        <q-item :class="widthScreen < 768 ? 'q-px-none' : ''">
          <q-item-section class="q-ma-none q-py-none">
            <header-toolbar-link
              :class="widthScreen < 768 ? 'q-px-none' : ''"
              link="/fundament"
              label="Фундамент"
              disable
            />
          </q-item-section>
        </q-item>
        <q-item :class="widthScreen < 768 ? 'q-px-none' : ''">
          <q-item-section class="q-ma-none q-py-none">
            <header-toolbar-link
              link="/krovlya"
              label="Кровля"
              :class="widthScreen < 768 ? 'q-px-none' : ''"
              disable
            />
          </q-item-section>
        </q-item>
        <q-item :class="widthScreen < 768 ? 'q-px-none' : ''">
          <q-item-section class="q-ma-none q-py-none">
            <header-toolbar-link
              link="/prochee"
              label="Прочее"
              :class="widthScreen < 768 ? 'q-px-none' : ''"
              disable
            />
          </q-item-section>
        </q-item>
        <q-item :class="widthScreen < 768 ? 'q-px-none' : ''">
          <q-item-section class="q-ma-none q-py-none">
            <header-toolbar-link
              link="/o-nas"
              label="О нас"
              :class="widthScreen < 768 ? 'q-px-none' : ''"
              disable
            />
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-actions
        v-if="widthScreen > 1280"
        align="right"
        class="q-pa-none dialog__btn-close"
      >
        <q-btn
          flat
          dense
          v-close-popup
          class="dialog__btn-close__wrp items-end"
        >
          <div class="self-start dialog__btn-close__wrp-icon q-ma-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50px"
              viewBox="0 -960 960 960"
              width="50px"
              fill="#FFFFFF"
            >
              <path
                d="M256-227.69 227.69-256l224-224-224-224L256-732.31l224 224 224-224L732.31-704l-224 224 224 224L704-227.69l-224-224-224 224Z"
              />
            </svg>
          </div>
        </q-btn>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import HeaderToolbarLink from "./HeaderToolbarLink.vue";

const widthScreen = ref(window.innerWidth);
const heightScreen = ref(window.innerHeight);
const onResize = () => {
  widthScreen.value = window.innerWidth;
  heightScreen.value = window.innerHeight;
};
onMounted(() => {
  window.addEventListener("resize", onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});
</script>
<style lang="scss">
:deep(.q-item) {
  height: 40px !important;
}
:deep(.q-item:hover) {
  height: 40px !important;
}
.dialog {
  margin-left: 100px;
  margin-top: 101px;
  margin-right: 100px;
  background-color: transparent;
  height: 100% !important;
  &-wrp {
    height: 100%;
  }
  &__menu {
    background-color: $dark;
    height: 100% !important;
    width: 50%;
    padding: 24px;
    border: 1px solid rgb(148, 148, 148);
    &-sub__menu {
      font-size: 14px !important;
      text-transform: none !important;
      color: white;
      font-weight: 300 !important;
      max-height: 30px !important;
    }
  }
  &__btn-close {
    background-color: transparent;
    height: auto !important;
    width: 50%;
    height: 100% !important;
    color: white;
    border: 1px solid rgb(148, 148, 148);
    border-right: 2px solid rgb(148, 148, 148);
    &__wrp {
      width: 100%;
      height: 100% !important;
      &-icon {
        color: white;
      }
    }
  }
}
@media (max-width: 1280px) {
  .dialog {
    &-wrp {
      height: 100%;
    }
    &__menu {
      width: 100%;
      padding: 14px;
    }
  }
}
@media (max-width: 768px) {
  .dialog {
    margin-left: 50px;
    margin-top: 75px;
    margin-right: 50px;
    &-wrp {
      height: 100%;
    }
    &__menu {
      width: 100%;
      padding: 10px;
    }
  }
}
</style>
