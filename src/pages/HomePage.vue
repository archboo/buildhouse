<template>
  <div class="home-banner">
    <q-img
      class="home-banner__img"
      src="../assets/images/home/main-banner.png"
      :style="{ height: heightScreen + 'px', width: widthScreen + 'px' - '15px' }"
    />
    <div class="home-banner__text">
      <p>СТРОИТЕЛЬНАЯ КОМПАНИЯ ПрофСтройСервис</p>
      <p>
        Секрет нашего успеха – команда профессионалов. Постоянный штат сотрудников нашей
        строительной компании позволяет качественно выполнять любимую работу – строить дома. Наши
        услуги рекомендуют знакомым, и это является лучшей оценкой не только от клиентов, но и от
        специалистов.
      </p>
    </div>
  </div>
  <div align="center" class="home__services" style="background-color: #141414; height: 250px">
    <p class="home__services-title">Основные услуги</p>
    <p class="home__services-subtitle">
      Наша строительная компания возводит недорогие, но достойные по качеству частные дома в
      Воскресенском, Раменском, Домодедовском и Коломенском районах Московской области. Мы строим из
      бревен, бруса, кирпича, газоблоков, клееного бруса, пеноблоков
    </p>
  </div>
  <HomeBuildOption />
  <div
    style="width: 100%; height: 600px; background-color: #141414"
    class="home__map flex justify_between"
  >
    <q-card-section class="home__map-img">
      <q-img
        class="home__map-img__wrp"
        src="../assets/images/home/map_wihte.png"
        fit="contain"
        height="100%"
        width="100%"
      ></q-img>
    </q-card-section>
    <q-card-section class="home__map-text">
      <p>ГДЕ ПРЕДСТАВЛЕНА <span>НАША КОМПАНИЯ</span></p>
      <p>
        В своей работе мы делаем упор на качество. Заказав любые строительные работы в Воскресенске,
        Раменском, Коломне или Домодедово следует рассчитывать только на успешное выполнение работы
        и соблюдение установленных сроков. Мы выполняем все действия в соответствии с применяемой
        технологией, не упуская деталей, ведь впоследствии малейшие промахи непременно дадут о себе
        знать, и мы это знаем.
      </p>
    </q-card-section>
  </div>
  <HomeFeedback />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import HomeBuildOption from 'src/components/home/HomeBuildOption.vue'
import HomeFeedback from 'src/components/home/HomeFeedback.vue'

const widthScreen = ref(window.innerWidth)
const heightScreen = ref(window.innerHeight)

function onResize() {
  widthScreen.value = window.innerWidth
  heightScreen.value = window.innerHeight
}

onMounted(() => window.addEventListener('resize', onResize))
onBeforeUnmount(() => window.removeEventListener('resize', onResize))
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
    font-family: 'Montserrat';
    font-weight: 300;
    :first-child {
      font-size: 40px;
      color: $primary;
    }
    :last-child {
      font-size: 20px;
      color: white;
    }
  }
}
.home__services {
  padding: 30px 150px;
  font-family: 'Montserrat';
  color: white;
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
  &-img {
    width: 50%;
    position: relative;
    &__wrp {
      position: absolute;
    }
  }
  &-text {
    color: white;
    font-family: 'Montserrat';
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
</style>
