<template>
  <img 
    :src="imagePath" 
    :alt="alt"
    v-bind="$attrs"
  >
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { getAssetPath } from 'src/config';

export default defineComponent({
  name: 'AppImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const imagePath = computed(() => getAssetPath(props.src));
    
    return {
      imagePath
    };
  }
});
</script>