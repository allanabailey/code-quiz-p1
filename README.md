# Allana Bailey – Code Quiz Project with Code Institute 
## Brief Overview 
This project was created as part of Code Institute’s Diploma in Full Stack Software Development. This is portfolio project 2, a project requiring us to create an interactive web page or application using HTML, CSS and JavaScript. The deployed site can be found [here](https://allanabailey.github.io/code-quiz-p2/).   
  
![Responsive Display Across Devices](/assets/images/testing-and-wireframes/responsivedesign.png) 
 
### Description 
A website for people to visit who would like to test their knowledge of the basics in four of the main coding languages: HTML, CSS, JavaScript and SQL. It is not designed as a learning tool but rather as a test or quick reminders of some key facts within the languages.  
 
### Features 
The website is on a single page with the main title and logo always present at the top of the screen. Beneath this there is the main games area containing the buttons for choices on which coding language the user would like to be tested on, the question and answer area for the quiz, and the submit button. Beneath this is the rules area explaining to the user how to play the game. Followed by this is the footer with default social media links and my name as the author and creator of the site. 
 
### Goals 
Website Goals   
* Provide a fun and interactive learning method for users. 
* Allow users to see their scores incrementing and encourage them to improve their scores each time.  
* Offer quizzes on multiple different coding languages to reach a wider audience of developers. 
  
Personal Goals 
* Create a website as part of my online portfolio. 
* Create a website which is completely responsive for all screen sizes. 
* Improve my knowledge of different coding languages by devising the questions. 
* Improve my understanding of JavaScript by using text input comparison, hidden divs to store data and question/answer arrays, all of which are new methods to me. 

## Users
Users would visit the site to: 
* Test their knowledge of different coding languages. 
* Try to improve their knowledge and score for each quiz – add a competitive take on learning coding. 
* Learn new facts about the different programming languages, perhaps by looking into or researching the correct answers when they get it wrong. 
  
### User Stories 
* As a user who has recently started learning programming, I would like to test my current knowledge and see if I can improve. 
* As a new developer, I would like to see if I can improve my score each time until I am sure I know all of the answers by learning new facts. 
* As a user who hasn’t coded for a long time, I would like to be able to revisit this quiz as a refresher. 
* As a user who is completely new to coding, I would like to see questions I hadn’t thought of before so that I can go away and research the programming language in a broader context. 

 
## Planning and Wireframes / Mockups 
  
### Planning Process 
I planned this project in line with the 5 planes of the user centric design process in an attempt to ensure scalability, responsiveness, good user experience and an achievable project with the constraints I was faced with. In my previous project scope creep started to become a potential issue so I was more aware of that this time. By rating the important and impact of features, and assigning them development time I was able to identify the features that would be best as future implementations which are detailed below.
  
I initially started by thinking about what type of quiz could be beneficial for developers to keep in line with the theme of helpful tools for programmers across my projects. I decided that a quiz would be a useful tool and feature, considering how useful I have found similar learning methods available online myself.
  
I then sketched my ideas down on to paper to get a rough idea of the layout the website would have. I used the Code Institute's Love Maths walkthrough project as a guide for this as it was slick, professional and minimalistic which is what I wanted to aim for.
  
Once I was happy that my layout was correct and the coding languages were prioritised by course content and starting with the most commonly used programming languages, I then started creating the wireframes as a template and generic structure for my project using Balsamiq.
  

### Wireframes 
Due to the website being a single page, there was only one wireframe created for each screen size on Balsamiq.
  
#### Desktop
![Desktop](/assets/images/testing-and-wireframes/desktop.png) 
   
#### Tablet
![Tablet](/assets/images/testing-and-wireframes/tablet.png)
  
#### Mobile
![Mobile](/assets/images/testing-and-wireframes/mobile.png)
  

## Features 
* Logo and Header
    * A logo and header is **always visible** to the user at the top and center of the screen. I was initially going to change it to be just the logo on smaller screens but thought that the spacing was adequate to keep the full title in place. The logo and header are modified and in line with the overall website **colour scheme**.
      
![Logo](/assets/images/features/logowithheader.png)
  
* Nav Bar (Standard / Hovered / Clicked)
    * The nav bar consists of **four buttons** which loads the corresponding quiz for each user. The standard appearance consists of **light blue** buttons which turn a **darker blue with inverted colours** when the user hovers over them. Once a quiz has been **clicked** the button then remains with a **white background** to showcase the quizzes the user has attempted.
      
![Standard Nav Bar](/assets/images/features/navbarstandard.png)
  
![Hovered Nav Bar](/assets/images/features/navbarhover.png)
  
![Clicked Nav Bar](/assets/images/features/navbarclicked.png)
  
* Quiz Area
    * The quiz area displays a responsive, center aligned **question in a white font on a daker background** for good visibility. Beneath this is the **text input box** for the user to write in their answer to the question with a note above instructing the user of its purpose. Whilst the user can **press enter** to submit their question, there is also a **submit button** that can be clicked. When hovered over, the submit button **inverts its colours** matching the three tone colour scheme of the site for consistency.
      
![Quiz Area](/assets/images/features/quizarea.png)
  
* Scores Area
    * The scores area utilises three main methods of alerting the user to the type of score being incremeneted. An **icon** portraying a tick or cross, the **colours** of red and green, and the **text** beside stating whether it is incorrect or correct. This ensures that it is not reliant on just one design feature such as colour, or images, but utilising many to ensure greater accessibility. On **smaller screens** the words disappear, but their remains the colours and icons to identify the different scores.
      
![Scores Area](/assets/images/features/scores.png)
    
* Section Divide
    * A simple **horizontal line** was added in between the quiz area and the "how to play" section. This means they are distinct from one another clearly. This provides a **natural pause to the flow of the website** for the user, making it clear they are entering a new section, though still related and on the same page.
      
![Title](/assets/images/features/sectiondivide.png)
  
* Rules Area
    * The rules area was originally going to be placed at the **top of the page**. However, whilst usually instructions would be beneficial prior to games, quizzes with a text input are self explanatory in their working and I believed it to be more important to have the **quiz as the page hero** near to the programming language choices.
      
![Title](/assets/images/features/rulesarea.png)
  
* Footer
    * The footer is **fixed to the bottom of the page** and disappears when scrolled out of view to ensure the view for the user is not blocked in any way. It contains the **author's name and date of website creation** as well as **social media links**. These social media links currently link to the standard homepages of their respective icons, however in the future these could link to website fllowings, quiz groups created etc.
      
![Title](/assets/images/features/footer.png)

## Future Implementations 

Due to the time constraints of the project, not all features were able to be implemented for its first release, however below are some of the future implementations being considered for development:
* An ability for the user to **log in** with a username and password and be greeted with their desired username each time.
* The above would allow for the user to be able to **view their historic scores** and see if there has been an improvement at all.
* Implement a **public scoreboard** to allow for people to compete and look to gain the highest score in the quickest time.
* A **timer** that counts down with a choice of 3 speeds for the user.
* A form allowing users to **submit their own questions** generating a large question bank for a "public" quiz.


## Technologies Used 
* Programming Languages: HTML, CSS, JavaScript
* [GitPod](https://gitpod.io)
    * GitPod was used as the IDE to develop and write the project and was then pushed to GitHub.
* [Google Fonts](https://fonts.google.com/)
    * Google Fonts was used as a way to style and customise the fonts and appearance of the website content.
* [Font Awesome](https://fontawesome.com/)
    * Font Awesome was used to add icons to signify the correct and incorrect scores visually.
* [Paint 3D](https://www.microsoft.com/en-gb/p/paint-3d/9nblggh5fv99?activetab=pivot:overviewtab)
    * Paint 3D was used to alter the colours of the logo image to match the three tone colour scheme of the website.
 

## Testing 
### Manual Testing
A great deal of manual testing took place on this project to ensure that the links, inputs and buttons all worked corectly.
* Quiz Choices: The different quizzes were clicked on at both the start, and whilst another quiz was ongoing to ensure that the user was able to swap between quizzes and the appropriate questions were shown.
* Answers: All of the quizzes were answered correctly up to the maximum score of 10 for each quiz. This also allowed me to test the alerts functioned correctly for the score milestones and the change in background colour for a maximum score of 40 points. This ensured that the user would not be marked incorrectly when inputting their answers.
* Enter versus Submit button: Questions were answered by both pressing the enter key on the keyboard and clicking the submit button to ensure this correctly called the "checkAnswer()" function either way.
* Social Media: All of the social media links were clicked to ensure that they directed the user to the correct site corresponding to the icons.
* Correct / Incorrect Answers: All four quiz types were tested with both correct and incorrect answers to ensure that the correct audio was played and that the corresponding score was incremented accurately.

### Bugs and Fixes
* Originally, when you completed one of the quiz questions, all of the submit buttons and text input area would be hidden. This then meant they would not reappear for a new quiz type once these had been added. Whilst it started off as being solely an SQL quiz, when the quiz expanded this feature was not possible to keep as it resulted in the user needing to refresh the page to do a different quiz. To resolve this, the content was no longer hidden and instead a congratulations message was displayed in the question area.
* On some user testing with family members and friends, a change of colour scheme was said to be required. The original pink text on purple was more difficult to see and not as clean as it could have been. Therefore a change to blues and white was made and user testing was undertaken once again to ensure that it was now more visible and appealing to the eye.
* Unnecessary sections were removed from the HTML document to improve accessibility for screen readers. Initially they were placed on divs and sections on the footer, however these would not be read and added no accessibility advantages. They came up as an error in validation and have since been removed or adjusted to ensure they are appropriately used.
* A similar issue with aria-labels occurred whereby they were being used on non-textual content. These were removed to ensure high and accurate accessibility for users. The aria-labels were maintained on navigation buttons, input fields and website sections.
* Placeholder text as a heading was added to the quiz area to ensure that there was a section heading for the quiz section. This also ensured continuity for when the user clicked on a question which made a question appear, altering the appearance of the page from the starting screen.
* When the ability to switch quizzes was first implemented, this meant that the user could continuously click one of the quiz buttons until the quiz was complete without scoring any points.
    * To resolve this, the button for the active quiz was disabled.
    * This then resulted in the user never being able to return to a quiz once they had switched to another one. For example, they were half way through the HTML quiz, clicked on CSS, and then were never able to return to the HTML quiz to finish it.
    * To resolve the above, all other buttons were re-enabled when a user clicked on one programming language. This then meant that some of the questions would be repeated due to the buttons being clicked causing the display functions to be caused resulting in only 9 questions being presented to the user.
    * To resolve this, the answers would not be spliced until the answers had been checked to prevent the user from missing out on a question qhen switching programming languages. This was achieved through creating a div that stored the question number that could be passed to the checkAnswer() function, but hidden from the user.

### Responsive Design
The website was tested on numerous different screen sizes, down to a minimum screen size of 320px as per industry standards. It was important to make the website as responsive as possible from the start with adjustable heights, widths and font-sizes, however some media queries were still required for smaller screen sizes. In the future it would be nice to develop the website from a mobile-first approach once more knowledge and understanding has been gained in this area.
  
The responsiveness of the site was tested using the Google Chrome Developer tools to identify the break points. The core devices that the site was checked on were:
* iPad and iPad Pro
* Moto G4
* Galaxy S5
* iPhone 5/SE
* iPhone 6/7/8
* iPhone 6/7/8+
* iPhone X

### Validation
The three pages: index.html, script.js and style.css were all passed through validators where any warnings or errors were identified and rectified. The final validation results can be seen below for each.
  
The HTML code was passed through the [W3C Validator](https://validator.w3.org/) via direct input, the CSS through [W3C JigSaw Validator](https://jigsaw.w3.org/css-validator/) and the JavaScript through [JS Hint](https://jshint.com/)

* index.html
![index.html Validation](/assets/images/testing-and-wireframes/htmlvalidation.png)

* style.css
![style.css Validation](/assets/images/testing-and-wireframes/cssvalidator.png)

* script.js
![script.js Validation](/assets/images/testing-and-wireframes/javascriptvalidator.png)


Text and images of passing validators. 
Lighthouse Reports 
Text 
Images of each 

 
Deployment 
Text on deployment process 
Run the Project Locally 
Text 
 
Credits and Acknowledgements 
Generic credits and acknowledgemnts 
Images 
Code 
Questions 
Audio Sounds 
