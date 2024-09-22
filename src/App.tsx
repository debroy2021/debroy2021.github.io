import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [alert, setAlert] = useState(false);
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: window.innerHeight }}
    >
      <Button onClick={() => setAlert(true)}>Gundu</Button>
      {alert && <h1>Pontu</h1>}
    </div>
  );
};

export default App;
