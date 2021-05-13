import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import DifferentElement from './DifferentElement';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      alignItems: 'start',
    },
  },
  divider: {
    backgroundColor: 'hsl(273, 4%, 51%)',
    width: '15%',
    marginBottom: 50,
  },
  title: {
    color: 'hsl(270, 9%, 17%)',
    fontFamily: 'DM Serif Display',
    fontSize: '60px',
    marginBottom: 50,
  },
}));

function Different() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Divider className={classes.divider} />
      <Box component='div' className={classes.title}>
        We’re different
      </Box>
      <Grid container>
        <Grid item xs={12} md={4}>
          <DifferentElement
            image='images/icon-snappy-process.svg'
            title='Snappy Process'
            content='Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.'
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DifferentElement
            image='images/icon-affordable-prices.svg'
            title='Affordable Prices'
            content='We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.'
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DifferentElement
            image='images/icon-people-first.svg'
            title='People First'
            content='Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.'
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Different;
