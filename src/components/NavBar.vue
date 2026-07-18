<template>
  <nav class="bg-black/90 border-b border-gray-500 sticky top-0 z-50 backdrop-blur-xs">
    <div class="flex justify-around p-5 items-center">
      <div>
        <h1 class="text-4xl text-green-600 font-bold" @click="toIndex">PromoLider</h1>
      </div>

      <div class="text-gray-300 flex gap-5">
        <a href="">Planes</a>
        <a href="">Contactanos</a>
        <a href="">Quienes somos?</a>
      </div>

      <div>
        <button class="rounded-2xl bg-green-600 hover:bg-green-500 px-4 py-3 cursor-pointer">
            Aplicar ahora
        </button>
      </div>
    </div>
  </nav>
</template>


<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const toIndex = ()=>{
  router.push("/")
}
</script>
