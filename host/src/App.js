import "./App.css";
import React, { Suspense } from "react";

const Demo = React.lazy(() => import("app2/Demo"));
// const RemoteApp = React.lazy(() => import("app2/App"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Host App | App1</h1>
        <Suspense fallback={"loading..."}>
          <Demo />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
