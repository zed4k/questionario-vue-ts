<script setup lang="ts">
import { ref } from 'vue';

const isDrawerOpen = ref(false);
const theme = ref('light');

// ------------------------ METHODS
const changeTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
};
</script>

<template>
  <v-app-bar
    class="border-b"
    app
  >
    <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen" />
    <v-toolbar-title>Questionário</v-toolbar-title>

    <template #append>
      <v-btn @click="() => changeTheme()">
        {{ theme === 'dark' ? 'Light' : 'Dark' }}
      </v-btn>
      <v-badge
        color="red"
        overlap
      >
        <template #badge>
          <v-icon>mdi-bell</v-icon>
        </template>
        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </v-badge>

      <v-menu>
        <template #activator="{ props }">
          <v-avatar v-bind="props">
            <v-img
              :src="`https://randomuser.me/api/portraits/men/${Math.floor(
                Math.random() * 100,
              )}.jpg`"
              alt="Avatar"
            />
          </v-avatar>
        </template>

        <v-card min-width="200px">
          <v-list
            lines="one"
            nav
            density="compact"
          >
            <v-list-item prepend-icon="mdi-account-outline">
              <v-item-list-title>Meu perfil</v-item-list-title>
            </v-list-item>
            <v-list-item prepend-icon="mdi-heart-outline">
              <v-item-list-title>Favoritos</v-item-list-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </template>
  </v-app-bar>
</template>
