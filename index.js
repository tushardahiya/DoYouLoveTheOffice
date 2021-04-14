var readLineSync = require('readline-sync');

var score = 0;
var userName = readLineSync.question('whats your name ?');

console.log('welcome ' + userName + ", Do you Love The Office ??");

var highScores = [{
  name:"Tushar",
  score:3
},
{
  name:"Rahul",
  score:2
}]

const play = (question ,answer) => {
  var userAnswer = readLineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right !");
    score += 1;
  } else {
    console.log("Wrong !");
  }
 console.log("Current Score: ", score);  
}



var questions = [{
  question:"What was the worst thing about prison ?",
  answer:"dementors"
}, {
  question:"Who did michael hit with his car ?",
  answer:"meredith"
},
{
  question:" What did dwight grow in his farm ?",
  answer:"beets"
}]

for (var i=0;i<questions.length;i++){
   var currentQuestion = questions[i];
   play(currentQuestion.question,currentQuestion.answer)
}

console.log(`YIPPIKAYE ! You Got ${score} Points`);
console.log("highScores are:  ")
highScores.map(score => console.log(`${score.name} scored ${score.score}`))