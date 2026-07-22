<template>
  <section class="bg-secondary py-16 sm:py-20">
    <div class="max-w-7xl mx-auto px-6 sm:px-8">

      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
      >

        <!-- CONTENIDO -->
        <div>

          <div class="space-y-5">

            <h2
              class="uppercase text-2xl sm:text-3xl text-white"
            >
              Eficiencia operativa
            </h2>

            <h1
              class="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold"
            >
              Protocolo de Despliegue
            </h1>

            <p
              class="leading-7 text-gray-400 max-w-xl"
            >
              Un sistema de alta velocidad diseñado para líderes con agendas
              críticas. Implementación técnica sin fricción.
            </p>

          </div>


          <!-- MÉTRICAS -->
          <div
            class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
          >

            <div
              class="bg-yellow-100/4 px-5 py-5 rounded-2xl"
            >
              <p class="text-white text-2xl font-bold">
                3
              </p>

              <p class="text-white text-xl font-bold">
                Semanas
              </p>

              <p class="text-gray-400">
                Timeline
              </p>
            </div>


            <div
              class="bg-yellow-100/4 px-5 py-5 rounded-2xl"
            >
              <p class="text-white text-2xl font-bold">
                0
              </p>

              <p class="text-white text-xl font-bold">
                Costo
              </p>

              <p class="text-gray-400">
                Inversión
              </p>
            </div>


            <div
              class="bg-yellow-100/4 px-5 py-5 rounded-2xl"
            >
              <p class="text-white text-2xl font-bold">
                5-8
              </p>

              <p class="text-white text-xl font-bold">
                Horas
              </p>

              <p class="text-gray-400">
                Compromiso
              </p>
            </div>

          </div>



          <!-- TIMELINE -->
          <div class="mt-12">

            <ul class="relative border-l border-green-500/30 ml-4">

              <li
                v-for="(step,index) in [
                  {
                    title:'Día 1, 2 y 4: Onboarding técnico',
                    text:'Configuración de nodos de IA y acceso a infraestructura central.'
                  },
                  {
                    title:'Semana 2: Activación de red',
                    text:'Despliegue de canales de distribución inteligentes y formación de hubs.'
                  },
                  {
                    title:'Semana 3 + Final: Cierre de Equity',
                    text:'Formalización legal y lanzamiento oficial de la cohorte fundadora.'
                  }
                ]"
                :key="index"
                class="mb-10 ml-8 relative"
              >

                <div
                  class="absolute -left-[41px] top-1
                         w-5 h-5 rounded-full
                         bg-green-500
                         border-4 border-secondary
                         shadow-[0_0_20px_5px_rgba(34,197,94,0.35)]"
                ></div>


                <h3
                  class="text-white font-bold"
                >
                  {{ step.title }}
                </h3>


                <p
                  class="text-gray-400 leading-7"
                >
                  {{ step.text }}
                </p>

              </li>

            </ul>

          </div>

        </div>



        <!-- IMAGEN -->
        <div
          class="flex items-center"
        >

          <div
            class="relative w-full
                   h-[400px] sm:h-[550px]"
          >

            <img
              src="../assets/screen.png"
              alt=""
              class="w-full h-full
                     object-cover rounded-xl"
            />


            <div
              class="absolute bottom-0 left-0 right-0
                     p-6
                     bg-gradient-to-t
                     from-black
                     to-transparent
                     text-white"
            >

              <h3
                class="uppercase"
              >
                Technical Insight
              </h3>


              <p
                class="italic leading-7"
              >
                "La arquitectura esta lista. Solo necesitamos a los operadores
                del sistema."
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>