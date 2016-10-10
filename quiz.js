'use strict';

var yes = document.getElementById('yes');
var no = document.getElementById('no');
var allQuestions = [];
var rightAnswers = ['no', 'no', 'yes', 'no', 'yes', 'yes', 'yes', 'no', 'no', 'yes'];
var userAnswers = [];

function Question(question, answer) {
  this.question = question;
  this.answer = answer;
  allQuestions.push(this);
}

makingQuestions();
function makingQuestions() {
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

//event listeners
function clicksYes(event) {
  event.preventDefault();
  userAnswers.push('yes');
  console.log('Clicked yes');
};
function clicksNo(event) {
  event.preventDefault();
  userAnswers.push('no');
  console.log('Clicked no');
}

//event listener
yes.addEventListener('submit', clicksYes);
no.addEventListener('submit', clicksNo);
