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
    return randomQ;
  }

  checkAnswer(answer) {
    if (answer) {
      this.correctAnswers++;
    }
  }
  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else if (this.currentQuestionIndex === this.questions.length) {
      return true;
    }
  }

  filterQuestionsByDifficulty(difficulty) {
    if (difficulty >= 1 && difficulty <= 3) {
      //update questions array to contain only questions with specific difficulty
      this.questions.filter((question) => question.difficulty === difficulty);
    }
  }

  // averageDifficulty()
}
