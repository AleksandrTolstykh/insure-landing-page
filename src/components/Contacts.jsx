import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { CustomFaceBookIcon, CustomTwitterIcon, CustomPinterestIcon, CustomInstagramIcon } from './Icons';
import CustomButton from './CustomButton';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'url(images/bg-pattern-footer-mobile.svg)',
    backgroundColor: 'hsl(0, 0%, 98%)',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 25,
    [theme.breakpoints.up('md')]: {
      background: 'url(images/bg-pattern-footer-desktop.svg)',
      backgroundColor: 'hsl(0, 0%, 98%)',
      backgroundRepeat: 'no-repeat',
      textAlign: 'left',
      alignItems: 'start',
    },
  },
  grid: {
    marginTop: 25,
    marginBottom: 25,
  },
  iconBlock: {
    marginTop: 25,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginTop: 0,
    },
  },
  divider: {
    marginTop: 25,
    marginBottom: 25,
  },
}));

function Contacts() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container className={classes.grid}>
        <Grid item xs={12} md={10}>
          <img src='images/logo.svg' alt='logo' />
        </Grid>
        <Grid item xs={12} md={2} className={classes.iconBlock}>
          <Grid container>
            <Grid item xs={3}>
              <CustomFaceBookIcon />
            </Grid>
            <Grid item xs={3}>
              <CustomTwitterIcon />
            </Grid>
            <Grid item xs={3}>
              <CustomPinterestIcon />
            </Grid>
            <Grid item xs={3}>
              <CustomInstagramIcon />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.divider}>
          <Divider />
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid item>
            <CustomButton
              content='Our company'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(273, 4%, 51%)'
              colorHover='hsl(273, 4%, 51%)'
            />
          </Grid>
          <Grid item>
            <CustomButton
              content='How we work'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(270, 9%, 17%)'
              colorHover='hsl(270, 9%, 17%)'
              decorationHover='underline'
            />
          </Grid>
          <Grid item>
            <CustomButton
              content='Why Insure?'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(270, 9%, 17%)'
              colorHover='hsl(270, 9%, 17%)'
              decorationHover='underline'
            />
          </Grid>
          <Grid item>
            <CustomButton
              content='View plans'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(270, 9%, 17%)'
              colorHover='hsl(270, 9%, 17%)'
              decorationHover='underline'
            />
          </Grid>
          <Grid item>
            <CustomButton
              content='Reviews'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(270, 9%, 17%)'
              colorHover='hsl(270, 9%, 17%)'
              decorationHover='underline'
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid item>
            <CustomButton
              content='Help me'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(273, 4%, 51%)'
              colorHover='hsl(273, 4%, 51%)'
            />
          </Grid>
          <Grid item>
            <CustomButton
              content='FAQ'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(270, 9%, 17%)'
              colorHover='hsl(270, 9%, 17%)'
              decorationHover='underline'
            />
          </Grid>
          <Grid item>
            <CustomButton
              content='Terms Of Use'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(270, 9%, 17%)'
              colorHover='hsl(270, 9%, 17%)'
              decorationHover='underline'
            />
          </Grid>
          <Grid item>
            <CustomButton
              content='Privacy Policy'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(270, 9%, 17%)'
              colorHover='hsl(270, 9%, 17%)'
              decorationHover='underline'
            />
          </Grid>
          <Grid item>
            <CustomButton
              content='Cookies'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(270, 9%, 17%)'
              colorHover='hsl(270, 9%, 17%)'
              decorationHover='underline'
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid item>
            <CustomButton
              content='Contact'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(273, 4%, 51%)'
              colorHover='hsl(273, 4%, 51%)'
            />
          </Grid>
          <Grid item>
            <CustomButton
              content='Sales'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(270, 9%, 17%)'
              colorHover='hsl(270, 9%, 17%)'
              decorationHover='underline'
            />
          </Grid>
          <Grid item>
            <CustomButton
              content='Support'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(270, 9%, 17%)'
              colorHover='hsl(270, 9%, 17%)'
              decorationHover='underline'
            />
          </Grid>
          <Grid item>
            <CustomButton
              content='Live Chat'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(270, 9%, 17%)'
              colorHover='hsl(270, 9%, 17%)'
              decorationHover='underline'
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Grid item>
            <CustomButton
              content='Others'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(273, 4%, 51%)'
              colorHover='hsl(273, 4%, 51%)'
            />
          </Grid>
          <Grid item>
            <CustomButton
              content='Careers'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(270, 9%, 17%)'
              colorHover='hsl(270, 9%, 17%)'
              decorationHover='underline'
            />
          </Grid>
          <Grid item>
            <CustomButton
              content='Press'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(270, 9%, 17%)'
              colorHover='hsl(270, 9%, 17%)'
              decorationHover='underline'
            />
          </Grid>
          <Grid item>
            <CustomButton
              content='Licences'
              background='transparent'
              backgroundHover='transparent'
              border='transparent'
              color='hsl(270, 9%, 17%)'
              colorHover='hsl(270, 9%, 17%)'
              decorationHover='underline'
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contacts;
