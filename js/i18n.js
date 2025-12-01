const translations = {
  es: {
    "nav-servicios": "Servicios",
    "nav-flota": "Flota",
    "nav-contacto": "Contacto",
    "hero-title": "Transporte de cargas nacional e internacional",
    "hero-desc": "Cubrimos Argentina, Chile, Uruguay, Bolivia y Brasil",
    "servicios-title": "Nuestros Servicios",
    "serv-nacional": "Transporte Nacional",
    "serv-nacional-desc": "Distribución a todo el país con seguimiento en tiempo real.",
    "serv-internacional": "Transporte Internacional",
    "serv-internacional-desc": "Operaciones con Chile, Uruguay, Bolivia y Brasil.",
    "serv-carga": "Paquetería y Carga General",
    "serv-carga-desc": "Servicio puerta a puerta para empresas y particulares.",
    "flota-title": "Nuestra Flota",
    "flota-semi": "Camiones Semirremolque",
    "flota-semi-desc": "Para grandes cargas y distancias largas.",
    "flota-chasis": "Camiones y Chasis",
    "flota-chasis-desc": "Óptimos para cargas divisibles.",
    "flota-carreton": "Carretón Agricola",
    "flota-carreton-desc": "Ideal para traslado de Maquinarias.",
    "contacto-title": "Contacto",
    "contacto-nombre": "Nombre",
    "contacto-email": "Email",
    "contacto-telefono": "Teléfono",
    "contacto-texto": "Escribe tu consulta",
    "contacto-btn": "Enviar consulta",
    "footer-text": "© 2025 Schalbetter Transportes. Todos los derechos reservados."
  },
  pt: {
    "nav-servicios": "Serviços",
    "nav-flota": "Frota",
    "nav-contacto": "Contato",
    "hero-title": "Transporte de cargas nacional e internacional",
    "hero-desc": "Cobrimos Argentina, Chile, Uruguai, Bolívia e Brasil",
    "servicios-title": "Nossos Serviços",
    "serv-nacional": "Transporte Nacional",
    "serv-nacional-desc": "Distribuição para todo o país com rastreio em tempo real.",
    "serv-internacional": "Transporte Internacional",
    "serv-internacional-desc": "Operações com Chile, Uruguai, Bolívia e Brasil.",
    "serv-carga": "Pacotes e Carga Geral",
    "serv-carga-desc": "Serviço porta a porta para empresas e particulares.",
    "flota-title": "Nossa Frota",
    "flota-semi": "Caminhões Semirreboque",
    "flota-semi-desc": "Para grandes cargas e longas distâncias.",
    "flota-chasis": "Caminhões e Chassis",
    "flota-chasis-desc": "Ótimos para cargas divisíveis.",
    "flota-carreton": "Carretão Agrícola",
    "flota-carreton-desc": "Ideal para transporte de Máquinas.",
    "contacto-title": "Contato",
    "contacto-nombre": "Nome",
    "contacto-email": "Email",
    "contacto-telefono": "Telefone",
    "contacto-texto": "Escreva sua consulta",
    "contacto-btn": "Enviar consulta",
    "footer-text": "© 2025 Schalbetter Transportes. Todos os direitos reservados."
  }
};

function setLanguage(lang) {
  // Cambia textos
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.innerText = translations[lang][key];
  });

  // Cambia placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });
}

// Botones idioma
document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
document.getElementById('lang-pt').addEventListener('click', () => setLanguage('pt'));

// Idioma por defecto
setLanguage('es');

<script>
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
</script>
