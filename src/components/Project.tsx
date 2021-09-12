import * as React from 'react';
import { Button } from './Button';
import styles from '../stylesheets/Project.module.css'

type ProjectProps = {
    title: string,
    description: string,
    text: string
}

export default function Project ({ title, description, text }: ProjectProps) {
  return (
    <div className={styles.container} >
        <div className={styles.smol}>
            <h2 className={styles.h2}>{title}</h2>
            <p className={styles.p}>{description}</p>
            <div style={{width: '15%', alignSelf:'center', margin: '15px'}}>
                <Button text={text} link="www.google.com" color="background: rgb(20,0,36);
background: linear-gradient(90deg, rgba(20,0,36,1) 0%, rgba(41,5,76,1) 25%, rgba(9,64,121,1) 53%, rgba(5,123,187,1) 76%, rgba(0,161,255,1) 100%);"/>
            </div>
        </div>
    </div>
  );
}
