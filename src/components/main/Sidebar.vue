<template>
  <v-list>
    <v-list-item
      prepend-icon="mdi-home"
      title="Home"
    />
    <v-list-item
      prepend-icon="mdi-account"
      title="Perfil"
    />

    <v-list-group value="Users">
      <template #activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-icon="mdi-account-group"
          title="Users"
        />
      </template>
      <v-list-item
        prepend-icon="mdi-currency-usd"
        title="Dados usuários"
      />
      <v-list-item
        prepend-icon="mdi-chart-line"
        title="Estatísticas"
      />
    </v-list-group>
    <v-list-group value="Users2">
      <template #activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-icon="mdi-account-group"
          title="Users"
        />
      </template>
      <v-list-item
        prepend-icon="mdi-currency-usd"
        title="Dados usuários"
      />
      <v-list-item
        prepend-icon="mdi-chart-line"
        title="Estatísticas"
      />
      <v-list-group value="Users3">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-group"
            title="Users"
          />
        </template>
        <v-list-item
          prepend-icon="mdi-currency-usd"
          title="Dados usuários"
        />
        <v-list-item
          prepend-icon="mdi-chart-line"
          title="Estatísticas"
        />
      </v-list-group>
    </v-list-group>
  </v-list>
</template>
