import { Collapse } from '@material-ui/core';
import * as React from 'react';
import { useState } from 'react';
import styles from '../stylesheets/Job.module.css'

type JobProps = {
    company: string,
    position: string,
    description: string,
    date: string
}

export function Job ({ company, position, description, date }: JobProps) {
    const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>

        <div className={styles.smol}>

            <h1>{position}</h1>
            <h3>{company}</h3>
            <Collapse in={open}
            style={{display:'flex', }}>
                <p>{description}</p>
                <p>{date}</p>
            </Collapse>

      </div>

        
        
    </div>
  );
}
