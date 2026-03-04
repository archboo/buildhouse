<template>
  <q-card class="feedback flex justify-between" square style="width: 100%">
    <q-card-section style="width: 50%" class="feedback__title">
      <p>Есть вопрос?</p>
      <p>Задайте его прямо сейчас</p>
    </q-card-section>
    <q-card-section style="width: 50%" class="feedback__form">
      <q-form @submit="onSubmit()">
        <q-input
          filled
          v-model="feedbackMessage.name"
          label="Имя*"
          lazy-rules
          :rules="[
            (val) => {
              if (!val || val.length < 3) {
                return 'Имя должно содержать минимум 3 символа'
              }
              return /^[A-Za-zА-Яа-яЁё]+$/.test(val) || 'Только буквы разрешены'
            },
          ]"
        />
        <q-input
          filled
          v-model="feedbackMessage.mobile"
          label="Телефон*"
          lazy-rules
          mask="+7 (###) ###-##-##"
          fill-input
          :rules="[
            (val) => {
              if (!val) {
                return 'Пожалуйста, введите номер телефона'
              }
              const digitsOnly = val.replace(/\D/g, '')
              if (digitsOnly.length !== 11) {
                console.log(digitsOnly.length)
                return 'Неверная длина номера'
              }
              return /^\d+$/.test(digitsOnly) || 'Неверный формат, используйте только цифры'
            },
          ]"
        />
        <q-input
          v-model="feedbackMessage.email"
          :rules="[requiredRule, emailRule]"
          class="input"
          filled
          lazy-rules
          hide-bottom-space
          type="email"
          placeholder="E-mail*"
        />
        <q-input
          v-model="feedbackMessage.text"
          :rules="[requiredRule]"
          class="input"
          filled
          lazy-rules
          hide-bottom-space
          type="textarea"
          placeholder="Ваше сообщение..."
        />
        <q-file
          v-model="feedbackMessage.file"
          class="form__add-file"
          label="+ Выбрать файл"
          outlined
          bottom-slots
          accept="image/*,application/pdf,application/msword,.zip"
          multiple
        >
        </q-file>
        <q-btn class="feedback__btn" outline square :loading="false" type="submit">Отправить</q-btn>
      </q-form>
    </q-card-section>
  </q-card>
  <q-dialog v-model="sent">
    <q-card class="feedback__dialog">
      <q-card-section class="flex justify-center items-center content-center">
        <div class="text-h6">Ваше сообщение отправлено</div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const sent = ref(false)
const feedbackMessage = ref({
  name: null,
  mobile: null,
  email: null,
  text: null,
  file: null,
})

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const requiredRule = (val?: string) => !!val || 'Обязательное поле'
const emailRule = (val?: string) => (val && val.match(emailRegex) != null) || 'Некорректный email'

const onSubmit = () => {
  sent.value = true
}
</script>
<style scoped lang="scss">
.input {
  margin-bottom: 20px;
}
.feedback {
  background-color: #363432;
  &__dialog {
    width: 400px;
    height: 100px;
    background-color: #141414;
    color: white;
  }
  &__form {
    padding: 50px 150px 50px 0px;
    &__add-file {
      color: white;
    }
  }
  &__title {
    padding: 50px 0px 50px 150px;
    font-size: 36px;
    color: white;
    font-family: 'Montserrat';
    :first-child {
      margin-bottom: 0px;
    }
    :last-child {
      font-weight: 700;
    }
  }
  &__btn {
    color: $primary;
    width: 100% !important;
    height: 60px;
  }
}
</style>
