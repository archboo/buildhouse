<template>
  <div class="category-cards">
    <h1 v-if="title">{{ title }}</h1>
    <p v-if="description">{{ description }}</p>

    <div class="cards-grid">
      <q-btn
        v-for="item in items"
        :key="item.id"
        class="category-card"
        :class="{ selected: isSelected(item) }"
        flat
        @click="handleCardClick(item)"
      >
        <div v-if="item.image" class="image-wrapper">
          <imageComponentHelper :src="item.image" :alt="item.label" />
        </div>
        <h3 class="category-card__label">{{ item.label }}</h3>
        <q-tooltip v-if="item.description" class="category-card__description">
          {{ item.description }}
        </q-tooltip>
        <slot
          name="card-footer"
          :item="item"
          :selected="isSelected(item)"
        ></slot>
      </q-btn>
    </div>
    <slot name="after-cards"></slot>
  </div>
</template>

<script setup lang="ts">
import imageComponentHelper from "../helpers/imageComponentHelper.vue";

// Базовый интерфейс для элемента карточки
export interface BaseCardItem {
  id: string | number;
  label: string;
  value: string;
  image?: string;
  icon?: string;
  description?: string;
  [key: string]: unknown;
}

const props = defineProps<{
  items: BaseCardItem[];
  title?: string;
  description?: string;
  gridColumns?: number;
  selectedId?: string | number | null;
  selectionMode?: "single" | "none";
}>();

const emit = defineEmits<{
  (e: "card-click", item: BaseCardItem): void;
  (e: "update:selected-id", id: string | number | null): void;
}>();

// Проверка, выбран ли элемент
const isSelected = (item: BaseCardItem): boolean => {
  if (!props.selectedId || props.selectionMode === "none") return false;
  return props.selectedId === item.id;
};

// Обработчик клика по карточке
const handleCardClick = (item: BaseCardItem) => {
  emit("card-click", item);

  if (props.selectionMode === "single") {
    const newSelectedId = isSelected(item) ? null : item.id;
    emit("update:selected-id", newSelectedId);
  }
};
</script>

<style scoped lang="scss">
.category-cards {
  padding: 40px 20px;
  color: white;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: $primary;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 50px;
    opacity: 0.9;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 30px;

    .category-card {
      position: relative;
      width: 100%;
      max-width: 220px;
      margin: 0 auto;
      padding: 0 0 15px 0;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      transition: all 0.3s;
      border: 2px solid transparent;
      color: white;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: stretch; // Изменено с center на stretch
      text-decoration: none;
      overflow: hidden;

      &:not(.selected) {
        opacity: 0.7;

        &:hover {
          opacity: 1;
          transform: translateY(-5px);
          background-color: rgba(255, 255, 255, 0.15);
          border-color: rgba($primary, 0.3);

          .image-wrapper :deep(img) {
            transform: scale(1.05);
          }
        }
      }

      &.selected {
        opacity: 1;
        border-color: $primary;
        background-color: rgba(255, 255, 255, 0.15);
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba($primary, 0.2);

        .image-wrapper :deep(img) {
          transform: scale(1.05);
        }

        h3 {
          color: $primary;
        }
      }

      .image-wrapper {
        width: 100%;
        height: 140px;
        overflow: hidden;
        margin-bottom: 10px;
        flex-shrink: 0;

        // Прямое стилизование всех возможных элементов внутри
        :deep(.q-img) {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
        }

        :deep(.q-img__container) {
          width: 100% !important;
          height: 100% !important;
        }

        :deep(.q-img__image) {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }

        :deep(img) {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          display: block !important;
          transition: transform 0.3s ease;
        }
      }

      h3 {
        margin: 5px 0 0;
        padding: 0 10px;
        color: white;
        font-size: 0.62rem;
        font-weight: 500;
        line-height: 1.3;
        text-align: center;
        width: 100%;
      }

      :deep(.q-tooltip) {
        font-size: 0.75rem;
        background-color: rgba(0, 0, 0, 0.9);
        color: white;
        border-radius: 6px;
        padding: 8px 12px;
        max-width: 200px;
        white-space: normal;
      }
    }
  }
}
</style>
