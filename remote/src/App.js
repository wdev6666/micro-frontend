import "./App.css";
import React, { Suspense } from "react";

const Demo = React.lazy(() => import("app1/Demo"));
// const RemoteApp = React.lazy(() => import("app2/App"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Remote App | App2</h1>
        <Suspense fallback={"loading..."}>
          <Demo />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
