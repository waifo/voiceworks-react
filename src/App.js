import React from "react";

import Home from "./pages/home";
import { ErrorBoundary } from "./components";

function ErrorFallback({ error, componentStack, resetErrorBoundary }) {
  return (
    <div>
      <p>Something went wrong</p>
      <pre>{error.message}</pre>
      <pre>{componentStack}</pre>
    </div>
  );
}

const myErrorHandler = (error, componentStack) => {
  //error logging
};
function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
        <Home />
      </ErrorBoundary>
    </>
  );
}

export default App;
