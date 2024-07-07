import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dropzone/styles.css";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <MantineProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MantineProvider>
  </React.StrictMode>
);
