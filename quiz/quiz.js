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
var allQuestionsRandom = [];

// var rightAnswers = ['No', 'No', 'Yes', 'No', 'Yes', 'Yes', 'Yes', 'No', 'No', 'Yes'];\

var rightAnswers = [];
var userAnswers = [];
var counter = 0;
var score = 0;
var scoreArray = [];
var randomQuestion;

//*********
//functions
//*********

//constructor function
function Question(question, rightAnswer, answer) {
  this.question = question;
  this.rightAnswer = rightAnswer;
  this.answer = answer;
  allQuestions.push(this);
}

//creating new question instances
function makingQuestions() {
  new Question('Can you recycle used pizza boxes?', 'No', 'No, grease in the pizza box can contaminate the recycling process.');
  new Question('Can you recycle hardcover books?', 'No', 'No, the glue in the books binding can have a negative impact on the recycling process.');
  new Question('Can you recycle spiral bound notebooks?', 'Yes', 'Yes, but remove and dispose of the spiral binding in the garbage first.');
  new Question('Do you need to know what the numbers on the plastic bottle recyclable mean?', 'No', 'No, Seattle does not recycle by number or symbol.');
  new Question('Are shampoo/lotion bottles recyclable?', 'Yes', 'Yes, but they must be thoroughly rinsed.');
  new Question('Can you recycle grocery bags?', 'Yes', 'Yes, but they must be bundled. Single bags can clog up the machine.');
  new Question('Can you recycle shrink wrap?', 'Yes', 'Yes, but it must be clean and dry and put in a plastic bag with other plastic items.');
  new Question('Can you recycle ammunition?', 'No', 'No, ammunition is not acceptable in garbage or household hazardous waste facilities.');
  new Question('Can you recycle my used clothes, shoes, or household fabrics?', 'No', 'No, all items would need to go into the garbage or be donated to a secondary store.');
  new Question('Can you recycle gift wrap?', 'Yes', 'Yes, provided it is paper gift wrap. Plastic, foil, or tissue paper needs to go into the garbage.');
  new Question('Can alkaline batteries be thrown in the garbage?','Yes', 'Yes, but they can be recycled at Household Hazardous Waste (HHW) facilities.');
  new Question('Are motor oil containers recyclable?', 'No', 'No, they go in the garbage.');
  new Question('Can you recycle bleach bottles?', 'Yes', 'Yes, but it must be cleaned and dried.');
  new Question('Can you recycle Pyrex containers?', 'No', 'No, it has been specially treated in the manufacturing process to withstand high temperatures, which makes it non-recyclable.');
  new Question('Can bubble wrap be recycled?', 'Yes', 'Yes, bundle it togethere in a plastic grocery bag.');
  new Question('Can you recycle styrofoam peanuts and styrofoam blocks?', 'No', 'No, you cannot recycle styrofoam, it belongs in the garbage.');
  new Question('Can you put icecream cartons in compost?', 'No', 'No, if they have been rinced they my be recycled.');
};

//displays next question on page
var createNewQuestion = function() {
  randomQuestion = Math.floor(Math.random() * allQuestions.length);
  allQuestionsRandom.push(allQuestions[randomQuestion]);
  console.log (randomQuestion);
  var liEl = document.createElement('li');
  liEl.textContent = allQuestions[randomQuestion].question;
  quiz.appendChild(liEl);
  rightAnswers.push(allQuestions[randomQuestion].rightAnswer);
  allQuestions.splice(randomQuestion, 1);
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
  for (var i = 0; i < allQuestionsRandom.length; i++) {
    var tRowEl = document.createElement('tr');
    var tDataEl = document.createElement('td');
    tDataEl.textContent = allQuestionsRandom[i].question;
    tRowEl.appendChild(tDataEl);
    table.appendChild(tRowEl);
    tDataEl = document.createElement('td');
    tDataEl.textContent = userAnswers[i];
    tRowEl.appendChild(tDataEl);
    tDataEl = document.createElement('td');
    tDataEl.textContent = allQuestionsRandom[i].answer;
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
