let currentPage = 0;
const questionsPerPage = 5;
let userAnswers = [];

function renderQuestions() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  const start = currentPage * questionsPerPage;
  const end = Math.min(start + questionsPerPage, questions.length);

  for (let i = start; i < end; i++) {
    const q = questions[i];
    const inputType = q.correct.length === 1 ? "radio" : "checkbox"; // 👈 CAMBIO CLAVE
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    questionDiv.innerHTML = `
      <h3>${i + 1}. ${q.text}</h3>
      <div class="options">
        ${q.options.map((opt, idx) => `
          <label>
            <input type="${inputType}" name="question${i}" value="${idx}"> ${opt}
          </label>`).join("")}
      </div>
      <button onclick="validateAnswer(${i})">Validar</button>
      <div id="feedback${i}"></div>
    `;
    container.appendChild(questionDiv);
  }

  document.getElementById("finish-btn").style.display =
    currentPage === Math.floor((questions.length - 1) / questionsPerPage) ? "inline-block" : "none";
}

function validateAnswer(index) {
  const inputs = document.querySelectorAll(`input[name="question${index}"]:checked`);
  const selected = Array.from(inputs).map(cb => parseInt(cb.value));
  userAnswers[index] = selected;

  const correctAnswers = questions[index].correct.slice().sort();
  const selectedSorted = selected.slice().sort();

  const isCorrect = JSON.stringify(correctAnswers) === JSON.stringify(selectedSorted);
  const feedback = document.getElementById(`feedback${index}`);

  if (isCorrect) {
    feedback.innerHTML = "<p class='correct'>¡Correcto!</p>";
  } else {
    const correctOptions = correctAnswers.map(i => questions[index].options[i]).join(", ");
    feedback.innerHTML = `<p class='incorrect'>Incorrecto. Respuesta correcta: ${correctOptions}</p>`;
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderQuestions();
  }
}

function nextPage() {
  if ((currentPage + 1) * questionsPerPage < questions.length) {
    currentPage++;
    renderQuestions();
  }
}
function restartQuiz() {
    currentPage = 0;
    userAnswers = [];
    document.getElementById("result").innerHTML = "";
    document.getElementById("restart-btn").style.display = "none";
    renderQuestions();
  }
  
function submitQuiz() {
  let score = 0;
  questions.forEach((q, i) => {
    const correct = q.correct.slice().sort().join(",");
    const selected = (userAnswers[i] || []).slice().sort().join(",");
    if (correct === selected) {
      score++;
    }
  });

  const resultDiv = document.getElementById("result");
  const total = questions.length;
  const passed = score >= Math.floor(total * 0.7);
  resultDiv.innerHTML = `<h2>Tu puntuación: ${score}/${total} - ${passed ? "Aprobado 🎉" : "No Aprobado ❌"}</h2>`;
  // 👇 Muestra el botón de reinicio
  document.getElementById("restart-btn").style.display = "inline-block";
}

window.onload = renderQuestions;

