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
Programming Languages: HTML, CSS, JavaScript
 
Testing 
Outline manual testing 
Bugs and Fixes 
Text 
Validation 
Text and images of passing validators. 
Lighthouse Reports 
Text 
Images of each 
Responsive Design 
Text and list of device screen sizes tested. 
 
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
