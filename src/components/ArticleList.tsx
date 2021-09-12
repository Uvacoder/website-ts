import * as React from 'react';
import { Article } from './Article';
import styles from '../stylesheets/ArticleList.module.css'
import logo from "../assets/spring.jpg"
import logo2 from "../assets/2.jpg"

type ArticleListProps = {
}

export default function ArticleList(props: ArticleListProps) {
    let articles: { title: string, date: string, link: string, image: string }[] = [{
        title: "Introduction to Spring Boot",
        date: "February 5th, 2020",
        link: "https://medium.com/nerd-for-tech/spring-boot-introduction-ab3fc10b0b8a",
        image: logo
    },
    {
        title: "Introduction to Spring Boot",
        date: "February 5th, 2020",
        link: "https://medium.com/nerd-for-tech/spring-boot-introduction-ab3fc10b0b8a",
        image: logo2
    }]

    return (
        <div className={styles.container}>
            {articles.map((article) =>
                <Article
                    title={article.title}
                    date={article.date}
                    link={article.link}
                    image={article.image}
                />
            )}

        </div>
    );
}
