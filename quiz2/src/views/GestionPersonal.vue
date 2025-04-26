<template>
  <div class="p-8">
    <BaseCard title="Gestión de Personal Médico">
      <!-- Cargar el componente actual basado en currentView -->
      <component :is="currentView" />
      
      <div class="mt-4">
        <!-- Pasar directamente el componente como argumento -->
        <BaseButton @click="setView(PerfilMedico)">Médico</BaseButton>
        <BaseButton @click="setView(PerfilEnfermero)">Enfermero</BaseButton>
        <BaseButton @click="setView(PerfilRecepcionista)">Recepcionista</BaseButton>
        <BaseButton @click="setView(PerfilPaciente)">Paciente</BaseButton>
      </div>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseCard from '@/components/BaseCard.vue';
import BaseButton from '@/components/BaseButton.vue';

// Importar los perfiles
import PerfilMedico from './perfiles/Medico.vue';
import PerfilEnfermero from './perfiles/Enfermero.vue';
import PerfilRecepcionista from './perfiles/Recepcionista.vue';
import PerfilPaciente from './perfiles/Paciente.vue';

// Declarar la vista actual como el componente directamente
const currentView = ref(PerfilMedico);  // Inicialmente se muestra PerfilMedico

// Cambiar la vista cuando se hace clic en los botones
const setView = (view: any) => {
  currentView.value = view;
};
</script>
