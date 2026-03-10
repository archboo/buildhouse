<template>
<q-header
      style="position: fixed; width: auto; top: 0; left: 0; z-index: 10; margin-left: 0px"
      class="header"
    >
      <q-toolbar style="height: 100px">
        <div align="left" class="justify-start" style="width: 100px">
          <imageComponentHelper src="/images/logo/logo.svg" style="height: 60px; max-width: 60px" />
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
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import imageComponentHelper from '../helpers/imageComponentHelper.vue';

const widthScreen = ref(window.innerWidth)
const heightScreen = ref(window.innerHeight)

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
</style>