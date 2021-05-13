import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';
import NavigationMenu from './NavigationMenu';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
  },
});

function NavigationBar() {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.root}>
      <Container>
        <Toolbar>
          <Grid container justify="flex-start">
            <img src='images/logo.svg' alt='logo' />
          </Grid>
          <Grid container justify="flex-end">
            <Hidden smDown>
              <CustomButton
                content='How we work'
                background='#fff'
                backgroundHover='#fff'
                border='#fff'
                color='hsl(273, 4%, 51%)'
                colorHover='hsl(270, 9%, 17%)'
              />
              <CustomButton
                content='Blog'
                background='#fff'
                backgroundHover='#fff'
                border='#fff'
                color='hsl(273, 4%, 51%)'
                colorHover='hsl(270, 9%, 17%)'
              />
              <CustomButton
                content='Account'
                background='#fff'
                backgroundHover='#fff'
                border='#fff'
                color='hsl(273, 4%, 51%)'
                colorHover='hsl(270, 9%, 17%)'
              />
              <CustomButton
                content='View plans'
                background='#fff'
                backgroundHover='hsl(270, 9%, 17%)'
                border='hsl(270, 9%, 17%)'
                color='hsl(270, 9%, 17%)'
                colorHover='hsl(0, 0%, 98%)'
              />
            </Hidden>
            <Hidden mdUp>
              <NavigationMenu />
            </Hidden>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavigationBar;
