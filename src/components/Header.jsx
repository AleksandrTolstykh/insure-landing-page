import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(256, 26%, 20%)',
    color: '#fff',
    fontFamily: 'DM Serif Display',
    paddingBottom: 75,
    [theme.breakpoints.up('md')]: {
      paddingTop: 75,
    },
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  divider: {
    backgroundColor: 'hsl(0, 0%, 98%)',
    width: '25%',
  },
  title: {
    fontSize: '60px',
    [theme.breakpoints.up('md')]: {
      paddingTop: 75,
    },
  },
  content: {
    paddingTop: 25,
    paddingBottom: 25,
    fontSize: '16px',
  },
  desktopImage: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      position: 'absolute',
    },
  },
  mobileImage: {
    display: 'block',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'none',
      marginBottom: 75,
    },
  },
  item1: {
    order: 2,
    textAlign: 'center',
    zIndex: 1,
    [theme.breakpoints.up('md')]: {
      order: 1,
      textAlign: 'left',
    },
  },
  item2: {
    order: 1,
    [theme.breakpoints.up('md')]: {
      order: 2,
    },
  },
  alignLeft: {
    textAlign: 'left',
  },
  alignRight: {
    textAlign: 'right',
  },
  backgroundLeftDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 450,
    },
  },
  backgroundRightDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      position: 'absolute',
      right: 0,
      top: 75,
    },
  },
  backgroundLeftMobile: {
    position: 'relative',
    top: 0,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  backgroundRightMobile: {
    position: 'relative',
    bottom: 150,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.root}>
        <Container className={classes.container}>
          <Grid container>
            <Grid item xs={12} md={6} className={classes.item1}>
              <Box className={classes.alignLeft}>
                <img src='images/bg-pattern-intro-left-mobile.svg' alt='bg-pattern-left' className={classes.backgroundLeftMobile} />
              </Box>
              <Hidden smDown>
                <Divider className={classes.divider} />
              </Hidden>
              <Box className={classes.title}>
                Humanizing your insurance.
              </Box>
              <Box className={classes.content}>
                Get your life insurance coverage easier and faster. We blend our expertise
                and technology to help you find the plan that’s right for you. Ensure you
                and your loved ones are protected.
              </Box>
              <CustomButton
                content='View plans'
                background='hsl(256, 26%, 20%)'
                backgroundHover='#fff'
                border='#fff'
                color='#fff'
                colorHover='hsl(256, 26%, 20%)'
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.item2}>
              <img src='images/image-intro-desktop.jpg' alt='intro' className={classes.desktopImage} />
              <img src='images/image-intro-mobile.jpg' alt='intro' className={classes.mobileImage} />
            </Grid>
          </Grid>
          <img src='images/bg-pattern-intro-left-desktop.svg' alt='bg-pattern-left' className={classes.backgroundLeftDesktop} />
          <img src='images/bg-pattern-intro-right-desktop.svg' alt='bg-pattern-right' className={classes.backgroundRightDesktop} />
        </Container>
      </Box>
      <Box className={classes.alignRight}>
        <img src='images/bg-pattern-intro-right-mobile.svg' alt='bg-pattern-right' className={classes.backgroundRightMobile} />
      </Box>
    </Box>
  );
}

export default Header;
