import { Typography, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import BackButton from 'src/shared/BackButton';
import AddExcercise from './AddExcercise';
import { useParams } from 'react-router';

const AddSystemPage = () => {
  const { id } = useParams();
  return (
    <PageContainer title="Add Device" description="this is adding device page">
      <Box
        component="div"
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={{ xs: 'flex-start', sm: 'space-between' }}
        alignItems={{ xs: 'start', sm: 'center' }}
      >
        <Box component="div" mb={{ xs: 2, sm: 0 }}>
          <Typography variant="h3">
            <BackButton /> {id ? 'Edit Exercise' : 'Add Exercise'}
          </Typography>
        </Box>
      </Box>
      <AddExcercise id={id} />
    </PageContainer>
  );
};

export default AddSystemPage;
