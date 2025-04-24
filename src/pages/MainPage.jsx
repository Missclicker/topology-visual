import { useState, useEffect, useRef } from 'react';
import { Box, Button, Stack, Paper } from '@mui/material';
import CytoscapeComponent from 'react-cytoscapejs';
import axios from 'axios';

const MainPage = () => {
  const [elements, setElements] = useState({
    nodes: [],
    edges: []
  });
  const cyRef = useRef(null);

  // Example layout options
  const layout = {
    name: 'cose',
    padding: 30,
    animate: true
  };

  const handleButtonClick = (action) => {
    // This will be implemented based on specific requirements
    console.log(`Button clicked: ${action}`);
  };

  return (
    <Box>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Button variant="contained" onClick={() => handleButtonClick('refresh')}>
          Refresh Graph
        </Button>
        <Button variant="contained" onClick={() => handleButtonClick('hide-edges')}>
          Hide Edges
        </Button>
        <Button variant="contained" onClick={() => handleButtonClick('show-all')}>
          Show All
        </Button>
        <Button variant="contained" onClick={() => handleButtonClick('highlight-critical')}>
          Highlight Critical
        </Button>
      </Stack>
      
      <Paper elevation={3} sx={{ height: '80vh', width: '100%' }}>
        <CytoscapeComponent
          elements={CytoscapeComponent.normalizeElements(elements)}
          style={{ width: '100%', height: '100%' }}
          layout={layout}
          cy={(cy) => {
            cyRef.current = cy;
          }}
          stylesheet={[
            {
              selector: 'node',
              style: {
                'background-color': '#666',
                'label': 'data(label)'
              }
            },
            {
              selector: 'edge',
              style: {
                'width': 3,
                'line-color': '#ccc',
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'triangle'
              }
            }
          ]}
        />
      </Paper>
    </Box>
  );
};

export default MainPage; 