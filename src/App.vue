<script setup lang="ts">
  import { ref } from 'vue';

  const drawer = ref(true);
  const theme = ref('light');

  const itemsMenu = [
    {
      title: 'Questionário',
      value: 'questionario',
      active: true,
      icon: 'mdi-file',
      subitens: [
        {
          title: 'Incluir questionário',
          icon: 'mdi-plus',
          routeName: 'IncluirQuestionario',
        },
        {
          title: 'Foo 2',
          value: 'foo2',
          icon: 'mdi-file-question',
        },
      ],
    },
    {
      title: 'Avaliação',
      value: 'avaliacao',
      active: false,
      icon: 'mdi-file-question',
    },
  ];
</script>
<template>
  <v-app :theme="theme">
    <v-app-bar
      color="primary"
      prominent
    >
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      />

      <v-toolbar-title>Questionário</v-toolbar-title>

      <v-spacer />

      <template v-if="$vuetify.display.mdAndUp">
        <v-btn
          icon="mdi-magnify"
          variant="text"
        />

        <v-btn
          icon="mdi-filter"
          variant="text"
        />
      </template>

      <v-btn
        icon="mdi-dots-vertical"
        variant="text"
      />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          prepend-icon="mdi-home"
          title="Home"
          :to="{ name: 'home' }"
        />

        <!-- <span
            v-for="item in itemsMenu"
            :key="item.title"
          >
            <v-list-item
              v-if="!item.subitens"
              :prepend-icon="item.icon"
              :title="item.title"
            />

            <v-list-group
              v-if="item.subitens"
              :value="item.title"
            >
              <template #activator="{ props }">
                <v-list-item
                  v-bind="props"
                  :prepend-icon="item.icon"
                  :title="item.title"
                />

                <span
                  v-for="subitem in item.subitens"
                  :key="subitem.title"
                >
                  <v-list-item
                    :prepend-icon="subitem.icon"
                    :title="subitem.title"
                  />
                </span>
              </template>
            </v-list-group>
          </span> -->

        <v-list-group value="Questionário">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-file"
              title="Questionário"
            />
          </template>
          <v-list-item
            title="Incluir questionário"
            :to="{ name: 'IncluirQuestionario' }"
          />
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- <v-card-text>
          <h1>Questionário</h1>
        </v-card-text> -->
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
