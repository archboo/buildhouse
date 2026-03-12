<template>
  <q-header
    style="
      position: fixed;
      width: auto;
      top: 0;
      left: 0;
      z-index: 10;
      margin-left: 0px;
    "
    class="header"
  >
    <q-toolbar v-if="widthScreen > 768" style="height: 100px">
      <div align="left" class="justify-start" style="width: 100px">
        <imageComponentHelper
          src="/images/logo/logo.svg"
          style="height: 60px; max-width: 60px"
        />
      </div>
      <q-card-section align="center" style="width: 100%; left: -50px">
        <h5 class="header-name q-ma-sm">ПрофСтройСервис</h5>
        <p class="header-subname">Весь спектр строительных услуг</p>
      </q-card-section>
      <q-separator
        color="white"
        vertical
        align="right"
        :style="{
          height: heightScreen + 'px',
          position: 'fixed',
          right: '100px',
        }"
      />
      <q-separator
        v-if="widthScreen > 768"
        color="white"
        vertical
        align="left"
        class="separator"
        :style="{
          height: heightScreen + 'px',
          position: 'fixed',
          left: '100px',
        }"
      />
      <q-btn flat square class="main__layout-contact__btn"> КОНТАКТЫ </q-btn>
    </q-toolbar>
    <q-toolbar v-if="widthScreen < 768" style="height: 75px" class="q-pa-none">
      <q-btn
        class="q-mx-auto q-my-auto"
        style="width: 100%; height: 100%"
        square
        flat
        @click="$emit('open-menu')"
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="12"
            y1="14"
            x2="38"
            y2="14"
            stroke="#ef6024"
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            x1="12"
            y1="34"
            x2="38"
            y2="34"
            stroke="#ef6024"
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            x1="4"
            y1="24"
            x2="46"
            y2="24"
            stroke="#ef6024"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </q-btn>
    </q-toolbar>
    <hr v-if="widthScreen > 768" class="q-ma-none" size="1" color="white" />
  </q-header>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import imageComponentHelper from "../helpers/imageComponentHelper.vue";

const widthScreen = ref(window.innerWidth);
const heightScreen = ref(window.innerHeight);

const onResize = () => {
  widthScreen.value = window.innerWidth;
  heightScreen.value = window.innerHeight;
};

defineEmits(["open-menu"]);

onMounted(() => {
  window.addEventListener("resize", onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});
</script>
<style scoped lang="scss">
.hide-header {
  top: -150px;
}
.header {
  backdrop-filter: blur(30px); /* размывает задний слой */
  -webkit-backdrop-filter: blur(30px); /* для Safari */
  &-name {
    font-family: "Montserrat";
    color: $primary;
    font-weight: 900;
    font-size: 36px;
  }
  &-subname {
    font-family: "Montserrat";
    color: white;
    font-weight: 500;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 4%;
  }
  &__menu-burger {
    color: $primary !important;
  }
}
.main__layout {
  &-contact__btn {
    height: 100px;
    width: 100px;
    position: absolute;
    right: 0;
    font-family: "Montserrat";
    font-weight: 500;
    background-color: $primary;
  }
}
@media (max-width: 768px) {
  .header {
    backdrop-filter: none; /* размывает задний слой */
    -webkit-backdrop-filter: none; /* для Safari */
  }
}
</style>
