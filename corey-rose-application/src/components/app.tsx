import { RouterProvider } from "react-router-dom";
import { router } from "../router/index";

export default function App() {
  return <RouterProvider router={router} />;
}

// <div>
//   <a href="https://vite.dev" target="_blank">
//     <img src="${coreySvg}" class="logo" alt="Vite logo" />
//   </a>
//   <h1>Vite + TypeScript</h1>
//   <div class="card">
//     <button id="counter" type="button"></button>
//   </div>
//   <p class="read-the-docs">
//     Click on the Vite and TypeScript logos to learn more
//   </p>
// </div>
