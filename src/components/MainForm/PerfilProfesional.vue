<template>
  <div>
    <h2 class="uppercase text-xl text-white mb-10">Perfil Profesional</h2>

    <div class="space-y-8">
      <!-- Perfil -->
      <div>
        <label class="mb-4 block text-sm font-medium text-gray-300">
          ¿Cuál describe mejor tu perfil?
        </label>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label
            v-for="perfil in perfiles"
            :key="perfil"
            class="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white transition hover:border-green-500"
          >
            <input
              type="radio"
              name="perfil"
              :value="perfil"
              v-model="store.form.profesional.perfil"
              class="h-4 w-4 accent-green-500"
            />
            <span>{{ perfil }}</span>
          </label>
        </div>
      </div>

      <!-- Ocupación -->
      <div>
        <label class="mb-2 block text-sm font-medium text-gray-300">
          ¿A qué te dedicas actualmente?
        </label>

        <input
          type="text"
          placeholder="Describe tu actividad actual"
          v-model="store.form.profesional.ocupacion"
          class="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-green-500"
        />
      </div>

      <!-- Años de experiencia -->
      <div>
        <label class="mb-4 block text-sm font-medium text-gray-300">
          ¿Cuántos años llevas desarrollando personas o negocios?
        </label>

        <div class="space-y-3">
          <label
            v-for="item in experiencia"
            :key="item"
            class="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white transition hover:border-green-500"
          >
            <input
              type="radio"
              name="experiencia"
              :value="item"
              v-model="store.form.profesional.experiencia"
              class="h-4 w-4 accent-green-500"
            />
            <span>{{ item }}</span>
          </label>
        </div>
      </div>

      <!-- Equipos -->
      <div>
        <label class="mb-4 block text-sm font-medium text-gray-300">
          ¿Has dirigido comunidades o equipos?
        </label>

        <div class="space-y-3">
          <label
            v-for="item in equipos"
            :key="item"
            class="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white transition hover:border-green-500"
          >
            <input
              type="radio"
              name="equipos"
              :value="item"
              v-model="store.form.profesional.comunidades"
              class="h-4 w-4 accent-green-500"
            />
            <span>{{ item }}</span>
          </label>
        </div>
      </div>

      <!-- Conferencias -->
      <div>
        <label class="mb-4 block text-sm font-medium text-gray-300">
          ¿Has realizado entrenamientos, conferencias o masterclass?
        </label>

        <div class="space-y-3">
          <label
            v-for="item in conferencias"
            :key="item"
            class="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white transition hover:border-green-500"
          >
            <input
              type="radio"
              name="conferencias"
              v-model="store.form.profesional.entrenamientos"
              :value="item"
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
import { useApplicationStore } from "../../stores/AplicationStore";

const perfiles = [
  "Coach",
  "Mentor",
  "Consultor",
  "Empresario",
  "Conferencista",
  "Networker",
  "Creador de contenido",
  "Formador",
  "Otro",
];

const experiencia = [
  "Menos de 2 años",
  "2 a 5 años",
  "5 a 10 años",
  "Más de 10 años",
];

const equipos = [
  "Nunca",
  "Menos de 20 personas",
  "Entre 20 y 100 personas",
  "Más de 100 personas",
  "Más de 1000 personas",
];

const conferencias = [
  "Nunca",
  "Algunas veces",
  "Frecuentemente",
  "Es parte de mi profesión",
];

const store = useApplicationStore();
</script>
