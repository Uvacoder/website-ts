import * as React from 'react';
import styles from '../stylesheets/WeekendProject.module.css'

type WeekendProjectProps = {
    title: string,
    description: string,
    heroku?: boolean,
    npm?: boolean,

}

export default function WeekendProject ({ title, description, heroku, npm }: WeekendProjectProps) {
  return (
    <div className={styles.container}>
        <h3 style={{ fontSize: '2rem' }}>{title}</h3>
        <text style={{ width: '10px' }}>{description}</text>
        
        <div style={{ display: 'flex', justifyContent: 'space-evenly',  padding:'10px 0 10px 0'}}>
            <h3>Repository</h3>
            {heroku ? <h3>Heroku</h3> : ''}
            {npm ? <h3>NPM</h3> : ''}
        </div>
      
    </div>
  );
}
