import React from "react"
import { createRoot } from "react-dom/client";
import App from "./components/App"
import "bootstrap/dist/css/bootstrap.min.css"

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// )

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
