import * as React from 'react';
import WeekendProject from './WeekendProject';
import styles from '../stylesheets/WeekendProjectList.module.css'

type WeekendProjectListProps = {
}

export default function WeekendProjectList ({  }: WeekendProjectListProps) {
    let projects : { title: string,
                description: string,
                heroku: boolean,
                npm: boolean }[] = [
        { 
            "title": "Corona Bot" , 
            "description": "A small script written in Node that can create various plots using the data from the Johns Hopkins University data repository.",
            "heroku": false,
            "npm": false,
        }, 
        {
            "title": "Corona Bot" , 
            "description": "A small script written in Node that can create various plots using the data from the Johns Hopkins University data repository.",
            "heroku": false,
            "npm": true,
        }, 
        {
            "title": "Corona Bot" , 
            "description": "A small script written in Node that can create various plots using the data from the Johns Hopkins University data repository.",
            "heroku": false,
            "npm": false,
        }, 
        {
            "title": "Corona Bot" , 
            "description": "A small script written in Node that can create various plots using the data from the Johns Hopkins University data repository.",
            "heroku": true,
            "npm": false,
        }, 
        {
            "title": "Corona Bot" , 
            "description": "A small script written in Node that can create various plots using the data from the Johns Hopkins University data repository.",
            "heroku": false,
            "npm": false,
        }, 
        {
            "title": "Corona Bot" , 
            "description": "A small script written in Node that can create various plots using the data from the Johns Hopkins University data repository.",
            "heroku": false,
            "npm": false,
        }, 
        
    ] 
  return (
    <div className={styles.container}>
        {projects.map((project) => 
            <WeekendProject
                title={project.title} 
                description={project.description}
                heroku={project.heroku}
                npm={project.npm} />
        )}
      
    </div>
  );
}
