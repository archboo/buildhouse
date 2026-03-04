<template>
  <router-link :to="link" custom #default="props" class="btn">
    <q-btn
      align="left"
      class="q-mx-sm header__toolbar__link"
      :class="btnClass"
      flat
      :label="label"
      :icon="icon"
      v-bind="styleActiveBtn(props)"
      no-caps
    >
      <slot></slot>
      <q-tooltip v-if="tooltip">{{ tooltip }}</q-tooltip>
    </q-btn>
  </router-link>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { RouteLocation } from 'vue-router'

type RouteProps = {
  route: RouteLocation
  href: string
  isActive: boolean
  isExactActive: boolean
}
export default defineComponent({
  props: {
    link: { type: String, required: true },
    label: { type: String, required: false },
    icon: { type: String, required: false },
    tooltip: { type: String, required: false },
    btnClass: { type: String, required: false },
  },
  setup(props, { attrs }) {
    const styleActiveBtn = (route: RouteProps) => {
      return {
        ...attrs,
        to: isExternalLink.value ? undefined : props.link,
        href: isExternalLink.value ? props.link : undefined,
        color: route.isExactActive ? 'primary' : 'font',
      }
    }
    const isExternalLink = computed(() => !props.link.startsWith('/'))
    return {
      styleActiveBtn,
      isExternalLink,
    }
  },
})
</script>
<style scoped lang="scss">
.header__toolbar__link {
  font-family: 'Montserrat';
  font-weight: 600;
  text-transform: uppercase;
  font-size: 24px;
  color: white;
  transition:
    background-color 0.3s,
    color 0.3s;
}
.btn:hover {
  background-color: transparent !important;
  color: $primary;
}
</style>
