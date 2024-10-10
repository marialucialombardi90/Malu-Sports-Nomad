import React from 'react';
import { Typography, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
// import QueriesTable from './QueriesTable';
import FeedbackTable from './FeedbackTable';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

const Queries = () => {
  // const [value, setValue] = useState('1');

  // const handleChange = (_, newValue) => {
  //   setValue(newValue);
  // };
  return (
    <PageContainer title="Feedback" description="this is Device Feedback page">
      <Box
        component="div"
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent={{ xs: 'flex-start', sm: 'space-between' }}
        alignItems={{ xs: 'start', sm: 'end' }}
      >
        <Box component="div" mb={{ xs: 2, sm: 0 }}>
          <Typography variant="h3">Feedback Table</Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        {/* <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Queries/Feedback" value="1" />
              <Tab label="Reports" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1"> */}
        <FeedbackTable />
        {/* </TabPanel>
          <TabPanel value="2">
            <QueriesTable />
          </TabPanel>
        </TabContext> */}
      </Box>
    </PageContainer>
  );
};

export default Queries;
