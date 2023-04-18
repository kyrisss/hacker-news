import React from "react";
import { createRoot } from "react-dom/client";
import "@styles/index.scss";
import { AppRoutes } from "@routes/AppRoutes";
import { store } from "@redux/store";
import { Provider } from "react-redux";

const rootNode = document.getElementById("root");

if (rootNode) {
  createRoot(rootNode).render(
    <Provider store={store}>
      <AppRoutes />
    </Provider>,
  );
}
