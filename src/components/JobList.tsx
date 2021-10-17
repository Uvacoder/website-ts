import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
// import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '10px 18px',
    background: '#19191f',
    height: '100%',
    color: 'white',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    textAlign: 'center'
  },
  
  secondaryTail: {
    backgroundColor: "theme.palette.secondary.main",
  },
}));

export function JobList() {
  const classes = useStyles();


    // let jobs : {company: string, position: string, 
    //     description: string, date: string}[] = [ {
    //         company: "Technical University of Delft",
    //         position: "Student",
    //         description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    //         molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    //         numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    //         optio, eaque rerum!`,
    //         date: "September 2021 - Ongoing"
    //     },
    //     {
    //         company: "GILO Technologies",
    //         position: "Junior Backend Developer",
    //         description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    //         molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    //         numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    //         optio, eaque rerum!`,
    //         date: "September 2021 - Ongoing"
    //     },
        
    // ]

    
    return (
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                9:30 am
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Technical University of Delft
                </Typography>
                <Typography>BSc Computer Science and Engineering Student since September 2020</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Junior Backend Developer
                </Typography>
                <Typography>at GILO Technologies since September 2021</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <HotelIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Certified Self-Learner
                </Typography>
                <Typography></Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <RepeatIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                I do not wash the dishes
                </Typography>
                <Typography></Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      );
    }
    
