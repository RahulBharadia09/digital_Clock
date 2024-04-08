import "./App.css";
import { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  const [currenttime, setsurrenttime] = useState(time);

  const updatetime = () => {
    let time = new Date().toLocaleTimeString();
    setsurrenttime(time);
  };
  setInterval(updatetime, 1000);

  return (
    <>
      <div class="timediv">
        <h1>{currenttime}</h1>  
      </div>
    </>
  );
}

export default App;
