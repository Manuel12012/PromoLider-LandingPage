<template>
  <div>
    <h2 class="uppercase text-xl text-white mb-10">Capacidad de Liderazgo</h2>

    <div class="space-y-8">
      <!-- Fortaleza -->
      <div>
        <label class="mb-4 block text-sm font-medium text-gray-300">
          ¿Cuál consideras que es tu mayor fortaleza?
        </label>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label
            v-for="item in fortalezas"
            :key="item"
            class="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white transition hover:border-green-500"
          >
            <input
              type="radio"
              name="fortaleza"
              :value="item"
              v-model="store.form.liderazgo.fortaleza"
              class="h-4 w-4 accent-green-500"
            />
            <span>{{ item }}</span>
          </label>
        </div>
      </div>

      <!-- Comunidad -->
      <div>
        <label class="mb-4 block text-sm font-medium text-gray-300">
          ¿Cuál es el tamaño aproximado de tu audiencia o comunidad?
        </label>

        <div class="space-y-3">
          <label
            v-for="item in comunidad"
            :key="item"
            class="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white transition hover:border-green-500"
          >
            <input
              type="radio"
              name="comunidad"
              :value="item"
              v-model="store.form.liderazgo.audiencia"
              class="h-4 w-4 accent-green-500"
            />
            <span>{{ item }}</span>
          </label>
        </div>
      </div>

      <!-- Canales -->
      <div>
        <label class="mb-4 block text-sm font-medium text-gray-300">
          ¿En qué canales tienes presencia?
        </label>

        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <label
            v-for="item in canales"
            :key="item"
            class="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white transition hover:border-green-500"
          >
            <input
              type="checkbox"
              name="canales"
              :value="item"
              v-model="store.form.liderazgo.canales"
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
const fortalezas = [
  "Liderazgo",
  "Comunicación",
  "Ventas",
  "Educación",
  "Marketing",
  "Tecnología",
  "Construcción de comunidades",
];

const comunidad = [
  "No tengo comunidad",
  "Menos de 500 personas",
  "500 a 2,000 personas",
  "2,000 a 10,000 personas",
  "Más de 10,000 personas",
];

const canales = [
  "Facebook",
  "Instagram",
  "LinkedIn",
  "TikTok",
  "YouTube",
  "WhatsApp",
  "Telegram",
  "Email",
];
</script>
