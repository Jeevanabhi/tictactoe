import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import Board from "./board.jsx";
createRoot(document.getElementById("root")).render(
  <>
    <Board />
  </>
);
