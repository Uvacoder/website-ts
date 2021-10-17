// import { StylesProvider } from '@material-ui/core';
// import { style } from '@material-ui/system';
import * as React from 'react';
import styles from '../stylesheets/Chapter.module.css'

type ChapterProps = {
    year: number,
    story: string
}

export function Chapter ({ year, story }: ChapterProps) {
  return (
    <div className={styles.container}>
        <div className={styles.smol}>
        <h1 className={styles.h1}>{year}</h1>
        <p className={styles.p}>{story}</p>
            </div>
        
    </div>
  );
}
