import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import MainPage from './pages/MainPage';
import RoutersTable from './pages/RoutersTable';
import IsisLinksTable from './pages/IsisLinksTable';
import NavBar from './components/NavBar';

function App() {
  return (
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
  );
}

export default App;
