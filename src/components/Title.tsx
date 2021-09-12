import * as React from 'react';
import styles from '../stylesheets/Title.module.css'

type AppProps = {
    message: string
}

export default function Title ({ message }: AppProps) {
  return (
    <div 
        className={styles.container}
        style={{ color: 'white', margin:0 , padding:0  }}>
        <h1 className={styles.text}>
            { message }
        </h1>
      
    </div>
  );
}
