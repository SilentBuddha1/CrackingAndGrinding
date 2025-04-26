import "./App.css";
import React from "react";
import FormAction from "./components/FormAction";
import ErrorBoundary from "./components/ErrorBoundary";


function App() {
  return (
    <ErrorBoundary>
    <FormAction/> 
    </ErrorBoundary>
  );
}

export default App;
