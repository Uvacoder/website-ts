import * as React from 'react';
import WeekendProject from './WeekendProject';
import styles from '../stylesheets/WeekendProjectList.module.css'

type WeekendProjectListProps = {
}

export default function WeekendProjectList ({  }: WeekendProjectListProps) {
    let projects : { title: string,
                description: string,
                heroku: boolean,
                npm: boolean,
                link: string, 
                linkHeroku: string, 
                linkNpm: string }[] = [
        { 
            "title": "Corona Bot" , 
            "description": "A small script written in Node that can create various plots using the data from the Johns Hopkins University data repository.",
            "heroku": false,
            "npm": false,
            "link": "https://www.youtube.com/",
            "linkHeroku": 'https://www.youtube.com/',
            "linkNpm": 'https://www.youtube.com/',

        }, 
        {
            "title": "Fake-DB" , 
            "description": "A weekend project that resembles JSON Server. Automatically generates a simple API given a JSON file that supports simple RESTful operations",
            "heroku": false,
            "npm": true,
            "link": "https://www.youtube.com/",
            "linkHeroku": 'https://www.youtube.com/',
            "linkNpm": 'https://www.youtube.com/',
        }, 
        {
            "title": "3D Terrain Generation" , 
            "description": "Experimenting with Perlin Noise in Processing.",
            "heroku": false,
            "npm": false,
            "link": "https://www.youtube.com/",
            "linkHeroku": 'https://www.youtube.com/',
            "linkNpm": 'https://www.youtube.com/',
        }, 
        {
            "title": "Online Multiplayer Chess" , 
            "description": "Created the backend of this chess game using Express and Websockets. Repository is private as this was a university assignment.",
            "heroku": true,
            "npm": false,
            "link": "https://www.youtube.com/",
            "linkHeroku": 'https://www.youtube.com/',
            "linkNpm": 'https://www.youtube.com/',
        }, 
        {
            "title": "Digit Recognition" , 
            "description": "Making use of Deep Convolutional Neural Networks for high accuracy, handwritten digit recognition.",
            "heroku": false,
            "npm": false,
            "link": "https://www.youtube.com/",
            "linkHeroku": 'https://www.youtube.com/',
            "linkNpm": 'https://www.youtube.com/',
        }, 
        {
            "title": "Diagnosing Breast Cancer" , 
            "description": "Using the Breast Cancer Wisconsin (Diagnostic) Data Set to create a model that predicts whether or not patients have Breast Cancer based on the available measurement",
            "heroku": false,
            "npm": false,
            "link": "https://www.youtube.com/",
            "linkHeroku": 'https://www.youtube.com/',
            "linkNpm": 'https://www.youtube.com/',
        }, 
        
        
    ] 
  return (
    <div className={styles.container}>
        {projects.map((project) => 
            <WeekendProject
                title={project.title} 
                description={project.description}
                heroku={project.heroku}
                npm={project.npm}
                link={project.link}
                linkHeroku={project.linkHeroku}
                linkNpm={project.linkNpm} />
        )}
      
    </div>
  );
}
