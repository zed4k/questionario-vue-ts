<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useQuestionarioStore } from '@/stores/questionario';
  import http from '@/http';
  import type IQuestionario from '@/interfaces/IQuestionario';

  // ------------------------ data ------------------------
  const store = useQuestionarioStore();
  const route = useRoute();
  const router = useRouter();

  const msg = ref(null as string | null);
  const items = ref([] as IQuestionario[]);
  const page = ref(1);

  // ------------------------ methods ------------------------
  // FETCH QUESTIONARIOS
  const fetchQuestionarios = async () => {
    const url = `${store.URL_API}/listar`;
    http
      .get(url)
      .then((response) => {
        const envelope = response.data;
        items.value = envelope.objeto;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // ------------------------ lifecycle ------------------------
  onMounted(() => {
    fetchQuestionarios();
  });
</script>

<template>
  <h1>{{ msg }}</h1>
  <v-container>
    {{ items }}
    <template
      v-for="item in items"
      :key="item.codigoQuestionario"
    >
      <v-card @click="() => router.push(`/questionario/${item.codigoQuestionario}`)">
        <v-card-title>{{ item.codigoQuestionario }} - {{ item.nomeQuestionario }}</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="2"> <b>Situação: </b> {{ item.nomeSituacao }} </v-col>
            <v-col cols="6"> <b>Ajuda: </b> {{ item.ajuda }} </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </template>
  </v-container>
</template>
