'use strict';

var quiz = document.getElementById('quiz');
var radioButtons = document.getElementById('radiobuttons');
var allRadioButtons = ['yes', 'no'];
var allQuestions = [];

function Questions(question, answer) {
  this.question = question;
  this.yes = 'Yes';
  this.no = 'No';
  this.answer = answer;
}

function makingQuestions() {
  new Question('Can you recycle hardback books?', 'No, the glue in the books binding can have a negative impact on the recycling process.');
};

//event listener
function userClicks(event) {
  event.preventDefault();
  console.log('wheogisoieie');
  console.log(event.target.value);
  for (var i = 0; i < allRadioButtons.length; i++) {
    if (allRadioButtons[i].clicked = true) {
      console.log('true');
    }
  }
};

//event listener
quiz.addEventListener('submit', userClicks);
