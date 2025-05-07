const releaseDateUTC = new Date("2026-05-26T00:00:00Z");
const countdownElems = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  timezoneLabel: document.getElementById("timezone-label"),
};

const translations = {
  pt: {
    release: "Data de Lançamento",
    countdown: "Contagem regressiva até 26 de maio de 2026 - 00:00",
    selectTz: "Selecionar Fuso Horário:",
    trailers: "Assista aos Trailers Oficiais",
    days: "Dias",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos"
  },
  en: {
    release: "Release Date",
    countdown: "Countdown to May 26th, 2026 - 00:00",
    selectTz: "Select Timezone:",
    trailers: "Watch the Official Trailers",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds"
  },
  es: {
    release: "Fecha de Lanzamiento",
    countdown: "Cuenta regresiva para el 26 de mayo de 2026 - 00:00",
    selectTz: "Seleccionar Zona Horaria:",
    trailers: "Mira los Trailers Oficiales",
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    seconds: "Segundos"
  }
};

function setLanguage(lang, imgElement) {
    currentLanguage = lang;
    document.getElementById('current-flag').src = imgElement.src;
    updateTexts();
}

function updateTexts() {
    const translation = translations[currentLanguage];
    
    document.getElementById("release-label").textContent = translation.release;
    updateCountdownLabel();
    document.getElementById("countdown-label").textContent = `${translation.countdown} (${countdownElems.timezoneLabel.textContent})`;
    document.querySelector("label[for='timezone']").textContent = translation.selectTz;
    document.querySelector("main h3").textContent = translation.trailers;
    
    const countdownDivs = document.querySelectorAll('.countdown div');
    countdownDivs[0].innerHTML = `<span id="days">${countdownElems.days.textContent}</span> ${translation.days}`;
    countdownDivs[1].innerHTML = `<span id="hours">${countdownElems.hours.textContent}</span> ${translation.hours}`;
    countdownDivs[2].innerHTML = `<span id="minutes">${countdownElems.minutes.textContent}</span> ${translation.minutes}`;
    countdownDivs[3].innerHTML = `<span id="seconds">${countdownElems.seconds.textContent}</span> ${translation.seconds}`;
}

let currentLanguage = 'en'; // Idioma padrão

function updateCountdown(timezone) {
    const now = new Date().toLocaleString("en-US", { timeZone: timezone });
    const nowDate = new Date(now);
    const diff = releaseDateUTC - nowDate;
  
    if (diff <= 0) return;
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    // Atualiza apenas os números, mantendo os labels no idioma atual
    const translation = translations[currentLanguage];
    
    const countdownDivs = document.querySelectorAll('.countdown div');
    countdownDivs[0].innerHTML = `<span id="days">${days}</span> ${translation.days}`;
    countdownDivs[1].innerHTML = `<span id="hours">${hours}</span> ${translation.hours}`;
    countdownDivs[2].innerHTML = `<span id="minutes">${minutes}</span> ${translation.minutes}`;
    countdownDivs[3].innerHTML = `<span id="seconds">${seconds}</span> ${translation.seconds}`;
    
    // Atualiza também os elementos no objeto countdownElems
    countdownElems.days.textContent = days;
    countdownElems.hours.textContent = hours;
    countdownElems.minutes.textContent = minutes;
    countdownElems.seconds.textContent = seconds;
    countdownElems.timezoneLabel.textContent = timezone;
}

updateTexts(); // Define os textos no idioma padrão (inglês)

function populateTimezones() {
    const select = document.getElementById("timezone");
    const zones = Intl.supportedValuesOf("timeZone");
  
    zones.forEach(tz => {
      const option = document.createElement("option");
      option.value = tz;
      option.textContent = tz;
      select.appendChild(option);
    });
  
    select.value = "Europe/London";
    countdownElems.timezoneLabel.textContent = select.value;
    
    select.addEventListener("change", () => {
      countdownElems.timezoneLabel.textContent = select.value;
      updateCountdownLabel(); // Nova função para atualizar o texto completo
    });
  }

function updateCountdownLabel() {
    const timezone = document.getElementById("timezone").value;
    const translation = translations[currentLanguage];
    
    document.getElementById("countdown-label").textContent = 
      `${translation.countdown} (${timezone})`;
  }

function addToGoogleCalendar() {
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=GTA+VI+Release&dates=20260526T000000Z/20260526T010000Z&details=GTA+6+is+releasing!&sf=true&output=xml`;
  window.open(calendarUrl, "_blank");
}

populateTimezones();
setInterval(() => {
  updateCountdown(document.getElementById("timezone").value);
}, 1000);
