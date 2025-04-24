import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, ThemeProvider, createTheme } from '@mui/material';
import MainPage from './pages/MainPage';
import RoutersTable from './pages/RoutersTable';
import IsisLinksTable from './pages/IsisLinksTable';
import NavBar from './components/NavBar';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // This is the green color we were using
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Container maxWidth="xl" sx={{ mt: 4 }}>
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
