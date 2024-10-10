import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import Router from './routes/Router';
import { baselightTheme } from './theme/DefaultColors';
import { Toaster } from 'react-hot-toast';
import axiosInstance from './utils/axios';

axiosInstance.initialize();

function App() {
  const routing = useRoutes(Router);
  const theme = baselightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {routing}
      <Toaster position="bottom-left" />
    </ThemeProvider>
  );
}

export default App;
