<script setup lang="ts">
import CheckIcon from "../icons/CheckIcon.vue";

const plans = [
  {
    title: "Miembro Común",
    type: "normal",
    capacity: "Capacidad: Ilimitada",
    features: [
      "Acceso público al ecosistema.",
      "Uso de la tecnología para optimizar y desarrollar sus operaciones.",
      "Gestión independiente de su negocio dentro de la plataforma.",
      "Integración al ecosistema junto a otros profesionales.",
      "Participación en las herramientas y recursos disponibles para miembros.",
    ],
  },

  {
    title: "Founding Partner",
    type: "exclusive",
    capacity: "Capacidad: Solo 5 plazas",
    features: [
      "Acceso exclusivo al Programa Fundacional.",
      "Cupo limitado a únicamente cinco líderes seleccionados.",
      "Participación activa en la etapa de pre-lanzamiento de la marca.",
      "Rol estratégico en la construcción y evolución del ecosistema.",
      "Integración al Programa de Vinculación Estratégica de la marca.",
      "Oportunidad de colaborar directamente en el desarrollo inicial del proyecto.",
    ],
  },
];
</script>

<template>
  <section class="bg-[#131313] py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          :class="
            plan.type === 'exclusive'
              ? 'border-[#E4BB61] bg-[#E4BB61]/15'
              : 'border-gray-500 bg-[#0d0d0d]'
          "
          class="relative border p-8 md:p-14 rounded-2xl transition hover:-translate-y-1 duration-300"
        >
          <!-- BADGE -->

          <div
            v-if="plan.type === 'exclusive'"
            class="absolute top-0 right-0 w-28 h-12 rounded-tr-2xl rounded-bl-2xl bg-[#E4BB61] flex items-center justify-center font-bold text-black"
          >
            Exclusivo
          </div>

          <h2
            :class="plan.type === 'exclusive' ? 'text-[#E4BB61]' : 'text-white'"
            class="text-3xl md:text-4xl font-bold"
          >
            {{ plan.title }}
          </h2>

          <ul class="text-gray-400 leading-8 mt-10 space-y-4">
            <li
              v-for="(feature, i) in plan.features"
              :key="i"
              class="flex gap-3 items-start"
            >
              <CheckIcon
                :color="plan.type === 'exclusive' ? 'text-[#E4BB61]' : ''"
              />

              <span>
                {{ feature }}
              </span>
            </li>
          </ul>

          <button
            :class="
              plan.type === 'exclusive'
                ? 'bg-[#E4BB61] text-black hover:bg-[#f1ca76]'
                : 'border-gray-700 text-gray-400 hover:border-gray-400'
            "
            class="border rounded-lg w-full mt-10 py-4 transition font-semibold"
          >
            {{ plan.capacity }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
