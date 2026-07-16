<template>
  <section class="bg-black py-20">
    <div class="mx-auto max-w-7xl px-6">
      <div class="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-[#111111] p-10 shadow-2xl">
        <!-- Encabezado -->
        <div class="mb-8 text-center">
          <span
            class="inline-block rounded-full bg-green-600 px-4 py-1 text-sm font-semibold text-white"
          >
            ÚLTIMO PASO
          </span>

          <h2 class="mt-4 text-3xl font-bold text-white">
            Aplicación para la Selección Final
          </h2>

          <p class="mt-3 text-gray-400">
            Completa la información con precisión. Revisaremos tu solicitud y,
            si eres seleccionado, nos pondremos en contacto contigo para el
            siguiente paso.
          </p>
        </div>

        <!-- Formulario -->
        <form class="space-y-6">
          <div>
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
              Número telefónico
            </label>

            <input
              type="tel"
              placeholder="+51 999 999 999"
              class="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-green-500"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-gray-300">
              Correo electrónico
            </label>

            <input
              type="email"
              placeholder="correo@ejemplo.com"
              class="w-full rounded-xl border border-white/10 bg-[#1A1A1A] px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-green-500"
            />
          </div>

          <button
            type="submit"
            class="w-full rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-500"
          >
            Enviar mi aplicación
          </button>

          <p class="text-center text-sm text-gray-500">
            Tu información será tratada de forma confidencial y únicamente será
            utilizada para evaluar tu postulación.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>