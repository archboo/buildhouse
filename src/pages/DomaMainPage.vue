<template>
  <router-view #default="{ Component }">
    <transition
      appear
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutRight"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup></script>
<style scoped lang="scss"></style>
