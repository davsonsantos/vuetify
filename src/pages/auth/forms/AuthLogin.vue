<template>
  <v-alert
    v-if="feedbackMessage"
    color="error"
    variant="tonal"
    class="mb-4"
    icon="false"
    rounded="md"
  >
    <template v-slot:prepend>
      <SvgSprite name="custom-alert-fill" style="width: 20px; height: 20px" />
    </template>
    {{ feedbackMessage }}
  </v-alert>

  <v-form class="mt-7 loginForm" @submit.prevent="submit">
    <div class="space-y-6">
      <div>
        <v-label>E-mail</v-label>
        <v-text-field
          v-model="email"
          :error-messages="errors.email"
          type="email"
          placeholder="E-mail"
        ></v-text-field>

        <v-label>Senha</v-label>
        <v-text-field
          placeholder="Senha"
          aria-label="password"
          v-model="password"
          :error-messages="errors.password"
          required
          variant="outlined"
          density="comfortable"
          color="primary"
          hide-details="auto"
          :type="show1 ? 'text' : 'password'"
          class="mt-2"
        >
          <template v-slot:append-inner>
            <v-btn
              color="secondary"
              aria-label="icon"
              icon
              rounded
              variant="text"
            >
              <SvgSprite
                color="primary"
                name="custom-eye-invisible"
                style="width: 20px; height: 20px"
                v-if="show1 == false"
                @click="show1 = !show1"
              />
              <SvgSprite
                color="primary"
                name="custom-eye"
                style="width: 20px; height: 20px"
                v-if="show1 == true"
                @click="show1 = !show1"
              />
            </v-btn>
          </template>
        </v-text-field>

        <div class="d-flex align-center">
          <div class="ms-auto">
            <a
              color="primary"
              href="/vue/auth/forgot-pwd1"
              class="text-darkText link-hover"
              >Esqueceu a senha?</a
            >
          </div>
        </div>
      </div>
    </div>
    <v-btn
      color="primary"
      :loading="loading"
      block
      class="mt-5"
      variant="flat"
      size="large"
      rounded="md"
      :disabled="loading"
      type="submit"
    >
      Login</v-btn
    >
  </v-form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";
import { object, string } from "yup";
import { useAuthStore } from "@/stores/auth";
import SvgSprite from "@/components/shared/SvgSprite.vue";

const schema = object({
  email: string()
    .required("Email obrigatório")
    .email("Email Inválido")
    .label("E-mail"),
  password: string().required("Senha Obrigatória").label("Senha"),
});

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    email: "davsonsantos@gmail.com",
    password: "athan@123",
  },
});

const submit = handleSubmit(async (values) => {
  await login(values);
});

const { value: email } = useField("email");
const { value: password } = useField("password");
const feedbackMessage = ref("");
const authStore = useAuthStore();
const router = useRouter();
const show1 = ref(false);
const loading = ref(false);

function login(values) {
  feedbackMessage.value = "";
  loading.value = true;
  authStore
    .login(values.email, values.password)
    .then(() => {
      router.push({ name: "dashboard" });
    })
    .catch((e) => {
      feedbackMessage.value = e.message;
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>
