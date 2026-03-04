<template>
  <q-layout view="hHh Lpr fFf">
    <q-header
      style="position: fixed; width: auto; top: 0; left: 0; z-index: 10; margin-left: 0px"
      class="header"
    >
      <q-toolbar style="height: 100px">
        <div align="left" class="justify-start" style="width: 100px">
          <q-img src="../assets/images/logo/logo.svg" style="height: 60px; max-width: 60px" />
        </div>
        <q-card-section align="center" style="width: 100%">
          <h5 class="header-name q-ma-sm">ПрофСтройСервис</h5>
          <p class="header-subname">Весь спектр строительных услуг</p>
        </q-card-section>
        <q-separator
          color="white"
          vertical
          align="right"
          :style="{ height: heightScreen + 'px', position: 'fixed', right: '100px' }"
        />
        <q-btn flat square class="main__layout-contact__btn"> КОНТАКТЫ </q-btn>
      </q-toolbar>
      <hr class="q-ma-none" size="1" color="white" />
    </q-header>
    <q-page-container style="margin-top: 0; padding-top: 0">
      <q-btn
        flat
        :style="{ height: heightScreen + 'px', width: '100px', position: 'fixed' }"
        class="main__layout-menu__btn"
        @click="isMenuDialog = !isMenuDialog"
      >
        МЕНЮ
      </q-btn>
      <q-dialog square maximized v-model="isMenuDialog" backdrop-filter="brightness(25%)">
        <MainLayoutMenuDialog />
      </q-dialog>
      <q-page>
        <router-view />
      </q-page>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
    </q-page-container>
    <MainLayoutFooter />
  </q-layout>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import MainLayoutMenuDialog from 'src/components/layout/MainLayoutMenuDialog.vue'
import MainLayoutFooter from 'src/components/layout/MainLayoutFooter.vue'

const widthScreen = ref(window.innerWidth)
const heightScreen = ref(window.innerHeight)

const isMenuDialog = ref(false)

const onResize = () => {
  widthScreen.value = window.innerWidth
  heightScreen.value = window.innerHeight
}

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
</script>
<style scoped lang="scss">
.hide-header {
  top: -150px;
}
.header {
  backdrop-filter: blur(30px); /* размывает задний слой */
  -webkit-backdrop-filter: blur(30px); /* для Safari */
  &-name {
    font-family: 'Montserrat';
    color: $primary;
    font-weight: 900;
    font-size: 36px;
  }
  &-subname {
    font-family: 'Montserrat';
    color: white;
    font-weight: 500;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 4%;
  }
}
.main__layout {
  &-menu__btn {
    text-transform: uppercase;
    writing-mode: sideways-lr;
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 30px;
    z-index: 999;
    top: 0;
    left: 0;
    color: $primary !important;
    border-right: 1px solid white;
    &:hover {
      background-color: rgba(255, 255, 255, 0.39);
    }
  }
  &-contact__btn {
    height: 100px;
    width: 100px;
    position: absolute;
    right: 0;
    font-family: 'Montserrat';
    font-weight: 500;
    background-color: $primary;
  }
}
:deep(.q-layout__section--marginal) {
  background-color: transparent;
  color: #fff !important;
}

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 1,
    'wght' 700,
    'GRAD' 0,
    'opsz' 24;
}
:deep(.q-dialog__inner--minimized) {
  padding: 0px !important;
}
</style>
