import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'url(images/bg-pattern-how-we-work-mobile.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundColor: 'hsl(256, 26%, 20%)',
    color: '#fff',
    fontFamily: 'DM Serif Display',
    fontSize: '60px',
    marginBottom: 50,
    padding: 50,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      background: 'url(images/bg-pattern-how-we-work-desktop.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      backgroundColor: 'hsl(256, 26%, 20%)',
      textAlign: 'left',
      alignItems: 'start',
    },
  },
  button: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
  },
}));

function HowWeWork() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6}>
          Find out more about how we work
        </Grid>
        <Grid item xs={12} md={6} className={classes.button}>
          <CustomButton
            content='How We Work'
            background='hsl(256, 26%, 20%)'
            backgroundHover='#fff'
            border='#fff'
            color='#fff'
            colorHover='hsl(256, 26%, 20%)'
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HowWeWork;
