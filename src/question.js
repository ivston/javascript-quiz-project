class Question {
  // YOUR CODE HERE:
  //
  // 1. constructor (text, choices, answer, difficulty)
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }
  // 2. shuffleChoices()
  shuffleChoices() {
    let tempArr = [];
    while (this.choices.length > 0) {
      // randomizes a number between 1 and the number of choices
      let index = Math.floor(Math.random() * this.choices.length);
      // remove element from choices array and move it the temp array
      tempArr.push(this.choices.splice(index - 1, 1));

      return tempArr;
    }
  }
}
