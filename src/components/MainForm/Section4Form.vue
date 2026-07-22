<template>
  <div>
    <h2 class="uppercase text-xl text-white mb-10">Visión</h2>

    <div class="space-y-8">
      <!-- Pregunta 1 -->
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-300">
          ¿Qué fue lo que más llamó tu atención de esta convocatoria?
        </label>

        <textarea
          rows="4"
          placeholder="Comparte qué despertó tu interés..."
          v-model="store.form.vision.convocatoria"
          class="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-green-500 resize-none"
        ></textarea>
      </div>

      <!-- Pregunta 2 -->
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-300">
          ¿Por qué quieres formar parte del grupo fundador de PROMOLIDER?
        </label>

        <textarea
          rows="4"
          v-model="store.form.vision.porque_founding_partner"
          placeholder="Cuéntanos por qué deseas ser parte de este proyecto..."
          class="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-green-500 resize-none"
        ></textarea>
      </div>

      <!-- Motivación -->
      <div>
        <label class="mb-4 block text-sm font-medium text-gray-300">
          ¿Qué te motiva más?
        </label>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label
            v-for="item in motivaciones"
            :key="item"
            class="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white transition hover:border-green-500"
          >
            <input
              type="radio"
              name="motivacion"
              :value="item"
              v-model="store.form.vision.motivacion"
              class="h-4 w-4 accent-green-500"
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
const motivaciones = [
  "Construir un legado",
  "Enseñar",
  "Liderar personas",
  "Crear un ecosistema",
  "Innovar",
  "Desarrollar una marca personal",
];
</script>
