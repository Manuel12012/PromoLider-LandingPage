<template>
  <section class="bg-secondary py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 gap-5">
        <div class="col-span-1">
          <div class="space-y-5">
            <h2 class="uppercase text-3xl text-white">Eficiencia operativa</h2>
            <h1 class="text-5xl text-white">Protocolo de Despliegue</h1>
            <p class="leading-7 text-gray-400">
              Un sistema de alta velocidad diseñado para líderes con agendas
              críticas. Implementación técnica sin fricción.
            </p>
          </div>

          <div class="flex justify-between">
            <div class="bg-yellow-100/4 px-5 py-5 rounded-2xl mt-5">
              <p class="text-white text-2xl font-bold">3</p>
              <p class="text-white text-2xl font-bold">Semanas</p>
              <p class="text-gray-400">Timeline</p>
            </div>

            <div class="bg-yellow-100/4 px-10 py-5 rounded-2xl mt-5">
              <p class="text-white text-2xl font-bold">0</p>
              <p class="text-white text-2xl font-bold">Costo</p>
              <p class="text-gray-400">Inversion</p>
            </div>

            <div class="bg-yellow-100/4 px-10 py-5 rounded-2xl mt-5">
              <p class="text-white text-2xl font-bold">5-8</p>
              <p class="text-white text-2xl font-bold">horas</p>
              <p class="text-gray-400">Compromiso</p>
            </div>
          </div>
          <div class="mt-10">
            <ul class="relative border-l border-gold/30 ml-4">
              <!-- Paso 1 -->
              <li class="mb-10 ml-8 relative">
                <div class="absolute -left-[49px] top-[-4px] w-8 h-8">
                  <!-- Halo -->
                  <span
                    class="absolute inset-0 rounded-full bg-green-400/40 blur-lg"
                  ></span>

                  <!-- Punto -->
                  <span
                    class="absolute top-2 left-2 w-4 h-4 rounded-full bg-green-400 border-4 border-secondary shadow-[0_0_28px_10px_rgba(74,222,128,0.65)]"
                  ></span>
                </div>

                <h3 class="text-white font-bold">
                  Día 1, 2 y 4: Onboarding técnico
                </h3>
                <p class="text-gray-400">
                  Configuración de nodos de IA y acceso a infraestructura
                  central.
                </p>
              </li>

              <!-- Paso 2 -->
              <li class="mb-10 ml-8 relative">
                <div class="absolute -left-[49px] top-[-4px] w-8 h-8">
                  <!-- Halo -->
                  <span
                    class="absolute inset-0 rounded-full bg-green-400/20 blur-md"
                  ></span>

                  <!-- Punto -->
                  <span
                    class="absolute top-2 left-2 w-4 h-4 rounded-full bg-green-500 border-4 border-secondary shadow-[0_0_18px_6px_rgba(34,197,94,0.38)]"
                  ></span>
                </div>

                <h3 class="text-white font-bold">
                  Semana 2: Activación de red
                </h3>
                <p class="text-gray-400">
                  Despliegue de canales de distribución inteligentes y formación
                  de hubs.
                </p>
              </li>

              <!-- Paso 3 -->
              <li class="ml-8 relative">
                <div class="absolute -left-[49px] top-[-4px] w-8 h-8">
                  <!-- Halo -->
                  <span
                    class="absolute inset-0 rounded-full bg-green-400/8 blur-sm"
                  ></span>

                  <!-- Punto -->
                  <span
                    class="absolute top-2 left-2 w-4 h-4 rounded-full bg-green-600 border-4 border-secondary shadow-[0_0_8px_2px_rgba(22,163,74,0.15)]"
                  ></span>
                </div>

                <h3 class="text-white font-bold">
                  Semana 3 + Final: Cierre de Equity
                </h3>
                <p class="text-gray-400">
                  Formalización legal y lanzamiento oficial de la cohorte
                  fundadora.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-span-1 flex items-center">
          <div class="relative w-full">
            <img
              src="../assets/screen.png"
              alt=""
              class="w-full object-cover h-full rounded-xl"
            />

            <div
              class="absolute bottom-0 p-5 flex items-center justify-center text-white"
            >
              <div>
                <h3 class="uppercase text-white">Technical Insight</h3>
                <p class="italic leading-7">
                  "La arquitectura esta lista. Solo necesitamos a los operadores
                  del sistema."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
