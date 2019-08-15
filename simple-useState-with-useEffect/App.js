import React from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { res, err } = useFetch("https://swapi.co/api/people/1");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1>API URLs : {res.url}</h1>
      <h1>Charector Name : {res.name}</h1>
      {err && "Error to Fetch Data"}
    </div>
  );
}

export default App;
