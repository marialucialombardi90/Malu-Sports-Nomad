import React from 'react';
import { Box, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import AuthorizedServicePartnerTable from './BookingsTable';

const Bookings = () => {
  return (
    <PageContainer
      title="Bookings"
      description="this is Bookings"
    >
      <Box
        component="div"
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={{ xs: 'flex-start', sm: 'space-between' }}
        alignItems={{ xs: 'start', sm: 'end' }}
      >
        <Box component="div" mb={{ xs: 2, sm: 0 }}>
          <Typography variant="h3">Bookings</Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 6 }}>
        <AuthorizedServicePartnerTable />
      </Box>
    </PageContainer>
  );
};

export default Bookings;
