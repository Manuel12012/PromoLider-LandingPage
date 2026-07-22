<script setup>
import Hero from "../components/Hero.vue";
import NavBar from "../components/NavBar.vue";
import Section2 from "../components/Section2.vue";
import Section3 from "../components/Section3.vue";
import Section4 from "../components/Section4.vue";
import Section5 from "../components/Section5.vue";
import Section6 from "../components/Section6.vue";
import Section7 from "../components/Section7.vue";
import Section8 from "../components/Section8.vue";
import Section9 from "../components/Section9.vue";
import Section10 from "../components/Section10.vue";
import Section11 from "../components/Section11.vue";
import Form from "../components/Form.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <NavBar />
  <main>
    <!-- HERO-->
    <Hero />
    <Section2 />
    <section id="about">
      <Section3 />
    </section>
    <Section4 />
    <Section5 />
    <section id="plans">
      <Section6 />
    </section>
    <Section7 />
    <section id="deployment">
            <Section8 />

    </section>
    <Section9 />
    <Section10 />
    <Section11 />
    <section id="form">
      <Form />
    </section>
    <Footer />
  </main>
</template>
