// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Routes";
// import { Link } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      {/* <div>
        <Link to="https://vitejs.dev" >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link to="https://react.dev" >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
