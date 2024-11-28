<script lang="ts" setup>
  import { useRoute, useRouter } from 'vue-router';
  import { useQuestionarioStore } from '@/stores/questionario';

  // ------------------------ data ------------------------
  const store = useQuestionarioStore();
  const route = useRoute();
  const router = useRouter();

  const codigoQuestionario =
    'codigoQuestionario' in route.params ? Number(route.params.codigoQuestionario) : 0;
  // ------------------------ methods ------------------------

  // ------------------------ lifecycle ------------------------
  // FETCH QUESTIONARIO
  onMounted(() => {
    store.fetchQuestionario(codigoQuestionario);
  });
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card title="Detalhar Questionário">
          <v-card-text title="">
            {{ store.questionario }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
