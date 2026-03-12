<template>
  <div class="houses-timber">
    <h2>Дома из бруса</h2>
    <p>Здесь будет контент для домов из бруса</p>
  </div>
</template>

<script setup lang="ts">
// Если нужно получить параметры
const props = defineProps<{
  type?: string;
}>();

console.log("Тип дома:", props.type);
</script>

<style scoped lang="scss">
.houses-timber {
  padding: 20px;
  color: white;
  margin: 0 100px 0 100px;
}
</style>
