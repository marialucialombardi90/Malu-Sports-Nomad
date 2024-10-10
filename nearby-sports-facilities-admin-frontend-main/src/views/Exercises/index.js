import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import { Link } from 'react-router-dom';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FacilitiestTable from './ExcerciseTable';
const Excercises = () => {
  return (
    <PageContainer title="Excercise" description="this is Excercise listing page">
      <Box
        component="div"
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={{ xs: 'flex-start', sm: 'space-between' }}
        alignItems={{ xs: 'start', sm: 'end' }}
      >
        <Box component="div" mb={{ xs: 2, sm: 0 }}>
          <Typography variant="h3">Exercise Listing</Typography>
        </Box>
        <Box component="div">
          <Button
            size="medium"
            component={Link}
            to="/exercises/add"
            color="primary"
            variant="contained"
            startIcon={<AddOutlinedIcon />}
          >
            Add Exercise
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 6 }}>
        <FacilitiestTable />
      </Box>
    </PageContainer>
  );
};

export default Excercises;
