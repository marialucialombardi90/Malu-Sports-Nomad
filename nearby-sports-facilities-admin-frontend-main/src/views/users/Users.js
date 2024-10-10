import { Typography, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import UserTable from './UserTable';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { setAuthData } from 'src/reducers/slices/AuthSLice';
import { dispatch } from 'src/reducers/configureStore';

const Users = () => {
  const userData = useSelector((state) => state.Auth.authData);

  useEffect(() => {
    if (!userData)
      (async () => {
        const { data } = await axios.get('/auth/me');
        if (data) {
          dispatch(setAuthData(data));
        }
      })();
  }, [userData]);
  return (
    <PageContainer title="Users Listing" description="this is users listing page">
      <Box
        component="div"
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={{ xs: 'flex-start', sm: 'space-between' }}
        alignItems={{ xs: 'start', sm: 'end' }}
      >
        <Box component="div" mb={{ xs: 2, sm: 0 }}>
          <Typography variant="h3">Users</Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 6 }}>
        <UserTable />
      </Box>
    </PageContainer>
  );
};

export default Users;
