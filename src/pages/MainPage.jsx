import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Stack, Paper } from '@mui/material';
import CytoscapeComponent from 'react-cytoscapejs';
import graphData from '/graphData.json';
import { nodeStyles } from '../styles/nodeStyles';
import { edgeStyles } from '../styles/edgeStyles';

const MainPage = () => {
  const [elements, setElements] = useState([]);
  const cyRef = useRef(null);

  const layout = {
    name: 'cose',
    padding: 30,
    animate: true
  };

  useEffect(() => {
    setElements(graphData);
  }, []);

  const handleButtonClick = (action) => {
    const cy = cyRef.current;
    if (!cy) return;

    switch (action) {
      case 'refresh':
        cy.layout(layout).run();
        break;
      case 'hide-edges':
        cy.edges().style('display', 'none');
        break;
      case 'show-all':
        cy.elements().style('display', 'element');
        break;
      case 'highlight-critical':
        cy.nodes().forEach((n) => {
          if (n.data('sid') > 400) {
            n.style('background-color', '#f00');
          } else {
            n.style('background-color', '#fff');
          }
        });
        break;
      default:
        break;
    }
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
          stylesheet={[nodeStyles, edgeStyles]}
        />
      </Paper>
    </Box>
  );
};

export default MainPage;
