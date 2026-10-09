/* =====================================================
   AQUÍ EDITAS TODO EL CONTENIDO DE LA INVITACIÓN
   (no necesitas tocar el HTML ni el CSS)
   ===================================================== */
const INVITACION = {
  nombre: "María José",

  frase:
    "Hay momentos inolvidables que se atesoran con el corazón para siempre. Por esa razón, con la alegría y emoción, quiero compartir contigo esta noche maravillosa celebrando juntos mis XV años.",

  // Fecha y hora del evento (formato AAAA-MM-DDTHH:MM:SS-05:00, hora de Colombia)
  fecha: "2026-11-28T18:00:00-05:00",

  padres: ["Nombre del papá", "Nombre de la mamá"],
  padrinos: ["Nombre del padrino", "Nombre de la madrina"],

  misa: {
    titulo: "Misa de Agradecimiento",
    hora: "6:00 PM",
    lugar: "Iglesia (por confirmar)",
    direccion: "Dirección pendiente",
    mapa: "" // pega aquí el enlace de Google Maps; si está vacío el botón se oculta
  },

  recepcion: {
    titulo: "Recepción",
    hora: "8:00 PM",
    lugar: "Salón (por confirmar)",
    direccion: "Dirección pendiente",
    mapa: ""
  },

  itinerario: [
    { hora: "6:00 PM", texto: "Misa" },
    { hora: "8:00 PM", texto: "Llegada" },
    { hora: "8:30 PM", texto: "Vals" },
    { hora: "9:00 PM", texto: "Cena" },
    { hora: "10:00 PM", texto: "Fiesta" },
    { hora: "2:00 AM", texto: "Despedida" }
  ],

  vestimenta: {
    titulo: "Etiqueta",
    texto:
      "Con mucho cariño, les pedimos evitar el tono rosa pastel y el durazno, ya que están reservados para la quinceañera. Estos son los colores sugeridos:",
    paleta: [
      { nombre: "Verde salvia", color: "#9cae95" },
      { nombre: "Azul empolvado", color: "#9fb6c9" },
      { nombre: "Lavanda", color: "#b9a6cf" },
      { nombre: "Burdeos", color: "#7d2f45" },
      { nombre: "Champaña", color: "#d9c3a0" }
    ]
  },

  regalo: {
    texto:
      "Ahora mis sueños se materializan. Mi mayor regalo es compartir este día contigo, pero si deseas apoyarme, puedes hacerlo con una transferencia. Gracias por cada detalle.",
    banco: "Nequi",
    cuenta: "XXXXXX",
    titular: "" // opcional: nombre del titular
  },

  confirmacion: {
    whatsapp: "573000000000", // país + número, sin + ni espacios (57 = Colombia)
    fechaLimite: "15 de noviembre",
    mensaje: "¡Hola! Soy {nombre} y confirmo mi asistencia a los XV años de {quinceanera}."
  },

  despedida: "¡Te esperamos!",

  // Fotos: reemplaza los archivos de assets/img/ por los reales
  // (mismo nombre) o cambia aquí las rutas (.jpg, .png, .webp).
  fotos: {
    portada: "assets/img/portada.svg",   // dentro del arco
    retrato: "assets/img/retrato.svg",   // foto grande del centro
    galeria1: "assets/img/galeria1.svg", // foto debajo de confirmar asistencia
    galeria2: "assets/img/galeria2.svg"  // foto final
  }
};
