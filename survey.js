const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let sentBuilder = '';
let increment = 0;

const paraConstrucParts = [
  'Whats your name? Nicknames are also acceptable :) ', 'Thats an awesome name!', " likes ",

  'Whats an activity you like doing? ', "That sounds like lots of fun", " while listeing to ",

  'What do you listen to while doing that? ', 'Interesting choice', ". They love ",

  'Which meal is your favourite? ',  'Mine too!', ", in particular; ",

  'Whats your favourite thing to eat for that meal? ', 'Huh, not what I would have picked', ". Their fav sport is ",

  'Which sport is your absolute favourite? ', 'BORING', " and their superpower is ",

  'What is your superpower? In a few words ', 'You are spectacular!', "."
]

const survey = function (i, constructionArr, para) {
  const partOfSent = constructionArr[i];
  if (!partOfSent){
    console.log(para);
    rl.close();
    return
  }
  rl.question(partOfSent, (answer) => {
    i++; 
    const ans = constructionArr[i]
    console.log(`${ans}: ${answer}`);
    i++;
    para += answer + "" + constructionArr[i];
    i++;
    survey(i, constructionArr, para);
  });
}


survey(increment, paraConstrucParts, sentBuilder);

// rl.question('Whats your name? Nicknames are also acceptable :) ', (answer) => {
//   console.log(`Thats an awesome name!: ${answer}`);
//   rl.question('Whats an activity you like doing? ', (answer) => {
//     console.log(`That sounds like lots of fun: ${answer}`);
//     rl.question('What do you listen to while doing that? ', (answer) => {
//       console.log(`Interesting choice: ${answer}`);
//       rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
//         console.log(`Mine too!: ${answer}`);
//         rl.question('Whats your favourite thing to eat for that meal? ', (answer) => {
//           console.log(`Huh, not what I would have picked: ${answer}`);
//           rl.question('Which sport is your absolute favourite? ', (answer) => {
//             console.log(`BORING: ${answer}`);
//             rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
//               console.log(`You are spectacular! ${answer}`);
            
//               rl.close();
//             });
          
            
//           });
        
          
//         });

      
        
//       });
    
      
//     });
  
    
//   });

// });


// rl.question('Whats your name? Nicknames are also acceptable :) ', (answer) => {
//   console.log(`Thats an awesome name!: ${answer}`);
//   question2();
// });

