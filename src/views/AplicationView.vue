<template>
  <main class="bg-black py-20">
    <div class="mx-auto max-w-7xl px-6">
      <div class="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-[#111111] p-10 shadow-2xl">
        <Header />
        <form>
          <InformacionPersonal />
          <PerfilProfesional />
          <Section3Forn />
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
</script>
