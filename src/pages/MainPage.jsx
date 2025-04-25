import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Stack, Paper } from '@mui/material';
import CytoscapeComponent from 'react-cytoscapejs';
import cytoscape from 'cytoscape';
import nodeHtmlLabel from 'cytoscape-node-html-label';
import graphData from '/graphData.json';
import { nodeStyles } from '../styles/nodeStyles';
import { edgeStyles } from '../styles/edgeStyles';
import { initializeCytoscape, WHEEL_SENSITIVITY, ZOOM_LEVEL, PAN_LEVEL } from '../config/cytoscapeConfig';

// Register the extension
cytoscape.use(nodeHtmlLabel);

const MainPage = () => {
  const [elements, setElements] = useState([]);
  const cyRef = useRef();
  // Create a deep copy of the original graph data
  const originalGraphData = JSON.parse(JSON.stringify(graphData));
  
  // Create a dictionary of initial positions
  const initialPositions = {};
  if (originalGraphData.nodes) {
    originalGraphData.nodes.forEach(node => {
      if (node.data && node.position) {
        initialPositions[node.data.id] = node.position;
      }
    });
  }
  console.log('Initial positions:', initialPositions);

  useEffect(() => {
    setElements(originalGraphData);
  }, []);

  const handleButtonClick = (action) => {
    const cy = cyRef.current;
    if (!cy) {
      console.log('Cytoscape instance not available');
      return;
    }

    switch (action) {
      case 'refresh': {
        console.log('Resetting positions...');
        // Update positions of all nodes to their initial positions
        cy.nodes().forEach(node => {
          const nodeId = node.id();
          if (initialPositions[nodeId]) {
            console.log(`Setting position for ${nodeId}:`, initialPositions[nodeId]);
            node.position(initialPositions[nodeId]);
          }
        });
        // Reset zoom and pan
        cy.zoom(ZOOM_LEVEL);
        cy.pan({ x: PAN_LEVEL, y: PAN_LEVEL });
        break;
      }
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
          Reset View
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
          wheelSensitivity={WHEEL_SENSITIVITY}
          cy={(cy) => {
            cyRef.current = cy;
            cy = initializeCytoscape(cy);
            return cy;
          }}
          stylesheet={[nodeStyles, edgeStyles]}
        />
      </Paper>
    </Box>
  );
};

export default MainPage;
