import { ref } from 'vue';
import { defineStore } from 'pinia';
import http from '@/http';
import type IQuestionario from '@/interfaces/IQuestionario';
import type IEnvelope from '@/interfaces/IEnvelope';

type State = {
  questionario: IQuestionario | null;
  envelope: IEnvelope | null;
  URL_API: string;
};

export const useQuestionarioStore = defineStore('questionario', {
  state: (): State => {
    return {
      questionario: null as IQuestionario | null,
      envelope: null as IEnvelope | null,
      URL_API: '/questionario',
    };
  },
  actions: {
    fetchQuestionario(id: number) {
      http.get<IQuestionario>(`/${id}`).then((response) => {
        console.log(response);
        this.envelope = response.data as unknown as IEnvelope;
        this.questionario = this.envelope?.objeto as IQuestionario;
      });
    },
  },
  //   // fetchDisco(id: number) {
  //   //   http.get<IDisco>(`/${id}`).then((response) => {
  //   //     this.envelope = response.data;
  //   //     this.disco = this.envelope?.objeto;
  //   //   });
  //   // },
  //   // updateDisco(disco: IDisco) {
  //   //   http.put<IDisco>(`/${disco.id}`, disco).then((response) => {
  //   //     this.envelope = response.data;
  //   //     this.disco = this.envelope?.objeto;
  //   //   });
  //   // },
  // },
});
