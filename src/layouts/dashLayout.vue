<template>
  <v-app>
    <v-navigation-drawer v-model="isDrawerOpen">
      <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
      <v-divider></v-divider>
      <v-list-item link title="List Item 1"></v-list-item>
      <v-list-item link title="List Item 2"></v-list-item>
      <v-list-item link title="List Item 3"></v-list-item>
    </v-navigation-drawer>

    <v-app-bar flat class="border-b">
      <v-app-bar-nav-icon
        @click="isDrawerOpen = !isDrawerOpen"
      ></v-app-bar-nav-icon>
      <v-app-bar-title>Menu APP</v-app-bar-title>

      <template #append>
        <v-btn icon class="mr-2">
          <v-badge dot color="red">
            <v-icon icon="mdi-bell-outline" size="x-large"></v-icon>
          </v-badge>
        </v-btn>
        <v-menu>
          <template #activator="{ props }">
            <v-avatar v-bind="props">
              <v-img
                alt="John"
                src="https://cdn.vuetifyjs.com/images/john.jpg"
              ></v-img>
            </v-avatar>
          </template>

          <v-card min-width="200px">
            <v-list :lines="false" density="compact" nav>
              <v-list-item prepend-icon="mdi-account-outline">
                <v-list-item-title>Perfil</v-list-item-title>
              </v-list-item>
              <v-list-item prepend-icon="mdi-logout">
                <v-list-item-title>Sair</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
const isDrawerOpen = ref(true);
</script>
