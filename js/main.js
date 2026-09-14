// ---------- Navegación entre clases ----------
function showClase(n) {
  document.querySelectorAll('.clase-section').forEach(sec => {
    sec.style.display = (sec.dataset.clase == n) ? '' : 'none';
  });
  document.querySelectorAll('.tab-btn').forEach(btn => {
    const active = btn.dataset.clase == n;
    btn.className = "tab-btn shrink-0 px-4 py-2 rounded-full text-sm font-medium " +
      (active ? "bg-green-600 text-white" : "bg-white text-green-700 border border-green-200");
  });
  window.scrollTo({top:0, behavior:'smooth'});
}

// ---------- Diapositivas (una a la vez, por clase) ----------
function setupSlides(n) {
  const slides = document.querySelectorAll('#slider-' + n + ' .slide');
  const prevBtn = document.getElementById('slidePrev-' + n);
  const nextBtn = document.getElementById('slideNext-' + n);
  const counter = document.getElementById('slideCounter-' + n);
  const slideStage = document.getElementById('slideStage-' + n);
  const fullscreenBtn = document.getElementById('fullscreenBtn-' + n);
  let current = 0;

  function render() {
    slides.forEach((s, i) => s.classList.toggle('hidden', i !== current));
    counter.textContent = "Diapositiva " + (current + 1) + " de " + slides.length;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === slides.length - 1;
  }

  prevBtn.addEventListener('click', () => { if (current > 0) { current--; render(); } });
  nextBtn.addEventListener('click', () => { if (current < slides.length - 1) { current++; render(); } });

  document.addEventListener('keydown', (e) => {
    if (document.fullscreenElement !== slideStage) return;
    if (e.key === 'ArrowLeft' && current > 0) { current--; render(); }
    if (e.key === 'ArrowRight' && current < slides.length - 1) { current++; render(); }
  });

  fullscreenBtn.addEventListener('click', () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (slideStage.requestFullscreen) {
      slideStage.requestFullscreen();
    } else if (slideStage.webkitRequestFullscreen) {
      slideStage.webkitRequestFullscreen();
    }
  });

  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement === slideStage || document.fullscreenElement === null) {
      fullscreenBtn.lastChild.textContent = (document.fullscreenElement === slideStage) ? " Salir de pantalla completa" : " Pantalla completa";
    }
  });

  render();
}

// ---------- Quiz (por clase) ----------
function setupQuiz(n) {
  const quizData = quizzesByClass[n];
  const container = document.getElementById('quiz-container-' + n);
  const scoreBadge = document.getElementById('scoreBadge-' + n);
  let answered = 0;
  let score = 0;

  quizData.forEach((item, qi) => {
    const card = document.createElement('div');
    card.className = "bg-white rounded-2xl border border-green-100 p-5 shadow-sm";
    const title = document.createElement('p');
    title.className = "font-medium text-slate-800 mb-3";
    title.textContent = (qi+1) + ". " + item.q;
    card.appendChild(title);

    const optWrap = document.createElement('div');
    optWrap.className = "grid sm:grid-cols-2 gap-2";

    item.options.forEach((opt, oi) => {
      const btn = document.createElement('button');
      btn.className = "text-left text-sm px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-green-50 hover:border-green-200 transition-colors";
      btn.textContent = opt;

      btn.onclick = () => {
        if (optWrap.dataset.locked === "true") return;
        optWrap.dataset.locked = "true";

        const isCorrect = oi === item.correct;
        btn.className = "text-left text-sm px-3 py-2 rounded-lg border-2 font-medium " +
          (isCorrect ? "border-green-600 bg-green-100 text-green-700" : "border-red-500 bg-red-100 text-red-600");

        if (!isCorrect) {
          const correctBtn = optWrap.children[item.correct];
          correctBtn.className = "text-left text-sm px-3 py-2 rounded-lg border-2 border-green-600 bg-green-100 text-green-700 font-medium";
        }

        [...optWrap.children].forEach(b => { if (b !== btn) b.disabled = true; });
        btn.disabled = true;

        answered++;
        if (isCorrect) score++;
        scoreBadge.textContent = answered + " / " + quizData.length + " respondidas";

        if (answered === quizData.length) {
          const finalBox = document.getElementById('finalScore-' + n);
          finalBox.classList.remove('hidden');
          document.getElementById('finalScoreText-' + n).textContent = "Puntaje final: " + score + " / " + quizData.length;
        }
      };
      optWrap.appendChild(btn);
    });

    card.appendChild(optWrap);
    container.appendChild(card);
  });
}

// ---------- Inicialización ----------
for (let n = 1; n <= 8; n++) {
  setupSlides(n);
  setupQuiz(n);
}
