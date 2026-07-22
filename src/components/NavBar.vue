<template>
  <nav
    class="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-lg"
  >
    <div class="max-w-7xl mx-auto px-5">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <h1
          @click="toIndex"
          class="cursor-pointer text-3xl font-bold text-green-500"
        >
          PromoLider
        </h1>

        <!-- Desktop -->
        <div class="hidden lg:flex items-center gap-10 text-gray-300">
          <a href="#plans" class="transition hover:text-white"> Planes </a>

          <a href="#deployment" class="transition hover:text-white">
            ¿Cómo lo haremos?
          </a>

          <a href="#about" class="transition hover:text-white">
            ¿Quiénes somos?
          </a>
        </div>

        <!-- Desktop Button -->
        <div class="hidden lg:block">
          <a
            href="#form"
            class="rounded-xl bg-green-600 px-6 py-3 font-medium text-black transition hover:bg-green-500"
          >
            Aplicar ahora
          </a>
        </div>

        <!-- Mobile Button -->
        <button @click="menuOpen = !menuOpen" class="lg:hidden text-white">
          <svg
            v-if="!menuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-5"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-5"
      >
        <div v-if="menuOpen" class="lg:hidden pb-6">
          <div
            class="rounded-2xl border border-white/10 bg-[#111111] p-6 shadow-2xl"
          >
            <div class="flex flex-col gap-6 text-center text-lg text-gray-300">
              <a
                href="#plans"
                @click="closeMenu"
                class="transition hover:text-green-500"
              >
                Planes
              </a>

              <a
                href="#deployment"
                @click="closeMenu"
                class="transition hover:text-green-500"
              >
                ¿Cómo lo haremos?
              </a>

              <a
                href="#about"
                @click="closeMenu"
                class="transition hover:text-green-500"
              >
                ¿Quiénes somos?
              </a>

              <a
                href="#form"
                @click="closeMenu"
                class="rounded-xl bg-green-600 py-3 font-semibold text-black transition hover:bg-green-500"
              >
                Aplicar ahora
              </a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const menuOpen = ref(false);

const toIndex = () => {
  menuOpen.value = false;
  router.push("/");
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>
