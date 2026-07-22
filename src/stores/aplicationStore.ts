import { defineStore } from "pinia";

export const useApplicationStore = defineStore("application", {
  state: () => ({
    form: {
      personal: {
        nombre: "",

        pais: "",
        ciudad: "",
        whatsapp: "",
        email: "",

        linkedin: "",
        instagram: "",
        sitio_web: "",
      },

      profesional: {
        perfil: "",
        ocupacion: "",
        experiencia: "",
        comunidades: "",
        entrenamientos: "",
      },

      liderazgo: {
        fortaleza: "",
        audiencia: "",
        canales: [] as string[],
      },

      vision: {
        convocatoria: "",
        porque_founding_partner: "",
        motivacion: "",
      },

      compromiso: {
        disponibilidad: "",
        entrenamientoVivo: "",
        aportes: [] as string[],
      },

      final: {
        porqueElegirte: "",
        proyectoOrgullo: "",
      },
    },
  }),
});
