<template>
  <main class="bg-black py-20">
    <div class="mx-auto max-w-7xl px-6">
      <div
        class="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-[#111111] p-10 shadow-2xl"
      >
        <Header />
        <p class="mb-6 text-sm text-gray-400 mt-10">
          Paso {{ currentStep + 1 }} de {{ steps.length }}
        </p>
        <form>
          <Transition name="fade" mode="out-in">
            <component :is="steps[currentStep]" :key="currentStep" />
          </Transition>

          <div class="mt-8 flex justify-between">
            <button
              type="button"
              @click="previousStep"
              :disabled="currentStep === 0"
              class="bg-green-500 text-white px-2 rounded-md cursor-pointer py-1"
            >
              Anterior
            </button>

            <button
              v-if="currentStep < steps.length - 1"
              type="button"
              @click="nextStep"
              class="bg-green-500 text-white px-2 rounded-md cursor-pointer py-1"
            >
              Siguiente
            </button>

            <button v-else type="submit">Enviar Postulación</button>
          </div>
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
import { ref } from "vue";
import Section4Form from "../components/MainForm/Section4Form.vue";
import Section5Form from "../components/MainForm/Section5Form.vue";
import SectionFinalForm from "../components/MainForm/SectionFinalForm.vue";

const steps = [
  InformacionPersonal,
  PerfilProfesional,
  Section3Forn,
  Section4Form,
  Section5Form,
  SectionFinalForm,
];

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