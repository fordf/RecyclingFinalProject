'use strict';

//*********
//variables
//*********

var quiz = document.getElementById('quiz');
var yes = document.getElementById('yes');
var no = document.getElementById('no');
var table = document.getElementById('table');
var header = document.getElementById('header');
var allQuestions = [];
var rightAnswers = [];
var userAnswers = [];
var index = 0;
var counter = 0;
var score = 0;
var scoreArray = [];

//*********
//functions
//*********

//constructor function
function Question(question, answer) {
  this.question = question;
  this.answer = answer;
  this.shortAnswer = function () {
    if (this.answer.toLowerCase.includes('no')) {
      return 'No';
    } else {
      return 'Yes';
    }
  };
  allQuestions.push(this);
}

//creating new question instances
function makingQuestions() {
  new Question('Can you recycle used pizza boxes?', 'No, grease in the pizza box can contaminate the recycling process.');
  new Question('Can you recycle hardcover books?', 'No, the glue in the books binding can have a negative impact on the recycling process.');
  new Question('Can you recycle spiral bound notebooks?', 'Yes, but remove and dispose of the spiral binding in the garbage first.');
  new Question('Do you need to know what the numbers on the plastic bottle recyclable mean?', 'No, Seattle does not recycle by number or symbol.');
  new Question('Are shampoo/lotion bottles recyclable?', 'Yes, but they must be thoroughly rinsed.');
  new Question('Can you recycle grocery bags?', 'Yes, but they must be bundled. Single bags can clog up the machine.');
  new Question('Can you recycle shrink wrap?', 'Yes, but it must be clean and dry and put in a plastic bag with other plastic items.');
  new Question('Can you recycle ammunition?', 'No, ammunition is not acceptable in garbage or household hazardous waste facilities.');
  new Question('Can you recycle my used clothes, shoes, or household fabrics?', 'No, all items would need to go into the garbage or be donated to a secondary store.');
  new Question('Can you recycle gift wrap?', 'Yes, provided it is paper gift wrap. Plastic, foil, or tissue paper needs to go into the garbage.');
  new Question('Can you recycle bleach bottles?', 'Yes, but it must be cleaned and dried.');
};

//displays next question on page
function createNewQuestion() {
  console.log(allQuestions[index].question);
  var liEl = document.createElement('li');
  liEl.textContent = allQuestions[index].question;
  quiz.appendChild(liEl);
  index ++;
};

//displays score
var displayScore = function() {
  var heading = document.createElement('h3');
  heading.textContent = 'You scored ' + score + ' out of 10.';
  header.appendChild(heading);
  heading = document.createElement('h5');
  heading.textContent = 'Your previous score was ' + scoreArray[scoreArray.length - 1] + '. Take the quiz again and try to beat it.';
  header.appendChild(heading);
  scoreArray.push(score);
  localStorage.setItem('scoreArray', JSON.stringify(scoreArray));
};

//makes table header
var makeHeaderRow = function() {
  var tRowEl = document.createElement('tr');
  var tHeaderEl = document.createElement('th');
  tHeaderEl.textContent = 'Question';
  tRowEl.appendChild(tHeaderEl);
  table.appendChild(tRowEl);
  tHeaderEl = document.createElement('th');
  tHeaderEl.textContent = 'Your Answer';
  tRowEl.appendChild(tHeaderEl);
  table.appendChild(tRowEl);
  tHeaderEl = document.createElement('th');
  tHeaderEl.textContent = 'Correct Answer';
  tRowEl.appendChild(tHeaderEl);
  table.appendChild(tRowEl);
};

//makes table data
function quizResults(){
  for (var i = 0; i < allQuestions.length; i++) {
    var tRowEl = document.createElement('tr');
    var tDataEl = document.createElement('td');
    tDataEl.textContent = allQuestions[i].question;
    tRowEl.appendChild(tDataEl);
    table.appendChild(tRowEl);
    tDataEl = document.createElement('td');
    tDataEl.textContent = userAnswers[i];
    tRowEl.appendChild(tDataEl);
    tDataEl = document.createElement('td');
    tDataEl.textContent = allQuestions[i].answer;
    tRowEl.appendChild(tDataEl);
    table.appendChild(tRowEl);
  }
}

//event listeners
function clicksYes(event) {
  counter += 1;
  event.preventDefault();
  userAnswers.push('Yes');
  console.log('Clicked yes');
  quiz.innerHTML = '';
  if (counter > 9) {
    yes.innerHTML = '';
    no.innerHTML = '';
    comparesAnswers();
    displayScore();
    makeHeaderRow();
    quizResults();
    // storeScore();
  } else {
    createNewQuestion();
  }
};
function clicksNo(event) {
  counter += 1;
  event.preventDefault();
  userAnswers.push('No');
  console.log('Clicked no');
  quiz.innerHTML = '';
  if (counter > 9) {
    yes.innerHTML = '';
    no.innerHTML = '';
    comparesAnswers();
    displayScore();
    makeHeaderRow();
    quizResults();
    // storeScore();
  } else {
    createNewQuestion();
  }
};

//compares answers to display results
function comparesAnswers() {
  for (var i = 0; i < rightAnswers.length; i++) {
    if (rightAnswers[i] === userAnswers[i]) {
      score++;
      console.log(score);
    }
  }
};

function handleLoad() {
  if (localStorage.getItem('scoreArray')) {
    scoreArray = JSON.parse(localStorage.getItem('scoreArray'));
    console.log(scoreArray);
  }
}

//***************
//event listeners
//***************

yes.addEventListener('submit', clicksYes);
no.addEventListener('submit', clicksNo);
window.addEventListener('load', handleLoad);
//*****************
//calling functions
//*****************

makingQuestions();
createNewQuestion();
