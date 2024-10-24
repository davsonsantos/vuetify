<template>
  <v-app>
    <v-main class="flex w-screen h-screen">
      <div class="hidden md:flex-1 md:flex items-center justify-center">
        <img
          src="../assets/images/img-auth-sideimg.png"
          class="object-cover h-100 w-100"
        />
      </div>
      <div class="w-full md:w-[650px] p-12">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
//
</script>
