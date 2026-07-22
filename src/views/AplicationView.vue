<template>
  <main class="bg-black py-20">
    <div
      v-if="showSuccess"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
    >
      <div
        class="max-w-lg rounded-3xl border border-white/10 bg-[#111111] p-10 text-center shadow-2xl"
      >
        <h2 class="mb-6 text-2xl font-bold text-white">MENSAJE FINAL</h2>

        <p class="mb-5 font-semibold text-white">Gracias por aplicar.</p>

        <p class="mb-5 leading-relaxed text-gray-400">
          Has dado el primer paso para participar en uno de los procesos de
          selección más importantes del
          <span class="text-white"> pre-lanzamiento </span>
          de PROMOLIDER.
        </p>

        <p class="mb-5 leading-relaxed text-gray-400">
          Nuestro equipo revisará personalmente tu aplicación.
        </p>

        <p class="leading-relaxed text-gray-400">
          Si tu perfil está alineado con la visión del proyecto, recibirás una
          invitación para la siguiente etapa del proceso.
        </p>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-6">
      <div
        class="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-[#111111] p-10 shadow-2xl"
      >
        <Header />
        <p class="mb-6 text-sm text-gray-400 mt-10">
          Paso {{ currentStep + 1 }} de {{ steps.length }}
        </p>
        <form @submit.prevent="handleSubmit">
          <Transition name="fade" mode="out-in">
            <component :is="steps[currentStep]" :key="currentStep" />
          </Transition>

          <div class="mt-8 flex justify-between">
            <button
              type="button"
              @click="previousStep"
              :disabled="currentStep === 0"
              class="bg-green-600 text-white px-3 rounded-md cursor-pointer py-2"
            >
              Anterior
            </button>

            <button
              v-if="currentStep < steps.length - 1"
              type="button"
              @click="nextStep"
              class="bg-green-600 text-white px-3 rounded-md cursor-pointer py-2"
            >
              Siguiente
            </button>

            <button v-else type="submit">Enviar Postulación</button>
          </div>
          <!-- <pre class="mt-8 text-xs text-white"
            >{{ store.form }}
          </pre -->
          >
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import Header from "../components/MainForm/Header.vue";
import InformacionPersonal from "../components/MainForm/InformacionPersonal.vue";
import PerfilProfesional from "../components/MainForm/PerfilProfesional.vue";
import Section3Forn from "../components/MainForm/Section3Forn.vue";
import { onMounted, ref } from "vue";
import Section4Form from "../components/MainForm/Section4Form.vue";
import Section5Form from "../components/MainForm/Section5Form.vue";
import SectionFinalForm from "../components/MainForm/SectionFinalForm.vue";
import { useApplicationStore } from "../stores/aplicationStore.ts";
import aplicationService from "../services/aplicationService.ts";
import { useRouter } from "vue-router";

const showSuccess = ref(false);

const router = useRouter();
onMounted(() => {
  const lead = localStorage.getItem("applicationLead");

  if (lead) {
    const data = JSON.parse(lead);

    store.form.personal.nombre = data.nombre;

    store.form.personal.whatsapp = data.whatsapp;

    store.form.personal.email = data.email;
  }
});

const steps = [
  InformacionPersonal,
  PerfilProfesional,
  Section3Forn,
  Section4Form,
  Section5Form,
  SectionFinalForm,
];

const store = useApplicationStore();
const currentStep = ref(0);

const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++;
    console.log("Siguiente:", currentStep.value);
  }
};

const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
    console.log("Anterior:", currentStep.value);
  }
};

const handleSubmit = async () => {
  try {
    const payload = {
      ...store.form.personal,
      ...store.form.profesional,
      ...store.form.liderazgo,
      ...store.form.vision,

      disponibilidad: store.form.compromiso.disponibilidad === "si",

      entrenamiento_vivo: store.form.compromiso.entrenamientoVivo === "si",

      aportes: store.form.compromiso.aportes,

      porque_elegirte: store.form.final.porqueElegirte,

      proyecto_orgullo: store.form.final.proyectoOrgullo,

      sitio_web: store.form.personal.sitioWeb,
    };

    await aplicationService.create(payload);

    // limpiar datos temporales
    localStorage.removeItem("applicationLead");

    // mostrar mensaje
    showSuccess.value = true;

    // esperar 6 segundos
    setTimeout(() => {
      router.push("/");
    }, 6000);
  } catch (error) {
    console.error("ERROR BACKEND:", error.response?.data || error);
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.35s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
