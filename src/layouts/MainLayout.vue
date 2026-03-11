<template>
  <q-layout view="hHh Lpr fFf">
    <MainLayoutHeader @open-menu="isMenuDialog = true" />
    <q-page-container style="margin-top: 0; padding-top: 0">
      <q-btn
        v-if="widthScreen > 768"
        flat
        :style="{
          height: heightScreen + 'px',
          width: '100px',
          position: 'fixed',
        }"
        class="main__layout-menu__btn"
        @click="isMenuDialog = !isMenuDialog"
      >
        МЕНЮ
      </q-btn>
      <q-separator
        v-if="widthScreen > 768"
        color="white"
        vertical
        align="left"
        :style="{
          height: heightScreen + 'px',
          position: 'fixed',
          left: '100px',
        }"
        style="z-index: 99"
      />
      <q-dialog
        square
        maximized
        v-model="isMenuDialog"
        backdrop-filter="brightness(25%)"
      >
        <MainLayoutMenuDialog />
      </q-dialog>
      <q-page>
        <router-view />
      </q-page>
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
    </q-page-container>
    <MainLayoutFooter />
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import MainLayoutHeader from "src/components/layout/MainLayoutHeader.vue";
import MainLayoutMenuDialog from "src/components/layout/MainLayoutMenuDialog.vue";
import MainLayoutFooter from "src/components/layout/MainLayoutFooter.vue";

const widthScreen = ref(window.innerWidth);
const heightScreen = ref(window.innerHeight);

const isMenuDialog = ref(false);

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
<style scoped lang="scss">
.main__layout {
  &-menu__btn {
    text-transform: uppercase;
    writing-mode: sideways-lr;
    font-family: "Montserrat";
    font-weight: 300;
    font-size: 30px;
    z-index: 999;
    top: 100px;
    left: 0;
    color: $primary !important;
    // border-right: 1px solid white;
    &:hover {
      background-color: rgba(255, 255, 255, 0.39);
    }
  }
}
:deep(.q-layout__section--marginal) {
  background-color: transparent;
  color: #fff !important;
}

.material-symbols-outlined {
  font-variation-settings:
    "FILL" 1,
    "wght" 700,
    "GRAD" 0,
    "opsz" 24;
}
:deep(.q-dialog__inner--minimized) {
  padding: 0px !important;
}
</style>
