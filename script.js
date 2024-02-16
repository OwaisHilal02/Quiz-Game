const quizData = [
  {
    qestion: "What Is The Largest Country In The World?",
    options: ["Russia", "USA", "China", "Canada"],
    answer: 0,
  },
  {
    qestion: "What Is The Capital Of Spain?",
    options: ["Berlin", "Paris", "Madrid", "London"],
    answer: 2,
  },
  {
    qestion: "What Is The Highest Mount In The World?",
    options: ["K2", "Everest", "Makalu", "Dhaulagiri"],
    answer: 1,
  },
  {
    qestion: "What Is The Currency Of Australia",
    options: ["Pound", "Yen", "Euro", "Dollar"],
    answer: 3,
  },
];

const questionEL = document.querySelector("#Question");
const choiceELS = document.querySelectorAll(".choices button");
const scoreEL = document.querySelector("#score");

let questionInd = 0;
let score = 0;

function setQuestion() {
  const currentQuestion = quizData[questionInd];
  questionEL.innerHTML = currentQuestion.qestion;
  choiceELS.forEach((choiceEL, index) => {
    choiceEL.innerHTML = currentQuestion.options[index];
  });
}
setQuestion();

function checkAnswer(optionInd) {
  const currentQuestion = quizData[questionInd];
  if (optionInd === currentQuestion.answer) {
    score++;
  }
  questionInd++;
  if (questionInd < quizData.length) {
    setQuestion();
  } else showResult();
}

function showResult() {
  questionEL.style.display = "none";
  choiceELS.forEach((choiceEL) => {
    choiceEL.style.display = "none";
  });
  scoreEL.innerHTML = `Your Score Is ${score} Out Of ${quizData.length}`;
  scoreEL.style.display = "block";
}

choiceELS.forEach((choiceEL, index) => {
  choiceEL.addEventListener("click", () => {
    checkAnswer(index);
  });
});
