import { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box } from '@mui/material';
import axios from 'axios';

const IsisLinksTable = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // This will be implemented when we have the backend API endpoint
    const fetchLinks = async () => {
      try {
        // const response = await axios.get('http://localhost:8000/api/isis-links');
        // setLinks(response.data);
      } catch (error) {
        console.error('Error fetching ISIS links:', error);
      }
    };

    fetchLinks();
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        ISIS Links
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Source Router</TableCell>
              <TableCell>Target Router</TableCell>
              <TableCell>Metric</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {links.map((link) => (
              <TableRow key={link.id}>
                <TableCell>{link.id}</TableCell>
                <TableCell>{link.source_router}</TableCell>
                <TableCell>{link.target_router}</TableCell>
                <TableCell>{link.metric}</TableCell>
                <TableCell>{link.status}</TableCell>
                <TableCell>{link.last_updated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default IsisLinksTable; 