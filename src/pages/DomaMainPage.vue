<template>
  <div class="build-house">
    <div style="height: 50px"></div>
    <category-cards
      :items="houseItems"
      :selected-id="selectedHouseId"
      selection-mode="single"
      @card-click="handleCardClick"
      @update:selected-id="handleSelectedIdUpdate"
    />

    <router-view #default="{ Component }">
      <transition
        :duration="0.2"
        appear
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOutRight"
      >
        <component :is="Component" />
      </transition>
    </router-view>
    <div v-if="route.path === '/doma'" class="build-house__main">
      <HomeBuildOption :items="optionArray" />
      <div style="padding: 50px 130px" class="build-house__main-desc">
        <p>Этапы работ</p>
        <p>
          Мы выполняем строительные работы в строго установленной
          последовательности. Чтобы построить дом под ключ, необходимо выполнить
          несколько этапов. После того, как выбран подходящий проект,
          согласованы необходимые документы, составлена смета, необходимо
          выполнить следующее: Возведение фундамента. Это самый ответственный
          этап, от качества проведения которого зависит надежность и
          долговечность всего здания. На то, сколько будет стоить построить дом
          под ключ, во многом влияет выбор типа фундамента. Кладка стен,
          обустройство перекрытий. Время, которое затрачивается на этот этап,
          зависит от выбора материала. Монтаж крыши. Необходимо построить
          стропильную систему, уложить кровельный материал. Отделочные работы:
          наружные и внутренние. Самый длительный этап, включающий в себе
          проведение инженерных коммуникаций, утепление и отделку всех
          поверхностей, многое другое. После завершения отделки можно считать,
          что дом готов и клиент может в него въезжать.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import CategoryCards, {
  type BaseCardItem,
} from "src/components/helpers/CategoryCards.vue";
import HomeBuildOption from "src/components/home/HomeBuildOption.vue";

interface HouseItem extends BaseCardItem {
  description: string;
}

const houseItems = ref<HouseItem[]>([
  {
    id: 1,
    label: "Дома из бруса",
    value: "timber",
    image: "/images/home/main-banner.png",
    description: "Экологичные и тёплые дома из натурального дерева",
  },
  {
    id: 2,
    label: "Дома из кирпича",
    value: "brick",
    image: "/images/home/main-banner.png",
    description: "Надёжные и долговечные кирпичные строения",
  },
  {
    id: 3,
    label: "Дома из газоблоков",
    value: "blocks",
    image: "/images/home/main-banner.png",
    description: "Современные энергоэффективные решения",
  },
  {
    id: 4,
    label: "Каркасно-щитовые дома",
    value: "frame-panel",
    image: "/images/home/main-banner.png",
    description: "Быстровозводимые и экономичные конструкции",
  },
  {
    id: 5,
    label: "Дома из керамических блоков",
    value: "ceramic",
    image: "/images/home/main-banner.png",
    description: "Тёплые и дышащие стены из керамики",
  },
]);

const optionArray = [
  {
    id: 1,
    img: "/images/home/main-banner.png",
    title:
      '<p class="build-house__main-title">Строительство дома под ключ —<span>быстро и выгодно</span></p>',
    subtitle:
      "        Наша компания «ПрофСтройСервис» предлагает желающим жить за городом построить дом под ключ, который будет выполнен в соответствии со всеми требованиями клиента. Мы занимаемся возведением строений из разных материалов (кирпича, бруса, газоблоков и т.д.) в нескольких районах Московской области: Воскресенском, Раменском, Коломенском и Домодедовском. В нашей компании работают специалисты, способные выполнить все виды строительных работ. Клиенту не придется нанимать несколько бригад, договариваться с ними о сроках и цене, тратя свое время и нервы. Еще одно преимущество — мы предлагаем построить дом под ключ недорого.",
    hideButton: true,
  },
  {
    id: 2,
    img: "/images/home/main-banner.png",
    title: "Возведение дома в «ПрофСтройСервисе»",
    subtitle:
      "Мы предлагаем клиентам построить дом под ключ недорого, и тем самым избавить их от головной боли. Заказчик должен будет лишь заключить с нами договор, заплатить деньги, и в назначенное время принять работу. Наши квалифицированные сотрудники обеспечивают следующее: Организуют строительство объекта. Составляют поэтапный график работ. Консультируют заказчика об интересующем его этапе строительства. Если клиент пожелает, он сможет наблюдать за ходом возведения здания. Если нужно, мы вносим коррективы в проект. Желающим иметь загородное жилье а Подмосковье, необходимо обратиться к менеджерам нашей компании. Они посчитают, сколько стоит построить дом под ключ, назовут сроки. Можно позвонить по телефону или оформить заявку на сайте.",
    hideButton: true,
  },
];

const selectedHouseId = ref<string | number | null>(null);
const router = useRouter();
const route = useRoute();

// Синхронизация выбранного ID с текущим маршрутом при загрузке
watch(
  () => route.path,
  (newPath) => {
    const pathParts = newPath.split("/");
    const lastPart = pathParts[pathParts.length - 1];

    // Если мы на главной странице, сбрасываем выбор
    if (newPath === "/doma" || newPath === "/doma/") {
      selectedHouseId.value = null;
    } else {
      // Если мы на странице конкретного типа, находим соответствующий ID
      const matchingItem = houseItems.value.find(
        (item) => item.value === lastPart,
      );
      if (matchingItem) {
        selectedHouseId.value = matchingItem.id;
      }
    }
  },
  { immediate: true },
);

const handleCardClick = (item: BaseCardItem) => {
  console.log("Клик по карточке:", item.label);
  if (selectedHouseId.value === item.id) {
    // Если карточка уже выбрана - редирект на родительский компонент
    console.log("Повторный клик, редирект на /doma");
    router.push("/doma").catch((error) => {
      console.error("Ошибка навигации:", error);
    });
  } else {
    // Если карточка не выбрана - переходим на страницу с типом дома
    console.log("Переход на /doma/", item.value);
    router.push(`/doma/${item.value}`).catch((error) => {
      console.error("Ошибка навигации:", error);
    });
  }
};

// Обновление выбранного ID
const handleSelectedIdUpdate = (id: string | number | null) => {
  selectedHouseId.value = id;
  console.log("Выбран ID:", id);
};
</script>

<style scoped lang="scss">
* {
  font-family: "Montserrat";
  color: white;
}
.build-house {
  background-color: $dark;
  min-height: 1200px;
  &__main {
    // padding: 0px 150px;
    &-title {
      font-weight: 600;
      font-size: 30px;
      text-align: center;
      span {
        color: $primary;
        font-weight: 700;
      }
    }
    &-desc {
      :first-child {
        font-weight: 600;
        font-size: 30px;
        text-align: center;
      }
      :last-child {
        font-weight: 200;
        font-size: 18px;
      }
    }
  }
}

.selected-info {
  text-align: center;
  color: white;
  margin: 20px 0;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;

  .q-btn {
    margin: 5px;
  }
}
</style>
