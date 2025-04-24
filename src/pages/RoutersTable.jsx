import React from 'react';
import { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box } from '@mui/material';
import axios from 'axios';

const RoutersTable = () => {
  const [routers, setRouters] = useState([]);

  useEffect(() => {
    // This will be implemented when we have the backend API endpoint
    const fetchRouters = async () => {
      try {
        console.log("fetching routers");
        // const response = await axios.get('http://localhost:8000/api/routers');
        // setRouters(response.data);
      } catch (error) {
        console.error('Error fetching routers:', error);
      }
    };

    fetchRouters();
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Routers
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>IP Address</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {routers.map((router) => (
              <TableRow key={router.id}>
                <TableCell>{router.id}</TableCell>
                <TableCell>{router.name}</TableCell>
                <TableCell>{router.ip_address}</TableCell>
                <TableCell>{router.status}</TableCell>
                <TableCell>{router.last_updated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RoutersTable; 