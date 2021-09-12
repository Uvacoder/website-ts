import * as React from 'react';
import styles from '../stylesheets/WeekendProject.module.css'
import { Button } from './Button';

type WeekendProjectProps = {
    title: string,
    description: string,
    heroku?: boolean,
    npm?: boolean,
    link: string, 
                linkHeroku: string, 
                linkNpm: string


}

export default function WeekendProject ({ title, description, heroku, npm, link, linkHeroku, linkNpm }: WeekendProjectProps) {
  return (
    <div className={styles.container}>
        <h3 style={{ fontSize: '2rem', width: '80%', alignSelf: 'center' }}>{title}</h3>
        <p style={{ fontSize: '1.25rem' }}>{description}</p>
        
        <div style={{ display: 'flex', justifyContent: 'space-evenly',  padding:'10px 0 10px 0'}}>
            <Button 
                text="Repository"
                link={link}
                />
            {heroku ? <Button text="Heroku"
                              link={linkHeroku} /> : ''}
            {npm ? <Button text="NPM Package"
                          link={linkNpm} /> : ''}
        </div>
      
    </div>
  );
}
