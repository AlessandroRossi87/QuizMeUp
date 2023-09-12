# Quiz me up... buttercup

I decided to build a humoristic quiz about my favorite flowers: roses. Roses are one of the most recognizable flowers in the world. I decided to build it in a cheeky way, by adding some absurd questions so that the user can have a laugh about it but also get a hint about which answers are definitely not correct.

Here is the link to the live website: <https://alessandrorossi87.github.io/quizmeup/>

The colors used as a theme for the website are the following:

![Color pallet](https://github.com/AlessandroRossi87/quizmeup/blob/main/assets/images/colors.png)

rgba(240, 120, 206, 0.867)
rgba(165, 161, 228, 0.867)
rgba(51, 17, 100, 0.867)
rgba(129, 25, 99, 0.867)

![Responsive mockup](https://github.com/AlessandroRossi87/quizmeup/blob/main/assets/images/mockup.png)

## Design process

I decided to go for a very easy and intuitive design with a simple area in the middle of the page that would stay the same both as a landing area with the rules and two buttons, one to start the game and another one to quit the page.

I created an easy wireframe of the game area with Microsoft Word as I decided later to add the rule area and use the show/hide functions with JaavScript:

![Wireframe](https://github.com/AlessandroRossi87/quizmeup/blob/main/assets/images/wireframe.png)

## Features

### Existing features

- **Rules Area**
- The rules area opens up with the name of the game.
- It contains a simple explaination of the quiz.
- It has two buttons, one to start the game and another one to quit.
- The quit button links to a Google search for pictures of roses.

![Rules area](https://github.com/AlessandroRossi87/quizmeup/blob/main/assets/images/rulearea.png)

- **Game Area**
- The game area contains the title of the quiz.
- It shows the number of the question and the question text.
- It shows four different alternative answers.
- Once the user select the answer a "Next" button appears.
- When the user answers to the last question a "Play again" button appears to restart the game.

![Game area](https://github.com/AlessandroRossi87/quizmeup/blob/main/assets/images/gamearea.png)

- **Time Is Up**
- If the user does not select an answer within 15 seconds a message that time is up appears.
- The game shows both correct and incorrect answers.
- No point is awarded to the end score.
- The Next button appears.

![Time is up](https://github.com/AlessandroRossi87/quizmeup/blob/main/assets/images/timeisup.png)

- **End Score**
- After the last question the game shows the amout of correct answers given.
- It gives the user the possibility to start the game again.

![End score](https://github.com/AlessandroRossi87/quizmeup/blob/main/assets/images/endscore.png)

- **Questions.js**
- I put the questions from the quiz in a separate JavaScript file to enhance clarity and order. - This makes it possible to modify the questions or add new ones without risking damaging the script.js file

- **404 Error message**
- The website features an 404 Error Message page in case the game wouldn't load properly.

![404 Error](https://github.com/AlessandroRossi87/quizmeup/blob/main/assets/images/404error.png)

## Testing

### Browser testing

This webpage has been tested on all major browsers available to me (Chrome, Safari, Firefox and Edge) and layout and functionality were ensured during all the testings.

### Manual testing

- **The exit button**
- When the user clicks on the button "Get me out of here, silly!" it should redirect the user to a new tab for Google Images search results for the word "roses. The feature was tested by clicking on the button. The feature acted normally and opened a new tab as expected.

- **The start button**
- When the user clicks on the button "Ok let's do this" it should start the game by showing the first question. The feature was tested by clicking on the button. The feature acted normally and showed the first question as expected.
  
- **The right answer**
- When the user selects the right answer it should change its background color into green, it should add one point to the final score and the next button appears. The feature was tested by clicking on the right answers. The feature acted normally and the user was able move forward to the next question.

- **The wrong answer**
- When the user selects the wrong answer it should change its background color into red, change the background color of the right answer into green and the next button appears. The feature was tested by clicking on the wrong answers. The feature acted normally and the user was able to move forward to the next question.

- **Time is up**
- If the user does not select any answer within the provided time, the countdown goes to zero, a message that the time is up appears, the background color of the answers changes to show both the right one (in green) and the wrong ones (in red) and the next button appears. The feature was tested by letting the time run out. The feature at first did not respond normally, as the timer was not stopping at zero and actually counting upwards in negative numbers. I created a new function to handle the countdown hitting zero in order to address this issue. After that the feature acted normally and the user was able to move forward to the next question.

- **Play again**
- After the user answers the last question the score is shown and a button to play again appears and restarts the quiz from the beginning. The feature was tested by clicking on the Play Again button. The feature acted normally and the user was able to restart the game from the first question.

### Lighthouse testing

The webpage received very high score on all the criteria according to the Lighthouse report.

![Lighthouse](https://github.com/AlessandroRossi87/quizmeup/blob/main/assets/images/lighthouse.png)

### Fixed bugs
- At the beginning I was not able to make the timer work as I had only declared a variable for the timer and set it on 15 and then created a function accordingly.
 
![Bug](https://github.com/AlessandroRossi87/quizmeup/blob/main/assets/images/timerbug.png)

### Unfixed bugs
- I tried repeatedly to make timer reset when time is out and user does not select answer. It was supposed to show the right answer and show the next button. After several tentatives I had to stop because I ran out of time

### Validator testing

- ## HTML
  - No errors were found when testing on [W3](https://validator.w3.org/nu/?doc=https%3A%2F%2Falessandrorossi87.github.io%2Fquizmeup%2F)

- ## CSS
  - No errors were found when testing on [W3](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Falessandrorossi87.github.io%2Fquizmeup%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- ## JavaScript
  - No errors were found when testing on [Wave](https://wave.webaim.org/report#/https://alessandrorossi87.github.io/quizmeup/)

## Deployment

The website was deployed on GitHub by following these steps:

- I went to the GitHub depository
- I clicked on "Settings" and then selected "main" in the "Default branch"
- I clicked on "Pages" and found the link to the deployed website.

## Credits

### Content

- Questions and right answers for the quiz were taken from [paulsquiz](https://www.paulsquiz.com/other-quizzes-mainmenu-161/202-free-quiz-questions/27-other-trivia-quizzes/2140-roses-quiz-1) and from [freepubquiz](http://www.freepubquiz.co.uk/roses-quiz.html)
- Wrong answers have been made up by me.
- Instructions on how to build the quiz were taken from this tutorial on [Youtube](https://www.youtube.com/watch?v=PBcqGxrr9g8)
- Instructions on how to code the exit button were taken from [stackoverflow](https://stackoverflow.com/questions/57536070/how-to-make-button-open-a-link-in-new-tab-in-javascript)
- Instructions on how to hide timer from score board was taken from [stackoverflow](https://stackoverflow.com/questions/27207854/how-to-show-hide-a-span-using-javascript)
- Favicon is from [Flaticon](https://www.flaticon.com/free-icon/rose_1407574)
- The color pallet was made using [coolors.co](https://coolors.co/)
