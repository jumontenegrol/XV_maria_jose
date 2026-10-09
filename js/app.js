(function () {
  const C = INVITACION;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Textos ---------- */
  document.title = "XV Años de " + C.nombre;
  document.querySelectorAll("[data-nombre]").forEach((e) => (e.textContent = C.nombre));
  $("frase").textContent = C.frase;
  $("padres").innerHTML = C.padres.map(esc).join(" &amp;<br>");
  $("padrinos").innerHTML = C.padrinos.map(esc).join(" &amp;<br>");
  $("vestTitulo").textContent = C.vestimenta.titulo;
  $("vestTexto").textContent = C.vestimenta.texto;
  $("regaloTexto").textContent = C.regalo.texto;
  $("regaloBanco").textContent = C.regalo.banco;
  $("regaloCuenta").textContent = C.regalo.cuenta;
  $("regaloTitular").textContent = C.regalo.titular;
  $("rsvpTexto").textContent = "Por favor confirma tu asistencia antes del " + C.confirmacion.fechaLimite + ".";
  $("despedida").textContent = C.despedida;
  $("fotoPortada").src = C.fotos.portada;
  $("fotoRetrato").src = C.fotos.retrato;
  $("fotoGaleria1").src = C.fotos.galeria1;
  $("fotoGaleria2").src = C.fotos.galeria2;

  $("paleta").innerHTML = C.vestimenta.paleta
    .map((p) => `<div><span style="background:${esc(p.color)}"></span>${esc(p.nombre)}</div>`).join("");

  $("itinerario").innerHTML = C.itinerario
    .map((i) => `<li><span class="h">${esc(i.hora)}</span><span class="t">${esc(i.texto)}</span></li>`).join("");

  $("eventos").innerHTML = [C.misa, C.recepcion]
    .map((e) => `<div class="evento"><h2 class="script">${esc(e.titulo)}</h2>
      <p class="hora">${esc(e.hora)}</p><p class="l">${esc(e.lugar)}</p><p class="l">${esc(e.direccion)}</p>
      ${e.mapa ? `<a class="btn" href="${esc(e.mapa)}" target="_blank" rel="noopener">Ver ubicación</a>` : ""}</div>`).join("");

  /* ---------- Fecha, contador, calendario ---------- */
  const DIAS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const [y, m, d] = C.fecha.split("T")[0].split("-").map(Number);
  const f = new Date(y, m - 1, d);
  $("diaSem").textContent = DIAS[f.getDay()];
  $("diaNum").textContent = d;
  $("anio").textContent = y;
  $("mesTxt").textContent = MESES[m - 1];

  const target = new Date(C.fecha).getTime();
  const pad = (n) => String(n).padStart(2, "0");
  function tick() {
    let s = Math.max(0, Math.floor((target - Date.now()) / 1000));
    $("cd-d").textContent = Math.floor(s / 86400);
    $("cd-h").textContent = pad(Math.floor((s % 86400) / 3600));
    $("cd-m").textContent = pad(Math.floor((s % 3600) / 60));
    $("cd-s").textContent = pad(s % 60);
  }
  tick(); setInterval(tick, 1000);

  const offset = (new Date(y, m - 1, 1).getDay() + 6) % 7; // semana inicia en lunes
  const total = new Date(y, m, 0).getDate();
  let cal = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((x) => `<span class="dn">${x}</span>`).join("");
  cal += "<span></span>".repeat(offset);
  for (let i = 1; i <= total; i++) cal += `<span${i === d ? ' class="hoy"' : ""}>${i}</span>`;
  $("calendario").innerHTML = cal;

  /* ---------- Flores (SVG, por capas) ---------- */
  function petalo(r, rot, fill, op) {
    return `<path d="M0 0C${-r*.6} ${-r*.25} ${-r*.55} ${-r*.95} 0 ${-r}C${r*.55} ${-r*.95} ${r*.6} ${-r*.25} 0 0Z" fill="${fill}" fill-opacity="${op}" stroke="#fff" stroke-opacity=".45" stroke-width=".8" transform="rotate(${rot})"/>`;
  }
  function flor(cx, cy, r, c1, c2, c3) {
    let s = `<g transform="translate(${cx} ${cy})">`;
    for (let i = 0; i < 8; i++) s += petalo(r, i * 45, c1, .95);
    for (let i = 0; i < 6; i++) s += petalo(r * .72, i * 60 + 20, c2, .96);
    for (let i = 0; i < 5; i++) s += petalo(r * .46, i * 72 + 10, c3, .98);
    s += `<circle r="${r*.14}" fill="#e2c188"/><circle r="${r*.07}" fill="#b08d57"/></g>`;
    return s;
  }
  function hoja(x, y, rot, l) {
    return `<g transform="translate(${x} ${y}) rotate(${rot})"><path d="M0 0C${l*.5} ${-l*.3} ${l*.5} ${-l*.8} 0 ${-l}C${-l*.5} ${-l*.8} ${-l*.5} ${-l*.3} 0 0Z" fill="#7f9f84" opacity=".9"/><path d="M0 0V${-l*.9}" stroke="#d6e3d0" stroke-width=".8" opacity=".7"/></g>`;
  }
  function puntos(pts) { return pts.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity=".9"/>`).join(""); }
  const RAMO = `<svg viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M-5 70C40 60 70 40 95 -5M-5 120C30 110 40 90 38 60" fill="none" stroke="#6f8f76" stroke-width="2" stroke-linecap="round"/>
    ${hoja(70, 52, 50, 28)}${hoja(104, 28, 20, 22)}${hoja(34, 82, -30, 26)}${hoja(14, 52, -75, 22)}${hoja(126, 62, 75, 18)}${hoja(56, 20, -20, 20)}
    ${puntos([[120,40,2],[126,34,1.5],[132,44,1.7],[20,128,2],[28,134,1.5],[12,138,1.6],[96,92,1.8],[104,98,1.4]])}
    ${flor(44, 44, 34, "#f2a9b5", "#e98a9b", "#d9687f")}${flor(100, 32, 22, "#fbdde0", "#f4bcc4", "#eb9aa7")}
    ${flor(24, 104, 22, "#fbdde0", "#f4bcc4", "#eb9aa7")}${flor(84, 84, 16, "#f8d0b8", "#f2b08f", "#e89470")}
    ${flor(130, 72, 13, "#f2a9b5", "#fbdde0", "#e98a9b")}${flor(12, 62, 12, "#f8d0b8", "#fbdde0", "#f2b08f")}
  </svg>`;
  const FL = C.flores || {};
  document.querySelectorAll(".flor").forEach((e, i) => {
    if (FL.imagen) {
      e.innerHTML = `<img src="${esc(FL.imagen)}" alt="" aria-hidden="true">`;
      if (FL.tamano) {
        const k = e.closest(".portada") ? 1.35 : 1;
        e.style.width = e.style.height = FL.tamano * k + "px";
      }
    } else {
      e.innerHTML = RAMO;
    }
    e.firstElementChild.style.animationDelay = -(i * 1.3) + "s";
  });

  /* ---------- Adornos entre secciones ---------- */
  document.querySelectorAll(".sec").forEach((s, i, all) => {
    if (i < all.length - 1 && !s.nextElementSibling.classList.contains("foto-sec") && !s.classList.contains("portada")) {
      const o = document.createElement("div"); o.className = "orn"; s.after(o);
    }
  });

  /* ---------- Iconos de eventos ---------- */
  const ICONOS = [
    '<svg viewBox="0 0 40 40" fill="none" stroke="#1f4d36" stroke-width="1.6" stroke-linejoin="round"><path d="M20 3v6M17 6h6M20 9l-9 8v6h18v-6zM8 23h24v14H8zM17 37v-7a3 3 0 016 0v7"/></svg>',
    '<svg viewBox="0 0 40 40" fill="none" stroke="#1f4d36" stroke-width="1.6" stroke-linejoin="round"><path d="M9 5h9l-1.5 12a3 3 0 01-6 0zM22 5h9l-1.5 12a3 3 0 01-6 0zM13.5 20v14M9 34h9M26.5 20v14M22 34h9"/></svg>'
  ];
  document.querySelectorAll(".evento").forEach((e, i) => e.insertAdjacentHTML("afterbegin", `<div class="ico">${ICONOS[i % 2]}</div>`));

  /* ---------- Pétalos cayendo ---------- */
  const capa = document.createElement("div"); capa.className = "petalos";
  for (let i = 0; i < 14; i++) {
    const p = document.createElement("i");
    p.style.cssText = `left:${Math.random()*100}%;--s:${9+Math.random()*10}px;--d:${14+Math.random()*12}s;--x:${(Math.random()*160-80)|0}px;animation-delay:${-Math.random()*20}s;opacity:${.55+Math.random()*.4}`;
    capa.appendChild(p);
  }
  document.body.appendChild(capa);

  /* ---------- Parallax de fotos ---------- */
  const fotos = [...document.querySelectorAll(".foto-sec img")];
  let ticking = false;
  function par() {
    const vh = innerHeight;
    fotos.forEach((im) => {
      const r = im.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      im.style.transform = `scale(1.2) translateY(${((r.top + r.height / 2 - vh / 2) * -0.09).toFixed(1)}px)`;
    });
    ticking = false;
  }
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(par); } }, { passive: true });
  par();

  /* ---------- Mariposas ---------- 
  const COLORES = [["#f2a9b6", "#e07f93"], ["#c9b2e0", "#a98bcc"], ["#f6c9b0", "#eaa07c"]];
  const MARIPOSA = (c) => `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20C14 6 3 4 3 14c0 7 8 9 17 6z" fill="${c[0]}"/><path d="M20 20C26 6 37 4 37 14c0 7-8 9-17 6z" fill="${c[0]}"/>
    <path d="M20 21C12 22 6 28 9 33c4 3 10-3 11-12z" fill="${c[1]}"/><path d="M20 21c8 1 14 7 11 12-4 3-10-3-11-12z" fill="${c[1]}"/>
    <rect x="19" y="12" width="2" height="18" rx="1" fill="#6b4a3a"/></svg>`;
  const posiciones = [["12%", "30%"], ["78%", "18%"], ["70%", "62%"], ["20%", "75%"]];
  document.querySelectorAll(".sec").forEach((sec, i) => {
    const [l, t] = posiciones[i % posiciones.length];
    const b = document.createElement("div");
    b.className = "mariposa";
    b.style.left = l; b.style.top = t;
    b.style.animationDelay = -(i * 1.7) + "s";
    b.innerHTML = MARIPOSA(COLORES[i % COLORES.length]);
    sec.appendChild(b);
  });*/
  
/* ---------- Mariposas (Soporte PNG externo o SVG) ---------- */
  const M = C.mariposas || {};
  const COLORES = [["#f2a9b6", "#e07f93"], ["#c9b2e0", "#a98bcc"], ["#f6c9b0", "#eaa07c"]];
  const MARIPOSA_SVG = (c) => `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20C14 6 3 4 3 14c0 7 8 9 17 6z" fill="${c[0]}"/><path d="M20 20C26 6 37 4 37 14c0 7-8 9-17 6z" fill="${c[0]}"/>
    <path d="M20 21C12 22 6 28 9 33c4 3 10-3 11-12z" fill="${c[1]}"/><path d="M20 21c8 1 14 7 11 12-4 3-10-3-11-12z" fill="${c[1]}"/>
    <rect x="19" y="12" width="2" height="18" rx="1" fill="#6b4a3a"/></svg>`;

  const posiciones = [["12%", "30%"], ["78%", "18%"], ["70%", "62%"], ["20%", "75%"]];

  document.querySelectorAll(".sec").forEach((sec, i) => {
    const [l, t] = posiciones[i % posiciones.length];
    const b = document.createElement("div");
    b.className = "mariposa";
    b.style.left = l; 
    b.style.top = t;
    b.style.animationDelay = -(i * 1.7) + "s";

    // Si especificaste imágenes en config.js, las usa; de lo contrario usa el SVG por defecto
    const imgRuta = (i % 2 === 0 ? M.imagen1 : M.imagen2) || M.imagen;
    if (imgRuta) {
      b.innerHTML = `<img src="${esc(imgRuta)}" alt="" aria-hidden="true">`;
      if (M.tamano) b.style.width = b.style.height = M.tamano + "px";
    } else {
      b.innerHTML = MARIPOSA_SVG(COLORES[i % COLORES.length]);
    }

    sec.appendChild(b);
  });



  /* ---------- Revelado al hacer scroll ---------- */
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("vista"); io.unobserve(e.target); } }), { threshold: 0.12 });
  document.querySelectorAll(".sec,.foto-sec").forEach((s) => io.observe(s));

  /* ---------- Sobre ---------- */
  const sobre = $("sobre");
  $("sello").addEventListener("click", () => {
    sobre.classList.add("abierto");
    setTimeout(() => {
      sobre.classList.add("fuera");
      document.body.classList.remove("bloqueado");
      window.scrollTo(0, 0);
    }, 2300);
  });

  /* ---------- Copiar cuenta ---------- */
  $("copiar").addEventListener("click", async (e) => {
    try { await navigator.clipboard.writeText(C.regalo.cuenta); e.target.textContent = "¡Copiado!"; }
    catch { e.target.textContent = C.regalo.cuenta; }
    setTimeout(() => (e.target.textContent = "Copiar número"), 2200);
  });

  /* ---------- Confirmar por WhatsApp ---------- */
  $("confirmar").addEventListener("click", () => {
    const inp = $("invitado");
    const nombre = inp.value.trim();
    if (!nombre) { inp.focus(); inp.placeholder = "Escribe tu nombre para confirmar"; return; }
    const msg = C.confirmacion.mensaje.replace("{nombre}", nombre).replace("{quinceanera}", C.nombre);
    window.open("https://wa.me/" + C.confirmacion.whatsapp + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
  });
})();
