import { type } from 'os';
import * as React from 'react';
import Icon from './Icon'

type InterestProps = {
    title: string,
    icon?: string,
    text: string,
}

export default function Interest({ title, text }: InterestProps) {

    return (
        <div>
            <Icon />
            <h3>{title}</h3>
            <text>{text}</text>

        </div>
    );
}
