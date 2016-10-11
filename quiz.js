'use strict';
var quiz = document.getElementById('quiz');
var yes = document.getElementById('yes');
var no = document.getElementById('no-form');
var table = document.getElementById('table');
var allQuestions = [];
var rightAnswers = ['No', 'No', 'Yes', 'No', 'Yes', 'Yes', 'Yes', 'No', 'No', 'Yes'];
var userAnswers = [];
var index = 0;
var counter = 0;
var score = 0;

function Question(question, answer) {
  this.question = question;
  this.answer = answer;
  allQuestions.push(this);
}

makingQuestions();
function makingQuestions() {
  new Question('Can you recycle used pizza boxes?', 'No, grease in the pizza box can contaminate the recycling process.');
  new Question('Can you recycle hardback books?', 'No, the glue in the books binding can have a negative impact on the recycling process.');
  new Question('Can you recycle spiral bound notebooks?', 'Yes, but remove and dispose of the spiral binding in the garbage first.');
  new Question('Do I need to know what the numbers on the plastic bottle recyclable mean?', 'No, Seattle does not recycle by number or symbol.');
  new Question('Are shampoo/lotion bottles recyclable?', 'Yes, but they must be thoroughly rinced.');
  new Question('Can I recycle grocery bags?', 'Yes, but they must be bundled. Single bags can clog up the machine.');
  new Question('Can I recycle shrink wrap?', 'Yes, but it must be clean and dry and put in a plastic bag with other plastic items.');
  new Question('Can I recycle ammunition?', 'No, ammunition is not acceptable in garbage or household hazardous waste facilities.');
  new Question('Can I recycle my used clothes, shoes, or household fabrics?', 'No, all items would need to go into the garbage or be donated to a secondary store.');
  new Question('Can I recycle gift wrap?', 'Yes, provided it is paper gift wrap. Plastic, foil, or tissue paper needs to go into the garbage.');
};
function createNewQuestion() {
  console.log(allQuestions[index].question);
  var liEl = document.createElement('li');
  liEl.textContent = allQuestions[index].question;
  quiz.appendChild(liEl);
  index ++;
};

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
    makeHeaderRow();
    quizResults();
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
    makeHeaderRow();
    quizResults();
  } else {
    createNewQuestion();
  }
};

function comparesAnswers() {
  for (var i = 0; i < rightAnswers.length; i++) {
    if (rightAnswers[i] === userAnswers[i]) {
      score++;
      console.log(score);
    }
  }
};

//event listener
yes.addEventListener('submit', clicksYes);
no.addEventListener('submit', clicksNo);

createNewQuestion();
