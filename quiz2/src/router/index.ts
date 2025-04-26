import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'GestionPersonal',
    component: () => import('../views/GestionPersonal.vue')  // Carga dinámica de la vista
  },
  // otras rutas si las tienes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
