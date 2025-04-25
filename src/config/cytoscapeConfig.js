import { nodeHtmlLabelConfig } from "./nodeHtmlLabelConfig";

export const WHEEL_SENSITIVITY = 0.4;
export const ZOOM_LEVEL = 1;
export const PAN_LEVEL = 0;

export const initializeCytoscape = (cy) => {
  // Initial viewport state
  cy.zoom(ZOOM_LEVEL);
  cy.pan({ x: PAN_LEVEL, y: PAN_LEVEL });

  // Set zoom limits
  cy.zoomingEnabled(true);
  cy.minZoom(0.2);
  cy.maxZoom(10.0);

  // Node interaction settings
  cy.autoungrabify(false); // Allow node dragging
  cy.autolock(false); // Allow node movement

  // Initialize node HTML labels
  cy.nodeHtmlLabel(nodeHtmlLabelConfig);

  return cy;
};
