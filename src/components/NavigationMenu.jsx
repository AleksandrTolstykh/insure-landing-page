import React from 'react';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';

const StyledMenu = withStyles({
  paper: {
    backgroundColor: 'hsl(270, 9%, 17%)',
    border: '1px solid #d3d4d5',
    width: '100%',
    display: 'block',
    marginTop: '5px',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '10px',
  }
})(MenuItem);

const StyledMenuIcon = withStyles({
  root: {
    border: '3px solid hsl(270, 9%, 17%)',
    color: 'hsl(270, 9%, 17%)',
  }
})(MenuIcon);

const StyledCloseIcon = withStyles({
  root: {
    border: '3px solid hsl(270, 9%, 17%)',
    color: 'hsl(270, 9%, 17%)',
  }
})(CloseIcon);

const useStyles = makeStyles({
  block: {
    display: 'block',
  },
  hidden: {
    display: 'none',
  },
});

function NavigationMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box component='div'>
      <IconButton aria-controls='menu' aria-haspopup='true' onClick={handleClick}>
        <StyledMenuIcon className={anchorEl ? classes.hidden : classes.block} />
        <StyledCloseIcon className={anchorEl ? classes.block : classes.hidden} />
      </IconButton>
      <StyledMenu
        id='menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <CustomButton
            content='How we work'
            background='hsl(270, 9%, 17%)'
            backgroundHover='#fff'
            border='hsl(270, 9%, 17%)'
            color='#fff'
            colorHover='hsl(270, 9%, 17%)'
            width='100%'
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <CustomButton
            content='Blog'
            background='hsl(270, 9%, 17%)'
            backgroundHover='#fff'
            border='hsl(270, 9%, 17%)'
            color='#fff'
            colorHover='hsl(270, 9%, 17%)'
            width='100%'
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <CustomButton
            content='Account'
            background='hsl(270, 9%, 17%)'
            backgroundHover='#fff'
            border='hsl(270, 9%, 17%)'
            color='#fff'
            colorHover='hsl(270, 9%, 17%)'
            width='100%'
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <CustomButton
            content='View plans'
            background='hsl(270, 9%, 17%)'
            backgroundHover='#fff'
            border='#fff'
            color='#fff'
            colorHover='hsl(270, 9%, 17%)'
            width='100%'
          />
        </StyledMenuItem>
        <img src='images/bg-pattern-mobile-nav.svg' alt='bg-nav-mobile' width='100%' height='218px' />
      </StyledMenu>
    </Box>
  );
}

export default NavigationMenu;
