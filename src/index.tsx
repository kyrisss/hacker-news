import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootNode = document.getElementById("root");

if (rootNode) {
  createRoot(rootNode).render(
    <StrictMode>
      <div>Hello</div>
    </StrictMode>
  );
}
