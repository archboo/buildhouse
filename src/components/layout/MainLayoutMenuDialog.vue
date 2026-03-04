<template>
  <q-card class="dialog q-pa-none" style="width: 100%; height: 100%">
    <q-card-section class="flex justify-between items-start q-pa-none dialog-wrp">
      <q-card-section class="q-pt-none dialog__menu">
        <q-item>
          <q-item-section>
            <header-toolbar-link link="/" label="Главная" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <header-toolbar-link link="/doma" label="Строительство домов" />
            <q-item-section>
              <header-toolbar-link
                link="/doma/doma-iz-brusa"
                label="Дома из бруса"
                class="dialog__menu-sub__menu q-py-none q-my-none"
              />
              <header-toolbar-link
                link="/doma/doma-iz-kirpicha"
                label="Дома из кирпича"
                class="dialog__menu-sub__menu q-py-none q-my-none"
              />
              <header-toolbar-link
                link="/doma/doma-iz-gazoblokov"
                label="Дома из газоблоков"
                class="dialog__menu-sub__menu q-py-none q-my-none"
              />
              <header-toolbar-link
                link="/doma/karkasno-schitovye-doma-pod-klyuch"
                label="Каркасно-щитовые дома"
                class="dialog__menu-sub__menu q-py-none q-my-none"
              />
              <header-toolbar-link
                link="/doma/doma-iz-keramicheskih-blokov"
                label="Дома из керамических блоков"
                class="dialog__menu-sub__menu q-py-none q-my-none"
              />
            </q-item-section>
          </q-item-section>
        </q-item>
        <q-item class="q-my-none q-py-none btnbtn">
          <q-item-section class="q-ma-none q-py-none">
            <header-toolbar-link
              link="/katalog-proektov"
              label="Готовые проекты"
              class="q-ma-none q-py-none"
            />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="q-ma-none q-py-none">
            <header-toolbar-link link="/fundament" label="Фундамент" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="q-ma-none q-py-none">
            <header-toolbar-link link="/krovlya" label="Кровля" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="q-ma-none q-py-none">
            <header-toolbar-link link="/prochee" label="Прочее" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="q-ma-none q-py-none">
            <header-toolbar-link link="/o-nas" label="О нас" />
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-actions align="right" class="q-pa-none dialog__btn-close">
        <q-btn flat dense v-close-popup class="dialog__btn-close__wrp items-end">
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

<script setup>
import HeaderToolbarLink from './HeaderToolbarLink.vue'
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
</style>
