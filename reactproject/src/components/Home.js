import React from 'react';
import { Typography, Box, List, ListItem, useMediaQuery, createTheme } from '@mui/material';
import ReactLarge from '../Assests/react-icon-large.png';

const Home = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      bgcolor={'#282D35'}
      height={isSmScreen ? '55vh' : '80vh'}
      sx={{
        padding: isSmScreen ? '10px' : '20px', 
        backgroundImage: `url(${ReactLarge})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: isSmScreen ? 'right 30%' : 'right 30%', 
        backgroundSize: isSmScreen ? '22% auto' : '220px', 
      }}
    >
      <Typography variant={isSmScreen ? 'h7' : 'h3'} sx={{ fontFamily: 'inter,serif', color: 'white', textAlign: isSmScreen ? 'left' : 'left', fontWeight: 'bold', letterSpacing: '-0.05em', alignContent: isSmScreen ? 'left' : 'left', justifyContent: isSmScreen ? 'left' : 'left', paddingTop: isSmScreen ? '100px' : '40px' }}>

        Fun Facts about React
      </Typography>
      <List
        sx={{
          '& .MuiListItem-root::before': { content: '"•"', color: '#61DAFB', marginRight: '8px', fontSize: isSmScreen ? '0.8rem' : '1.4rem' }, 
          '& .MuiListItem-root': { marginBottom: isSmScreen ? '12px' : '20px' },
        }}
      >
        <ListItem sx={{ fontFamily: 'inter,serif', color: 'white' }}>
          <Typography variant={isSmScreen ? 'body2' : 'body1'}>Was first released in 2013</Typography>
        </ListItem>
        <ListItem sx={{ fontFamily: 'inter,serif', color: 'white' }}>
          <Typography variant={isSmScreen ? 'body2' : 'body1'}>Was originally created by Jordan Walke.</Typography>
        </ListItem>
        <ListItem sx={{ fontFamily: 'inter,serif', color: 'white' }}>
          <Typography variant={isSmScreen ? 'body2' : 'body1'}>Has well over 100K stars on GitHub.</Typography>
        </ListItem>
        <ListItem sx={{ fontFamily: 'inter,serif', color: 'white' }}>
          <Typography variant={isSmScreen ? 'body2' : 'body1'}>Is maintained by Facebook.</Typography>
        </ListItem>
        <ListItem sx={{ fontFamily: 'inter,serif', color: 'white' }}>
          <Typography variant={isSmScreen ? 'body2' : 'body1'}>Powers thousands of enterprise apps, including mobile apps.</Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default Home;
