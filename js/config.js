/* =====================================================
   AQUÍ EDITAS TODO EL CONTENIDO DE LA INVITACIÓN
   (no necesitas tocar el HTML ni el CSS)
   ===================================================== */
const INVITACION = {
  nombre: "Maríajose",

  frase:
    "Hay momentos inolvidables que se atesoran con el corazón para siempre. Por esa razón, con la alegría y emoción, quiero compartir contigo esta noche maravillosa celebrando juntos mis XV años.",

  // Fecha y hora del evento (formato AAAA-MM-DDTHH:MM:SS-05:00, hora de Colombia)
  fecha: "2026-11-28T16:00:00-05:00",

  padres: ["Mauricio Fernandez", "Marcela Gómez"],

  misa: {
    titulo: "Misa de Agradecimiento",
    hora: "4:00 PM",
    lugar: "Capilla del Santísimo",
    direccion: "Villapinzón, Cundinamarca",
    foto: "", // opcional: foto circular del lugar, ej. "assets/img/capilla.jpg"
    mapa: "https://maps.app.goo.gl/5Nj7PoErPMbHnu5M6" // pega aquí el enlace de Google Maps; si está vacío el botón se oculta
  },

  recepcion: {
    titulo: "Recepción",
    hora: "8:00 PM",
    lugar: "Salón de eventos Brasas y Sazón",
    direccion: "Villapinzón, Cundinamarca",
    foto: "",
    mapa: "https://maps.app.goo.gl/FeQfFJA2snRc9DDs8"
  },

  // iconos disponibles: misa, llegada, vals, cena, foto, fiesta, brindis, despedida, corazon
  itinerario: [
    { hora: "4:00 PM", texto: "Misa", icono: "misa" },
    { hora: "8:00 PM", texto: "Llegada", icono: "llegada" },
    { hora: "8:30 PM", texto: "Vals", icono: "vals" },
    { hora: "9:00 PM", texto: "Cena", icono: "cena" },
    { hora: "10:00 PM", texto: "Fiesta", icono: "fiesta" },
    { hora: "2:00 AM", texto: "Despedida", icono: "despedida" }
  ],

  vestimenta: {
    titulo: "Mujeres y hombres",
    detalle: "Traje formal",
    texto: "Se reservan las tonalidades de rosado para la quinceañera.",
    paleta: [] // opcional: [{ nombre: "Verde salvia", color: "#9cae95" }, ...]; vacío = no se muestra
  },

  regalo: {
    titulo: "Lluvia de sobres",
    texto:
      "Tu presencia es mi mejor regalo. Si deseas obsequiarme algo más, puedes hacerlo con una lluvia de sobres."
  },

  confirmacion: {
    whatsapp: "573204855740", // país + número, sin + ni espacios (57 = Colombia)
    fechaLimite: "15 de noviembre",
    mensaje: "¡Hola! Soy {nombre} y confirmo mi asistencia a los XV años de {quinceanera}."
  },

  // Flores (PNG/WebP con fondo transparente, ramo en la esquina SUPERIOR IZQUIERDA;
  // el código las voltea solo). Puedes poner varias: se alternan entre las secciones.
  flores: {
    imagenes: ["assets/img/flores1.png", "assets/img/flores2.png"],
    tamano: 170
  },

  // Imagen del arco de flores de la portada (arriba)
  arcoSuperior: "assets/img/Arcoflores.png",

  arcoSubir: 0,   // píxeles extra para subir (negativo) o bajar (positivo) el arco; el espacio vacío de arriba se recorta solo

  // Corona en el centro del arco: "" = corona dorada dibujada, "assets/img/corona.png" = tu imagen, false = sin corona
  corona: "assets/img/corona.png",
  // Mariposas: "volando" = animadas, "fijas" = estáticas en las esquinas (true/false)
  mariposas: {
    imagenes: ["assets/img/mariposa2.png", "assets/img/mariposa3.png", "assets/img/mariposa4.png"],
    tamano: 55,
    volando: true,
    fijas: true
  },

  despedida: "¡Te esperamos!",

  // Fotos: reemplaza los archivos de assets/img/ por los reales
  // (mismo nombre) o cambia aquí las rutas (.jpg, .png, .webp).
  fotos: {
    portada: "assets/img/portada1.svg",   // dentro del arco
    retrato: "assets/img/retrato1.svg",   // foto grande del centro
    galeria1: "assets/img/galeria11.svg", // foto debajo de confirmar asistencia
    galeria2: "assets/img/galeria22.svg"  // foto final
  }
};
