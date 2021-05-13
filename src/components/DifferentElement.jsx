import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    color: 'hsl(270, 9%, 17%)',
    fontFamily: 'DM Serif Display',
  },
  content: {
    color: 'hsl(273, 4%, 51%)',
    fontFamily: 'Karla',
  },
}));

function DifferentElement(props) {
  const classes = useStyles();

  return (
    <Box>
      <img src={props.image} alt='different' />
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.content}>{props.content}</p>
    </Box>
  );
}

export default DifferentElement;
