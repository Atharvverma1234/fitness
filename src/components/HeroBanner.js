import React from 'react';
import { Box,Stack,Typography,Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{ lg:'212px',xs:'70px'},
        ml:{ sm:'50px'}
    }} position='relative' p='20px'>
        <Typography color="#0e87c3" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography  fontSize={700}
        sx={{fontSize:{lg:'44px',xs:'40px'}}}>
            Eat, Sleep, Work <br/> and repeat 
        </Typography>
        <Typography fontSize='22px' lineHeight="35px" mb={3}>
            Check out some of the most effective exercises
        </Typography>
        <Button variant='contained' color='error' href='#exercises'>Explore Exercises</Button>
        <Typography fontWeight={600}
        color="#0e87c3"
        sx={{
            opacity:0.1,
            display:{lg:'block',xs:'none'}
        }} fontSize="200px"
        paddingRight="20px">
            Exercises
        </Typography>
    </Box>
  )
}

export default HeroBanner