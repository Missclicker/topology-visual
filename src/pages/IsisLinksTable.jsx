import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import isisLinksData from '../../isisLinksData.json';

const IsisLinksTable = () => {
  const [links, setLinks] = useState([]);
  const [pageSize, setPageSize] = useState(25);
  const [filterModel, setFilterModel] = useState({
    items: [],
  });

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
    { field: 'HOSTNAME', headerName: 'Hostname', width: 150, sortable: true, filterable: true },
    { field: 'ISIS', headerName: 'ISIS', width: 100, sortable: true, filterable: true },
    { field: 'IFNAME', headerName: 'Interface', width: 150, sortable: true, filterable: true },
    { field: 'IF_STATUS', headerName: 'Status', width: 120, sortable: true, filterable: true },
    { field: 'ADJ_FORM', headerName: 'Adjacency', width: 120, sortable: true, filterable: true },
    { field: 'BW', headerName: 'Bandwidth', width: 120, sortable: true, filterable: true },
    { field: 'PEER_COUNT', headerName: 'Peers', width: 100, sortable: true, filterable: true },
    { field: 'METRIC_L2', headerName: 'L2 Metric', width: 120, sortable: true, filterable: true },
    { field: 'FW_IP', headerName: 'Forward IP', width: 150, sortable: true, filterable: true },
    { field: 'GW_IP', headerName: 'Gateway IP', width: 150, sortable: true, filterable: true },
    { field: 'METRIC_TE', headerName: 'TE Metric', width: 120, sortable: true, filterable: true },
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
          pageSizeOptions={[25, 50, 100]}
          pagination
          disableSelectionOnClick
          sortingMode="client"
          filterMode="client"
          filterModel={filterModel}
          onFilterModelChange={(model) => setFilterModel(model)}
        />
      </Paper>
    </Box>
  );
};

export default IsisLinksTable; 