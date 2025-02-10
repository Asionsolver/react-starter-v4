import { BrowserRouter } from "react-router";
import { Suspense } from "react";
import Routes from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;