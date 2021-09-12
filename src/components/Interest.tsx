import { type } from 'os';
import * as React from 'react';
import Icon from './Icon'
import styles from '../stylesheets/Interest.module.css'

type InterestProps = {
    title: string,
    icon?: string,
    text: string,
}

export default function Interest({ title, text }: InterestProps) {

    return (
        <div className={styles.container}>
            <Icon />
            <h3>{title}</h3>
            <text style={{color: '#72747f'}}>{text}</text>

        </div>
    );
}
