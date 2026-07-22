<template>
  <div>
    <h2 class="mb-10 text-xl uppercase text-white">Compromiso</h2>

    <div class="space-y-8">
      <!-- Tiempo semanal -->
      <div>
        <label class="mb-4 block text-sm font-medium text-gray-300">
          ¿Podrías dedicar entre 5 y 8 horas semanales durante el
          pre-lanzamiento?
        </label>

        <div class="space-y-3">
          <label
            v-for="item in disponibilidad"
            :key="item"
            class="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white transition hover:border-green-500"
          >
            <input
              type="radio"
              name="tiempo"
              :value="item"
              v-model="store.form.compromiso.disponibilidad"
              class="h-4 w-4 accent-green-500"
            />
            <span>{{ item }}</span>
          </label>
        </div>
      </div>

      <!-- Entrenamientos -->
      <div>
        <label class="mb-4 block text-sm font-medium text-gray-300">
          ¿Estás dispuesto a participar en entrenamientos en vivo?
        </label>

        <div class="space-y-3">
          <label
            v-for="item in disponibilidad"
            :key="`entrenamiento-${item}`"
            class="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white transition hover:border-green-500"
          >
            <input
              type="radio"
              name="entrenamientos"
              v-model="store.form.compromiso.entrenamientoVivo"
              :value="item"
              class="h-4 w-4 accent-green-500"
            />
            <span>{{ item }}</span>
          </label>
        </div>
      </div>

      <!-- Aportes -->
      <div>
        <label class="mb-4 block text-sm font-medium text-gray-300">
          Si fueras seleccionado, ¿qué estarías dispuesto a aportar?
        </label>

        <p class="mb-4 text-sm text-gray-500">
          Puedes seleccionar más de una opción.
        </p>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label
            v-for="item in aportes"
            :key="item"
            class="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white transition hover:border-green-500"
          >
            <input
              type="checkbox"
              name="aportes"
              :value="item"
              v-model="store.form.compromiso.aportes"
              class="h-4 w-4 rounded accent-green-500"
            />
            <span>{{ item }}</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useApplicationStore } from '../../stores/aplicationStore';


const store = useApplicationStore();
const disponibilidad = ["Sí", "No"];

const aportes = [
  "Tiempo",
  "Conocimiento",
  "Comunidad",
  "Experiencia",
  "Capacidad comercial",
  "Relaciones estratégicas",
];
</script>
