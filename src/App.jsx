import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import MainPage from './pages/MainPage';
import RoutersTable from './pages/RoutersTable';
import IsisLinksTable from './pages/IsisLinksTable';
import NavBar from './components/NavBar';

// Create a custom theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2e7d32', // This is the green color we were using
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#ffffff',
          color: 'rgba(0, 0, 0, 0.87)',
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: 'rgba(0, 0, 0, 0.87)',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f5f5f5',
            color: 'rgba(0, 0, 0, 0.87)',
          },
          '& .MuiDataGrid-cell': {
            color: 'rgba(0, 0, 0, 0.87)',
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: '#f5f5f5',
          },
          '& .MuiTablePagination-root': {
            color: 'rgba(0, 0, 0, 0.87)',
          },
        },
        panel: {
          backgroundColor: '#ffffff',
          color: 'rgba(0, 0, 0, 0.87)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Container maxWidth="xl" sx={{ 
          mt: 4, 
          backgroundColor: '#ffffff',
          minHeight: '100vh',
        }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/routers" element={<RoutersTable />} />
            <Route path="/isis-links" element={<IsisLinksTable />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
