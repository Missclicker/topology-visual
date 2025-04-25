import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import isisLinksData from '../../isisLinksData.json';

const IsisLinksTable = () => {
  const [links, setLinks] = useState([]);
  const [pageSize, setPageSize] = useState(25);

  // Commented out API code for future use
  // useEffect(() => {
  //   const fetchLinks = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/api/isis-links');
  //       setLinks(response.data);
  //     } catch (error) {
  //       console.error('Error fetching ISIS links:', error);
  //     }
  //   };
  //   fetchLinks();
  // }, []);

  // Use static data for now
  useEffect(() => {
    setLinks(isisLinksData);
  }, []);

  const columns = [
    { field: 'HOSTNAME', headerName: 'Hostname', width: 150, sortable: true },
    { field: 'ISIS', headerName: 'ISIS', width: 100, sortable: true },
    { field: 'IFNAME', headerName: 'Interface', width: 150, sortable: true },
    { field: 'IF_STATUS', headerName: 'Status', width: 120, sortable: true },
    { field: 'ADJ_FORM', headerName: 'Adjacency', width: 120, sortable: true },
    { field: 'BW', headerName: 'Bandwidth', width: 120, sortable: true },
    { field: 'PEER_COUNT', headerName: 'Peers', width: 100, sortable: true },
    { field: 'METRIC_L2', headerName: 'L2 Metric', width: 120, sortable: true },
    { field: 'FW_IP', headerName: 'Forward IP', width: 150, sortable: true },
    { field: 'GW_IP', headerName: 'Gateway IP', width: 150, sortable: true },
    { field: 'METRIC_TE', headerName: 'TE Metric', width: 120, sortable: true },
  ];

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <Typography variant="h4" gutterBottom>
        ISIS Links
      </Typography>
      <Paper sx={{ height: 'calc(100vh - 200px)', width: '100%' }}>
        <DataGrid
          rows={links}
          columns={columns}
          getRowId={(row) => `${row.HOSTNAME}-${row.IFNAME}`}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10, 25, 50, 100]}
          pagination
          disableSelectionOnClick
          sortingMode="server"
          sx={{
            '& .MuiDataGrid-cell': {
              fontSize: '0.875rem',
            },
            '& .MuiDataGrid-columnHeader': {
              fontSize: '0.875rem',
              fontWeight: 'bold',
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default IsisLinksTable; 