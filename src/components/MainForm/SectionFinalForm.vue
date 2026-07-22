<template>
  <div>
    <h2 class="mb-10 text-xl uppercase text-white">Preguntas Finales</h2>

    <div class="space-y-8">
      <!-- Pregunta 1 -->
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-300">
          ¿Por qué crees que deberíamos elegirte como uno de los cinco Founding
          Partners de PROMOLIDER?
        </label>

        <textarea
          rows="6"
          v-model="store.form.final.porqueElegirte"
          placeholder="Cuéntanos qué te diferencia, qué valor puedes aportar y por qué consideras que eres un candidato ideal..."
          class="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-green-500 resize-none"
        ></textarea>
      </div>

      <!-- Pregunta 2 -->
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-300">
          ¿Cuál ha sido el proyecto, empresa, comunidad o iniciativa que has
          construido y de la que te sientes más orgulloso?
        </label>

        <textarea
          rows="6"
          v-model="store.form.final.proyectoOrgullo"
          placeholder="Describe brevemente el proyecto y explica por qué representa un logro importante para ti..."
          class="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-green-500 resize-none"
        ></textarea>

        <p class="mt-3 text-sm text-gray-500">
          Puedes mencionar resultados, aprendizajes o el impacto que generó este
          proyecto.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useApplicationStore } from '../../stores/aplicationStore';


const store = useApplicationStore();
</script>
