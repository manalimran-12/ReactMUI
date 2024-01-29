import React from 'react';
import { Box, Typography, Grid, ListItem, List, Divider, useMediaQuery, createTheme} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

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
  const currentYear = new Date().getFullYear();

  return (
  <Box>
   <Box sx={{ height: isSmScreen ? '55vh' :'30vh', bgcolor: '#21222A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid container sx={{ justifyContent: 'space-evenly' }}>
        <Grid item>
          <Typography variant="Subtitle1" color="white" align="center" sx={{justifyContent:'center', fontFamily:'inter,serif'}}>
          For Bussiness
          </Typography>
          <List>
            <ListItem sx={{fontFamily:'inter,serif', cursor:'pointer', color:'grey', '&:hover': {
            color: '#7b1fa2'}}}>
              Employer
            </ListItem>
            <ListItem sx={{fontFamily:'inter,serif', cursor:'pointer', color:'grey', '&:hover': {
            color: '#7b1fa2'}}}>
              Health Plan
            </ListItem>
            <ListItem sx={{fontFamily:'inter,serif', cursor:'pointer', color:'grey', '&:hover': {
            color: '#7b1fa2'}}}>
              Individual
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <Typography variant="Subtitle1" color="white" align="center" sx={{justifyContent:'center', fontFamily:'inter,serif'}}>
          Resources
          </Typography>
          <List>
            <ListItem sx={{fontFamily:'inter,serif', cursor:'pointer', color:'grey', '&:hover': {
            color: '#7b1fa2'}}}>
              Resource Center
            </ListItem>
            <ListItem sx={{fontFamily:'inter,serif', cursor:'pointer', color:'grey', '&:hover': {
            color: '#7b1fa2'}}}>
              Testimonials
            </ListItem>
            <ListItem sx={{fontFamily:'inter,serif', cursor:'pointer', color:'grey', '&:hover': {
            color: '#7b1fa2'}}}>
              STV
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <Typography variant="Subtitle1" color="white" align="center" sx={{justifyContent:'center', fontFamily:'inter,serif'}}>
          Partners
          </Typography>
          <List>
            <ListItem sx={{fontFamily:'inter,serif', cursor:'pointer', color:'grey', '&:hover': {
            color: '#7b1fa2'}}}>
              ABC Tech
            </ListItem>
            <ListItem sx={{fontFamily:'inter,serif', cursor:'pointer', color:'grey', '&:hover': {
            color: '#7b1fa2'}}}>
              XYZ Tech
            </ListItem>
          </List>
        </Grid>
        <Grid item>
          <Typography variant="Subtitle1" color="white" align="center" sx={{justifyContent:'center', fontFamily:'inter,serif'}}>
         Company
          </Typography>
          <List>
            <ListItem sx={{fontFamily:'inter,serif', cursor:'pointer', color:'grey', '&:hover': {
            color: '#7b1fa2'}}}>
              About
            </ListItem>
            <ListItem sx={{fontFamily:'inter,serif', cursor:'pointer', color:'grey', '&:hover': {
            color: '#7b1fa2'}}}>
              Contact
            </ListItem>
            <ListItem sx={{fontFamily:'inter,serif', cursor:'pointer', color:'grey', '&:hover': {
            color: '#7b1fa2'}}}>
              Pricing
            </ListItem>
          </List>
        </Grid>
        <Grid item spacing={2}>
          <Typography variant="subtitle1" color="white" align="center" sx={{ fontFamily: 'inter,serif' }}>
            Social Media
          </Typography>
          
          <List sx={{ display: 'flex', flexDirection: 'row' }}>
            <ListItem>
              <FacebookIcon sx={{color:'#61DAFB', fontFamily:'inter,serif','&:hover': {
            color: '#7b1fa2'}}} />
            </ListItem>
            <ListItem>
              <XIcon sx={{color:'#61DAFB', fontFamily:'inter,serif','&:hover': {
            color: '#7b1fa2'}}} />
            </ListItem>
            <ListItem>
              <LinkedInIcon sx={{color:'#61DAFB', fontFamily:'inter,serif','&:hover': {
            color: '#7b1fa2'}}} />
            </ListItem>
            <ListItem>
              <InstagramIcon sx={{color:'#61DAFB', fontFamily:'inter,serif','&:hover': {
            color: '#7b1fa2'}}}/>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ height: '10vh', bgcolor: '#21222A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Divider light>
      <Typography variant={isSmScreen ? 'caption' : 'subtitle1'} color="white" align="center" sx={{ fontFamily: 'inter,serif' }}>
            All Rights Reserved Manal Imran |  Copyright © {currentYear}
        </Typography>
      </Divider>
    </Box>
   </Box>
  );
}

export default Footer;