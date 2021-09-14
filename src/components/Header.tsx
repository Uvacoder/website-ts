import * as React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import styles from '../stylesheets/Header.module.css'

type HeaderProps = {
}

export default function Header (props: HeaderProps) {
    let links : {section: string, link: string}[] = [{
        section: 'Interests',
        link: 'interests'
    },

    {
        section: 'Main Projects',
        link: 'projects'
    },

    {
        section: 'Small Projects',
        link: 'small-projects'
    },

    {
        section: 'My journey',
        link: 'journey'
    },

    {
        section: 'Articles',
        link: 'articles'
    },

    ]
  return (
    <div className={styles.container}>
        {links.map((link) => 
            <Link className={styles.link} 
            to={link.link}
            smooth={true}>
                {link.section}
            </Link>
        )}
    </div>
  );
}
