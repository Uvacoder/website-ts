import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import InterestList from './components/InterestList';
import WeekendProjectList from './components/WeekendProjectList';
import Project from './components/Project';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import logo1 from './assets/1.jpg'
import logo2 from './assets/2.jpg'
import logo3 from './assets/3.jpg'
import { Chapter } from './components/Chapter';
import { JobList } from './components/JobList';
import ArticleList from './components/ArticleList';
import { Footer } from './components/Footer';
import Header from './components/Header';


function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">
        Check it out!
      </Button>
    </Paper>
  )
}


function App() {

  const projects = [
    {
      title: "Gromceri",
      description: "Building and deploying the backend of a mobile application that makes shopping for groceries in Delft, Netherlands easier. The backend is written in ASP.NET Core 5 and the frontend in React Native, however both repositories are still private as this is still early in development. Will be posting updates on the Twitter account found below.",
      text: "Twitter Blog",
    },
    {
      title: "OOP Project",
      description: "OOPP (stands for Object Oriented Programming Project) is a group project course in TU Delft where students build real applications that vary per year. Me and my team were tasked to build a desktop app that would be the combination of StackOverflow and Zoom offering a live chat feed where students would be able to ask questions about an ongoing lecture. The main features of this application were, among others, having distinct groups of users with different permissions, different views depending on the user group, the ability to upvote and respond to questions posted by other students, IP bans, dynamic UI updates and more. For two months I worked exclusively on the backend of this application.",
      text: "Repository",
    }
  ]

  const chapters = [
    {
      year: 2019,
      story: "This is when I first got formally introduced to programming and Computer Science in general. I learned the basics of Java, Javascriptand wrote a few X86 Assembly scripts (don't ask). Learned the concepts of Object Oriented Programmingas well as some stuff about Functional concepts. Got introduced to algorithms and abstract data structures.Began learning the basics of relational, document and graph databases. There was not much self learning throughout this year in contrast to the next ones since I was still very new to the field."
    },
    {
      year: 2020,
      story: "Some of the earliest programming I everdid was making Discord bots with DiscordJS. Motivated to learn more about Javascript, I worked on my first big project; coronaBot. . With no apparent reason, I decided to learnsome basics about Linux, Bash and regex. I got pulled into the real of Machine, Deep learning, and Data Science and I learned a few basics about all 3 of these starting with Python but decided to switch to R. I discovered Kaggle and entered 2 competitions in which I was really proud to score fairly above average. This is where University started so I had to drop working on these and I went for stuff that was more relevant to my programme. I familiarized myself with the Java ecosystem some more.I learned about Maven and Gradle, testing and some basic CI/CD + automated test coverage reports. I learned SQL and started teaching myself about Spring Boot while also starting work on my multiplayer chess game."
    
    },
    {
      year: 2021,
      story: `I started learning a lot about deploying my projects.
      Learned how to work with Heroku and automating my builds, tests and deployments. I finished and deployed the
      chess game. I learned more about Docker and how to package my apps with it. I wrote my first article on Spring Boot
      after polishing my knowledge on it a bit more and posted it to help my fellow students prepare for an upcoming course.
      After taking a short break from learning on my own, I learned how to publish npm packages with <i>FakeDB</i>. I started working
      on <i>Gromceri</i> which was the biggest project I had tackled so far. Learned about authentication and JWTs in particular. 
      Learned C# and the .NET ecosystem. I learned how to securly deploying public repositories. I worked on database
      interaction optimizations as well as logging. For the first time I used GraphQL for my API in this project. After working
      on that for a few months I went back to python to learn a bit of Django and FastAPI to prepare for my first internship.
      I went back to R again. Built my first package that was a simple hello world just to see how that worked, once again used CI/CD
      on it. Redesigned my portfolio and published a <a class="indigo-lightest" href="https://antoniosbarotsis.github.io/Blog/">Hugo blog website</a> on which
      I want to start posting my TidyTuesday works and potentially any future articles I write.`
    },
  ]

  const selected = 'item1';
  let message = `My portfolio. 
   A showcase of the projects I've worked on`


  return (
    <div className="App">
      <div className="mainContainer full">
        <Header />
        <Title
          message={message} />
      </div>

      <div className="mainContainer" id='interests'>
        <Title
          message="I'm interested in..." />
        <InterestList />
      </div>

      <div className="mainContainer ">
      <Title
            message="Work Experience" />
        <div className="mainContainer row">
          <JobList/>
        </div>
      </div>

      <div className="mainContainer grey" id='projects'>
  
        <Carousel
          next={(next, active) => console.log()}
          prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
        >
            {projects.map((project) => 
            <Project
                title={project.title} 
                description={project.description}
                text={project.text} />
        )}
          
        </Carousel>
      </div>

      <div className="mainContainer extendable" id='small-projects'>
        <Title
          message='"Weekend" Projects' />
        <WeekendProjectList />
      </div>

      <div className="mainContainer extendable" id='journey'>
        <Title
          message='My journey' />
          <Carousel
          next={(next, active) => console.log()}
          prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
        >
            {chapters.map((chapter) => 
            <Chapter
                year={chapter.year} 
                story={chapter.story}
             />
        )}
          
        </Carousel>
      </div>

      <div className="mainContainer" id='articles'>
        <Title
          message='My articles' />
        <ArticleList />
         
      </div>

      <div className="mainContainer footer grey">
              <Footer />
         
      </div>


    </div>
  );
}

export default App;
