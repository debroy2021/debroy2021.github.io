import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      {alert && <Alert onClose={() => setAlert(false)}>My alert</Alert>}
      <Button color="danger" onClick={() => setAlert(true)}>
        Press Me
      </Button>
    </div>
  );
}

export default App;
