import * as React from 'react';
import Interest from './Interest'
import styles from '../stylesheets/InterestList.module.css'

type InterestProps = {
}

export default function InterestList (props: InterestProps) {
    let interests : {title: string, text: string}[] = [
        { 
            "title": "Backend Development" , 
            "text": "I've worked with numerous technologies, some of them include: Docker, CI/CD, Spring Boot, .NET, NestJS, Express,Django, FastAPI and PostgreSQL."
        }, 
        {
            "title": "Data Science" , 
            "text": "I was always fascinated with this field and trying to learn more about it. I primarily work with R although I have used Python before."
        },
        {
            "title": "Machine Learning", 
            "text": "Learning more about this as well, primarily in R. I've worked on supervized and unsupervized learning as well as Neural Networks (mainly Convolutional)."
        },
        
    ] 

  return (
    <div className={styles.container}>
        {interests.map((interest) => 
            <Interest
                title={interest.title} 
                text={interest.text} />
        )}
    </div>
  );
}
