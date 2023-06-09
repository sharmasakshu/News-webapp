import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState,useContext } from 'react';
import MyContext from './MyContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar(props) {
  // const [textInput, setTextInput] = useState('amritpal');
  //  console.log(textInput);
  const {setTextInput} = useContext(MyContext);
    
  const handleTextInputChange = (event) => {
    if (event.key === 'Enter') {
      console.log(event.target.value);
      setTextInput(event.target.value);
    }
  };

  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            color="inherit"
            sx={{ mx: 2,display: 'block', textDecoration: 'none' }}
          >
        The Bulletin Board
          </Typography>
          <Typography 
          component="a"
            href="/business"
            color="inherit" sx={{ mx: 2,display: 'block', textDecoration: 'none'  }}>Business</Typography>
            <Typography 
            component="a"
            href="/technology"
            color="inherit"
            sx={{ mx: 2,display: 'block' , textDecoration: 'none' }} >Tech & Science</Typography>
            <Typography 
             component="a"
            href="/health"
            color="inherit"
            sx={{ mx: 2,display: 'block', textDecoration: 'none'  }}>Heath</Typography>
            <Typography
             component="a"
            href="/entertainment"
            color="inherit"
             sx={{ mx: 2,display: 'block', textDecoration: 'none'  }}>Entertainment</Typography>
          <Typography  
          component="a"
            href="/sports"
            color="inherit"
            sx={{ flexGrow: 1, mx:2, display: { xs: 'none', sm: 'block' , textDecoration: 'none' } }}>Sports</Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onKeyDown= {handleTextInputChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}
