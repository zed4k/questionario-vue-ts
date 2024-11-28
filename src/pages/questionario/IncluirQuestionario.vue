<script lang="ts" setup>
  import { defineExpose, ref } from 'vue';
  import http from '@/http';
  import type IQuestionario from '@/interfaces/IQuestionario';
  import type { VForm } from 'vuetify/components';
  import { useQuestionarioStore } from '@/stores/questionario';

  // ------------------------ data ------------------------
  const form = ref<VForm | null>(null);
  defineExpose({ form });
  const store = useQuestionarioStore();
  const snackbar = ref(false);
  const msg = ref(null as string | null);

  const questionario = ref<IQuestionario>({
    nomeQuestionario: null as string | null,
    ajuda: null as string | null,
  } as IQuestionario);

  // ------------------------ methods ------------------------
  const salvar = async () => {
    const validation = await form.value?.validate();
    const valid = validation?.valid;

    if (!valid) {
      alert('Preencha os campos obrigatórios');
      return;
    }

    const url = `${store.URL_API}/incluir`;

    http
      .post(url, questionario.value)
      .then((envelope) => {
        console.log(envelope);
        msg.value = 'Questionário salvo com sucesso';
        snackbar.value = true;
        form.value?.reset();
      })
      .catch((error) => {
        alert('Erro ao salvar questionário');
        console.error(error);
      });
  };
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card title="Incluir Questionário">
          <v-card-text>
            {{ questionario }}
            <v-form ref="form">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="questionario.nomeQuestionario"
                    label="Nome do questionário"
                    :rules="[(v) => !!v || 'Campo obrigatório']"
                    outlined
                    required
                  />
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="questionario.ajuda"
                    label="Ajuda"
                    :rules="[(v) => !!v || 'Campo obrigatório']"
                    outlined
                    required
                  />
                </v-col>
              </v-row>
              <v-row
                align="center"
                justify="center"
              >
                <v-col cols="auto">
                  <v-btn
                    color="primary"
                    @click="salvar"
                  >
                    Salvar
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar
      v-model="snackbar"
      vertical
    >
      <div class="text-subtitle-1 pb-2">Atenção</div>

      <p>{{ msg }}</p>

      <template #actions>
        <v-btn
          color="indigo"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
