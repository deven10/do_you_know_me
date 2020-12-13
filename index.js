//importing CHALK.js
const chalk = require('chalk');

// Importing user input package
 var readlineSync = require('readline-sync');

// Read user input
var user = readlineSync.question(chalk.green("What's your name? "));
console.log(("=================================================="));

// Welcoming user
var welcome = `Hi ${user}, Welcome for playing this Quiz!!`;
console.log(chalk.yellow(welcome));
console.log("==================================================");

//Beginning the quiz
console.log(chalk.yellow("How well do you know Deven, let's check it out..."));
console.log("==================================================");

//Listing quesiton and its answers for Quiz
var QnA = [
  {
    question: "Deven has graduated in? \n a)Bcom \n b)BSc IT \n c)BBA \n d)BSc CS \n write down an option: ",
    answer: "d"
  },
  {
    question: "Deven's friends call him from? \n a)Murgi \n b)Mugri \n c)Takla \n d)Deven \n write down an option: ",
    answer: "b"
  },
  {
    question: "Deven is passionate about? \n a)Sleep \n b)Coding \n c)Sports \n d)Hangout \n write down an option: ",   
    answer: "c"
  },
  {
    question: "What will be his height? \n a)5.8ft \n b)6ft \n c)6.3ft \n d)Don't know \n write down an option: ",   
    answer: "b"
  },
  {
    question: "Which sport he loves the most? \n a)Football \n b)Cricket \n c)Table Tennis \n d)Volleyball \n write down an option: ",   
    answer: "a"
  }
]



// Defining the function
function myfunc(question,answer){
  var QnA = readlineSync.question(chalk.cyanBright(question));

 if(QnA.toUpperCase() == answer.toUpperCase()){
   console.log("==================================================");
   console.log(chalk.green("Correct answer!!"));
 }
 else{
   console.log("==================================================");
   console.log(chalk.red("Wrong answer!! \nCorrect answer is option '" + answer + "'" ));
 }
 
 console.log(chalk.blue("=================================================="));
}

//using for loop for each question
for(var i=0; i<QnA.length; i++){
  myfunc(QnA[i].question,QnA[i].answer);
}
//Thanking user for playing

console.log(chalk.green("Thankyou "+user+" for Playing!!"));

/*
//Highscores 
var topScorer = {
    name: "Deven",
    scored: 5
  }


if(score >= topScorer.scored){
  console.log(chalk.green("\nCongratulations you have beaten our high scorer '" +topScorer.name+ "', Keep it up!"));
}
else{
  console.log(chalk.yellow("Well played, Try to beat our high scorer '" +topScorer.name+"' who has scored "+topScorer.scored));
}
*/