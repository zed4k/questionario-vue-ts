import { createRouter, createWebHistory } from 'vue-router';
import DetalharQuestionario from '@/pages/questionario/DetalharQuestionario.vue';
import HomeQuestionario from '@/pages/questionario/HomeQuestionario.vue';
import IncluirQuestionario from '@/pages/questionario/IncluirQuestionario.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeQuestionario,
    },
    {
      path: '/questionario/incluir',
      name: 'IncluirQuestionario',
      component: IncluirQuestionario,
    },
    {
      path: '/questionario/:codigoQuestionario',
      name: 'DetalharQuestionario',
      component: DetalharQuestionario,
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
});

export default router;
