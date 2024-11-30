import React, { useEffect } from 'react';
import './App.css';
import RoutesManager from "./routes";

function App() {
  useEffect(() => {
  }, []);
// Render the RoutesManager component which handles application routing
  return (
   <>
   <RoutesManager />
   </>
  );
}

export default App;