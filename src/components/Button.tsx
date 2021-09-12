import * as React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import styles from '../stylesheets/Button.module.css'
type ButtonProps = {
    text: string,
    link: string,
    color?: string
}

export function Button ({ text, link, color }: ButtonProps) {
  return (
    <div className={styles.button} style={{background: color}}>
      <Router>
        <Link style={{textDecoration:'none', 
                    fontSize: '0.7rem', color: 'rgba(255,255,255)'}} 
                    to={link}>
              <h3>{ text }</h3>
          </Link>
      </Router>
        
    </div>
  );
}
