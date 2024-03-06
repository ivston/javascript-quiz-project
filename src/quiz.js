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
    this.questions.sort(() => (Math.random() > 0.5 ? 1 : -1));
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
