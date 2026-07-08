<script setup lang="ts">
import CheckIcon from "../icons/CheckIcon.vue";
</script>

<template>
  <section class="bg-[#131313] py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 gap-12 items-center">
        <!--CONTENIDO-->
        <div
          class="col-span-1 border border-gray-500 p-14 bg-mist-950 rounded-2xl"
        >
          <h2 class="text-4xl text-white font-bold">Miembro Comun</h2>

          <ul class="text-gray-400 leading-10 mt-10">
            <li class="flex gap-3 items-center">
              <CheckIcon />
              <span>Acceso público al ecosistema.</span>
            </li>
            <li class="flex gap-3 items-center">
              <CheckIcon />
              Uso de la tecnología para optimizar y desarrollar sus operaciones.
            </li>
            <li class="flex gap-3 items-center">
              <CheckIcon />
              Gestión independiente de su negocio dentro de la plataforma.
            </li>
            <li class="flex gap-3 items-center">
              <CheckIcon />
              Integración al ecosistema junto a otros profesionales.
            </li>
            <li class="flex gap-3 items-center">
              <CheckIcon />
              Participación en las herramientas y recursos disponibles para
              miembros.
            </li>
          </ul>

          <button
            class="border border-gray-800 rounded-lg w-full text-gray-400 mt-10 py-4"
          >
            Capacidad: Ilimitada
          </button>
        </div>

        <div
          class="col-span-1 relative border border-[#E4BB61] p-14 rounded-2xl bg-[#E4BB61]/15"
        >
          <div
            class="absolute top-0 right-0 w-25 h-12 rounded-tr-2xl rounded-bl-2xl bg-[#E4BB61] flex items-center justify-center font-bold"
          >
            Exclusivo
          </div>
          <h2 class="text-4xl font-bold text-[#E4BB61]">Founding Partner</h2>

          <ul class="text-gray-400 leading-10 mt-10">
            <li class="flex gap-3 items-center">
              <CheckIcon color="text-[#E4BB61]" />
              Acceso exclusivo al Programa Fundacional.
            </li>
            <li class="flex gap-3 items-center">
              <CheckIcon color="text-[#E4BB61]" />
              Cupo limitado a únicamente cinco líderes seleccionados.
            </li>
            <li class="flex gap-3 items-center">
              <CheckIcon color="text-[#E4BB61]" />
              Participación activa en la etapa de pre-lanzamiento de la marca.
            </li>
            <li class="flex gap-3 items-center">
              <CheckIcon color="text-[#E4BB61]" />
              Rol estratégico en la construcción y evolución del ecosistema.
            </li>
            <li class="flex gap-3 items-center">
              <CheckIcon color="text-[#E4BB61]" />
              Integración al Programa de Vinculación Estratégica de la marca.
            </li>
            <li class="flex gap-3 items-center">
              <CheckIcon color="text-[#E4BB61]" />
              Oportunidad de colaborar directamente en el desarrollo inicial del
              proyecto.
            </li>
          </ul>
          <button
            class="border border-gray-800 rounded-lg w-full text-gray-900 mt-10 py-4 bg-[#E4BB61]"
          >
            Capacidad: Solo 5 plazas
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
