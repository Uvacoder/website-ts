import * as React from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import styles from '../stylesheets/Article.module.css'

type ArticleProps = {
    title: string,
    date: string,
    link: string,
    image: string

}

export function Article ({ title, date, link, image }: ArticleProps) {
  return (
      <Router>
          <Link className={styles.container} to={link}>
          <div className={styles.smol}>
            <h2>{title}</h2>
            <p>{date}</p>
            <img src={image} alt="" />
        </div>
          </Link>
        
      </Router>
    
  );
}
