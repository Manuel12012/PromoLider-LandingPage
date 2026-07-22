<template>
  <section class="bg-black py-20">
    <div class="max-w-7xl mx-auto px-6">

      <h2 class="text-white text-2xl uppercase text-center font-bold">
        Tu visualización a un año
      </h2>

      <p class="text-gray-400 mt-7 text-center max-w-4xl mx-auto leading-7">
        Los profesionales con alto desempeño no toman decisiones por dinero;
        las toman por identidad. Si logras consolidar tu lugar entre los 5
        Founding Partners, tu realidad profesional experimentará un cambio
        significativo en tu posicionamiento profesional:
      </p>


      <!-- CARDS -->
      <div
        class="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-4 
          gap-5
        "
      >

        <article
          v-for="(item,index) in cards"
          :key="index"
          class="
            bg-secondary
            rounded-3xl
            px-8
            py-12
            mt-10
            border
            border-white/10
            hover:border-white/30
            transition
          "
        >

          <!-- ICON -->
          <div
            class="
              bg-white/10
              w-fit
              rounded-xl
              border
              border-white/10
              shadow-2xl
              p-3
            "
          >

            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <path
                :d="item.icon"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

            </svg>

          </div>


          <h3
            class="
              text-white
              text-2xl
              font-bold
              mt-5
            "
          >
            {{item.title}}
          </h3>


          <p
            class="
              text-gray-400
              leading-7
              mt-5
            "
          >
            {{item.description}}
          </p>

        </article>

      </div>



      <!-- REFLEXION -->

      <article
        class="
          bg-secondary
          px-8
          md:px-20
          py-20
          rounded-4xl
          mt-10
          relative
          overflow-hidden
        "
      >

        <div
          class="
            absolute
            top-0
            right-0
            p-20
            opacity-10
          "
        >

          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
          >

            <path
              d="M21.9999 11.65H16.1999C14.6699 11.65 13.6199 10.49 13.6199 9.07001V5.84998C13.6199 4.42998 14.6699 3.27002 16.1999 3.27002H19.4199C20.8399 3.27002 21.9999 4.42998 21.9999 5.84998V11.65Z"
              stroke="white"
              stroke-width="1.5"
            />

            <path
              d="M22 11.6499C22 17.6999 20.87 18.6998 17.47 20.7198"
              stroke="white"
              stroke-width="1.5"
            />

          </svg>

        </div>



        <h2
          class="
            text-white
            text-center
            text-xl
            uppercase
            tracking-[0.3em]
          "
        >
          Una pausa de reflexión
        </h2>


        <p
          class="
            text-white
            text-center
            text-2xl
            md:text-4xl
            leading-relaxed
            italic
            mt-10
          "
        >
          "Dentro de un año... si eres uno de los cinco Founding Partners...
          podrás mirar atrás y recordar este momento como el día en que
          decidiste pasar de desarrollar únicamente tu proyecto personal a
          ayudar a construir un ecosistema con impacto regional.

          No podemos prometerte resultados automáticos; pero sí podemos
          prometerte que, si eres seleccionado, trabajarás desde el origen
          exacto de una iniciativa que aspira a transformar la forma en que
          el conocimiento se crea, se distribuye y se escala en Latinoamérica."
        </p>



        <div
          class="
            flex
            items-center
            justify-center
            gap-6
            mt-14
          "
        >

          <span class="h-px w-12 bg-white/30"></span>

          <span class="text-white text-6xl opacity-70">
            •
          </span>

          <span class="h-px w-12 bg-white/30"></span>

        </div>


      </article>


    </div>
  </section>
</template>



<script setup lang="ts">

const cards = [

{
title:"Rostro Oficial de la categoría",

description:
"Liderarás las primeras Masterclass internacionales oficiales de la marca, posicionando tu marca personal frente a una comunidad hambrienta de guía.",

icon:
"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
},


{
title:"Orquestador de Ecosistemas",

description:
"Construirás conexiones estratégicas dentro de una red profesional diseñada para generar colaboración y crecimiento.",

icon:
"M12 2v20M2 12h20"
},


{
title:"Voz en el círculo de decisión",

description:
"Tu perspectiva tendrá participación directa en conversaciones estratégicas y decisiones importantes del ecosistema.",

icon:
"M12 2a10 10 0 100 20 10 10 0 000-20z"
},


{
title:"Participación en el crecimiento",

description:
"Serás parte activa del crecimiento de una iniciativa con visión regional y expansión internacional.",

icon:
"M3 3v18h18M7 16l4-5 3 3 5-7"
}

]


</script>