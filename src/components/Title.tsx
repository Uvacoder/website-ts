import * as React from 'react';
import styles from '../stylesheets/Title.module.css'

type AppProps = {
    message: string
}

export default function App ({ message }: AppProps) {
  return (
    <div 
        className={styles.container}
        style={{ color: 'white' }}>
        <h1 className={styles.text}>
            { message }
        </h1>
      
    </div>
  );
}
