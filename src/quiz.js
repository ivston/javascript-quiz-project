class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)

  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }

  shuffleQuestions() {
    let randomQ = [];
    while (this.questions.length > 0) {
      const qIndex = Math.floor(Math.random() * this.questions.length);
      randomQ.push(this.questions.splice(qIndex, 1));
    }
    this.questions = randomQ;
  }

  checkAnswer(answer) {
    if (answer) {
      this.correctAnswers++;
    }
  }
  hasEnded() {
    return this.currentQuestionIndex === this.questions.length;
  }

  filterQuestionsByDifficulty(difficulty) {
    if (difficulty >= 1 && difficulty <= 3) {
      //update questions array to contain only questions with specific difficulty
      this.questions = this.questions.filter(
        (question) => question.difficulty === difficulty
      );
    }
    return this.questions;
  }

  averageDifficulty() {
    // sum of all question difficulties
    let difficultySum = this.questions.reduce((acc, question) => {
      acc += question.difficulty;
      return acc;
    }, 0);
    // divide by the length of the number of questions
    let result = difficultySum / this.questions.length;
    return result;
  }
}

// const questions = [
//   {
//     text: "Question 1",
//     choices: ["a", "b", "c"],
//     answer: "a",
//     difficulty: 1,
//   },
//   {
//     text: "Question 2",
//     choices: ["d", "e", "f"],
//     answer: "d",
//     difficulty: 2,
//   },
//   {
//     text: "Question 3",
//     choices: ["g", "h", "i"],
//     answer: "g",
//     difficulty: 2,
//   },
//   {
//     text: "Question 4",
//     choices: ["j", "k", "l"],
//     answer: "j",
//     difficulty: 3,
//   },
// ];

// const quiz = new Quiz(questions, 10, 8);
// console.log(quiz.averageDifficulty());
// // console.log(quiz.filterQuestionsByDifficulty(3));
