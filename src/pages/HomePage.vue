<template>
  <div class="home-banner">
    <imageComponentHelper
      src="/images/home/main-banner.png"
      alt="Banner"
      class="home-banner__img"
      :style="{ height: heightScreen + 'px', width: widthScreen + 'px - 15px' }"
    />

    <div class="home-banner__text">
      <p>
        СТРОИТЕЛЬНАЯ КОМПАНИЯ
        <span>ПрофСтройСервис</span>
      </p>
      <p>
        Секрет нашего успеха – команда профессионалов. Постоянный штат
        сотрудников нашей строительной компании позволяет качественно выполнять
        любимую работу – строить дома. Наши услуги рекомендуют знакомым, и это
        является лучшей оценкой не только от клиентов, но и от специалистов.
      </p>
    </div>
  </div>
  <div
    align="center"
    class="home__services"
    style="background-color: #141414; height: 250px"
  >
    <p class="home__services-title">Основные услуги</p>
    <p class="home__services-subtitle">
      Наша строительная компания возводит недорогие, но достойные по качеству
      частные дома в Воскресенском, Раменском, Домодедовском и Коломенском
      районах Московской области. Мы строим из бревен, бруса, кирпича,
      газоблоков, клееного бруса, пеноблоков
    </p>
  </div>
  <HomeBuildOption :items="optionArray" @btn-click="handleBtnClick" />
  <div
    style="width: 100%; height: 600px; background-color: #141414"
    class="home__map flex justify_between"
  >
    <q-card-section class="home__map-img">
      <imageComponentHelper
        src="/images/home/map_wihte.png"
        alt="Banner"
        fit="contain"
        height="100%"
        width="100%"
        class="home__map-img__wrp"
      />
    </q-card-section>
    <q-card-section class="home__map-text">
      <p>ГДЕ ПРЕДСТАВЛЕНА <span>НАША КОМПАНИЯ</span></p>
      <p>
        В своей работе мы делаем упор на качество. Заказав любые строительные
        работы в Воскресенске, Раменском, Коломне или Домодедово следует
        рассчитывать только на успешное выполнение работы и соблюдение
        установленных сроков. Мы выполняем все действия в соответствии с
        применяемой технологией, не упуская деталей, ведь впоследствии малейшие
        промахи непременно дадут о себе знать, и мы это знаем.
      </p>
    </q-card-section>
  </div>
  <HomeFeedback />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import HomeBuildOption, {
  type ConstructionItem,
} from "src/components/home/HomeBuildOption.vue";
import HomeFeedback from "src/components/home/HomeFeedback.vue";
import imageComponentHelper from "../components/helpers/imageComponentHelper.vue";

const widthScreen = ref(window.innerWidth);
const heightScreen = ref(window.innerHeight);

function onResize() {
  widthScreen.value = window.innerWidth;
  heightScreen.value = window.innerHeight;
}

const optionArray = [
  {
    id: 1,
    img: "/images/home/main-banner.png",
    title:
      'Строим дома <p style="font-weight:800; text-transform: uppercase">Под ключ с гарантией</p>',
    subtitle:
      "ПрофСтройСервис» предлагает желающим жить за городом построить дом под ключ, который будет выполнен в соответствии со всеми требованиями. Мы занимаемся возведением строений из разных материалов (кирпича, бруса, газоблоков и т.д.) в нескольких районах Московской области: Воскресенском, Раменском, Коломенском и Домодедовском.",
  },
  {
    id: 2,
    img: "/images/home/main-banner.png",
    title:
      'Проводим устройство <p style="font-weight:800; text-transform: uppercase" class="q-ma-none">Новой кровли</p> или ремонтируем старую',
    subtitle:
      "Одним из самых важных этапов строительства дома считается возведение крыши. От того, насколько качественным будет устройство кровли, зависит комфорт проживания людей. Наша компания предлагает выполнить кровельные работы в Воскресенском, Раменском, Коломенском и Домодедовском районах Московской области.",
  },
  {
    id: 3,
    img: "/images/home/main-banner.png",
    title:
      'СТРОИМ РАЗЛИЧНЫЕ ФУНДАМЕНТЫ <p style="font-weight:800; text-transform: uppercase">ПО СОВРЕМЕННЫМ ТЕХНОЛОГИЯМ</p>',
    subtitle:
      "Всем известно, что основой надежности и долговечности любого строения является фундамент. В нашей компании «ПрофСтойСервис» желающие могут заказать фундамент под ключ в нескольких районах Подмосковья. В их числе Воскресенский, Раменский, Коломенский и Домодедовский.",
  },
  {
    id: 4,
    img: "/images/home/main-banner.png",
    title:
      'СТРОИМ ЗАБОРЫ ВОРОТА, НАВЕСЫ <p style="font-weight:800; text-transform: uppercase">В СРОК И С ГАРАНТИЕЙ</p>',
    subtitle:
      "Одним из самых важных этапов строительства дома считается возведение крыши. От того, насколько качественным будет устройство кровли, зависит комфорт проживания людей. Наша компания предлагает выполнить кровельные работы в Воскресенском, Раменском, Коломенском и Домодедовском районах Московской области.",
  },
];

const handleBtnClick = (item: ConstructionItem) => {
  console.log("Клик по кнопке для элемента:", item.id);
};

onMounted(() => window.addEventListener("resize", onResize));
onBeforeUnmount(() => window.removeEventListener("resize", onResize));
</script>
<style scoped lang="scss">
.home-banner {
  &__img {
    filter: brightness(20%);
  }
  position: relative;
  &__text {
    width: 75%;
    position: absolute;
    left: 150px;
    bottom: 100px;
    font-family: "Montserrat";
    font-weight: 300;
    :first-child {
      font-size: 40px;
      color: $primary;
    }
    :last-child {
      font-size: 20px;
      color: white;
    }
    span {
      color: $primary;
      font-weight: 800;
      font-size: 40px !important;
    }
  }
}
.home__services {
  padding: 30px 150px;
  font-family: "Montserrat";
  color: white;
  border-top: 1px solid white;
  &-title {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 20px;
  }
  &-subtitle {
    font-size: 20px;
    font-weight: 300;
  }
}
.home__map {
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  &-img {
    width: 50%;
    position: relative;
    &__wrp {
      position: absolute;
    }
  }
  &-text {
    color: white;
    font-family: "Montserrat";
    width: 50%;
    padding-right: 125px;
    padding-top: 150px;
    :first-child {
      font-weight: 700;
      font-size: 30px;
      color: white;
      span {
        font-weight: 700;
        font-size: 30px;
        color: $primary;
      }
    }
    :last-child {
      font-weight: 200;
      font-size: 18px;
    }
  }
}
@media (max-width: 1280px) {
  .home {
    &-banner {
      &__img {
        filter: brightness(20%);
      }
      position: relative;
      &__text {
        width: 65%;
        span {
          font-size: 30px !important;
        }
        :first-child {
          font-size: 30px;
          color: $primary;
        }
        :last-child {
          font-size: 16px;
          color: white;
        }
      }
    }
    &__services {
      &-title {
        font-size: 24px;
      }
      &-subtitle {
        font-size: 16px;
      }
    }
    &__map {
      height: auto !important;
      &-img {
        width: 100%;
        height: 450px;
      }
      &-text {
        width: 100%;
        margin: 0px auto;
        padding: 50px 150px 50px 150px;
        :first-child {
          font-size: 24px;
          span {
            font-size: 24px;
          }
        }
        :last-child {
          font-size: 16px;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .home {
    &-banner {
      &__text {
        margin: 0 auto;
        align-items: center;
        align-self: center;
        align-content: center;
        left: 10% !important;
        bottom: 10px;
      }
    }
    &__services {
      height: auto !important;
      padding: 20px 50px;
      &-title {
        font-size: 20px;
      }
      &-subtitle {
        font-size: 14px;
      }
    }
    &__map {
      &-text {
        text-align: center;
        padding: 50px;
        :first-child {
          font-size: 20px;
          span {
            font-size: 22px;
          }
        }
        :last-child {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
