import React from "react";
import { createRoot } from "react-dom/client";
import "@styles/index.scss";
import { AppRoutes } from "@routes/AppRotes";

const rootNode = document.getElementById("root");

if (rootNode) {
  createRoot(rootNode).render(<AppRoutes />);
}
