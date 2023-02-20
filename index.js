import chalk from 'chalk';
import readLineSync from 'readline-sync';
 var userName = readLineSync.question(chalk.redBright("What is your name?\n"));
 var score = 0;
 console.log(chalk.blue.bold("\nWelcome "+userName.toUpperCase()));
 console.log(chalk.green.bold("\nTest your knowledge of The Holy Bible"));
 
 //Array of Objects
 var questionList = [
   {
     question:"1)Who lived for the most number of years?",
     options : ['Noah','Enoch','Methuselah','Lamech','Abraham'],
     answer: 2
   },

   {
     question:"2)Which of the following tribes does the Apostle Paul belong to?",
     options : ['Reuben', 'Simeon', 'Levi', 'Judah', 'Benjamin'],
     answer: 4
   },
   {
     question:"3)Who was the father of the Prophet Samuel?",
     options : ['Terah', 'Nahor', 'Eli', 'Elkanah', 'Moses'],
     answer:3
   },
   {
     question:"4)Who was the first king of Israel?",
     options : ['David', 'Solomon', 'Saul', 'Jehoshaphat', 'Hezekiah'],
     answer:2
   },
   {
     question:"5)Who is the Saviour of this world?",
     options : ['Jesus Christ of Nazareth', 'Peter', 'Paul', 'John', 'Luke'],
     answer:0
   },
 ]
for(var i=0;i<questionList.length;i++){
  console.log("\n"+chalk.magenta(questionList[i].question));
   var userAnswer = readLineSync.keyInSelect(questionList[i].options);
   if(userAnswer === questionList[i].answer){
     console.log(chalk.green("You are right!"));
     score++;
   }else if(userAnswer === -1){
     console.log(chalk.red("You have cancelled the question"+""));
   }else{
      console.log(chalk.red("Oops!You are wrong!"));
   }
}
 console.log(chalk.cyan("\nYour Final Score is "+score+"\n"));

var highScores = [

  {
    name:"Samuel",
    score:5,
  },
  
];

console.log("\nTop Scorers:\n")
for(var i=0;i<highScores.length;i++){
    console.log(chalk.green(highScores[i].name+" "+highScores[i].score+"\n"));
}

console.log(chalk.bold.magenta("Thank you for playing the quiz!\n"));
function checkHighScore(userScore){
  for(var i=0;i<highScores.length;i++){
    if(userScore>=highScores[i].score){
      console.log(chalk.magentaBright("Congratulations!You are one of the top scorers.Please send me a screenshot of your score so that I can update your name in the top scorers list."));
    }
  }
}

checkHighScore(score);