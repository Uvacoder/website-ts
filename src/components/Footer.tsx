import { Icon } from '@material-ui/core';
import * as React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from '../stylesheets/Footer.module.css'

type FooterProps = {
}

export function Footer (props: FooterProps) {
  return (
    <div className={styles.footer}>
        <h2 className={styles.h2}>Contact me</h2>
        <div className={styles.router}>
            <Router>
                <Link className={styles.link} to="google.com">
                🗿 LinkedIn
                </Link>
                <Link  className={styles.link} to={{pathname:"www.google.com"}} target='_blank'>
                🗿 GitHub
                </Link>
                <Link  className={styles.link} to="google.com">
                🗿 Twitter    
                </Link>
            </Router>
        </div>
        
    </div>
  );
}
