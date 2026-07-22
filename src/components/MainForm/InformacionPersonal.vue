<template>
  <div class="">
    <h2 class="uppercase text-xl text-white mb-10">Informacion Personal</h2>
    <div class="space-y-6">
      <!-- <div>
        <label class="mb-2 block text-sm font-medium text-gray-300">
          Nombre completo
        </label>

        <input
          type="text"
          placeholder="Ingresa tu nombre"
          class="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-green-500"
        />
      </div>

      <div>
        <label class="mb-2 block text-sm font-medium text-gray-300">
          Apellido
        </label>

        <input
          type="text"
          placeholder="Ingresa tu nombre"
          class="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-green-500"
        />
      </div> -->

      <div>
        <label class="mb-2 block text-sm font-medium text-gray-300">
          Pais
        </label>

        <input
          type="text"
          placeholder="Ejm. Perú"
          v-model="store.form.personal.pais"
          class="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-green-500"
        />
      </div>

      <div>
        <label class="mb-2 block text-sm font-medium text-gray-300">
          Ciudad
        </label>

        <input
          type="text"
          placeholder="Ejm. Lima"
          v-model="store.form.personal.ciudad"
          class="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-green-500"
        />
      </div>

      <!-- <div>
        <label class="mb-2 block text-sm font-medium text-gray-300">
          WhatsApp
        </label>

        <input
          type="text"
          placeholder="Ingresa tu nombre"
          class="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-green-500"
        />
      </div>

      <div>
        <label class="mb-2 block text-sm font-medium text-gray-300">
          Correo Electronico
        </label>

        <input
          type="text"
          placeholder="Ingresa tu nombre"
          class="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-green-500"
        />
      </div> -->

      <div>
        <label class="mb-2 block text-sm font-medium text-gray-300">
          LinkedIn
        </label>

        <input
          type="text"
          placeholder="prueba@linkedin.com"
          v-model="store.form.personal.linkedin"
          class="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-green-500"
        />
      </div>

      <div>
        <label class="mb-2 block text-sm font-medium text-gray-300">
          Instagram
        </label>

        <input
          type="text"
          placeholder="usuario.com"
          v-model="store.form.personal.instagram"
          class="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-green-500"
        />
      </div>

      <div>
        <label class="mb-2 block text-sm font-medium text-gray-300">
          Sitio web
        </label>

        <input
          type="text"
          placeholder="www.ejemplo.com"
          v-model="store.form.personal.sitio_web"
          class="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-green-500"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApplicationStore } from '../../stores/aplicationStore';

const store = useApplicationStore();
</script>
