<template>
  <v-row class="bg-surface position-relative" no-gutters>
    <v-col cols="12" lg="12" md="12" class="d-flex">
      <v-container>
        <div
          class="d-flex align-center justify-center"
          style="min-height: calc(100vh - 148px)"
        >
          <v-row justify="center">
            <v-col cols="12" md="12">
              <div class="pa-sm-10 pa-6 loginBox">
                <Logo class="mb-5" />
                <AuthLogin />
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup>
import Logo from "@/layouts/logo/LogoMain.vue";
import AuthLogin from "./forms/AuthLogin.vue";
</script>

<style lang="scss">
.loginBox {
  max-width: 475px;
  margin: 0 auto;
  /* border: 0px; */
}
</style>
