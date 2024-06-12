import { useState } from "react";
import "./App.css";

export default function App() {
  const [activte, setactivate] = useState(true);
  const [showAlert, setShowalert] = useState(true);

  const Input = ({ text, onchange }) => {
    return <input type="text" name="name" onChange={onchange} />;
  };
  const handleClick = () => {
    setShowalert(true);
  };

  const onchange = (e) => {
    setactivate(false);
    setShowalert(false);
  };
  const handleDesactivate = () => {
    setShowalert(false);
  };
  const Alert = ({ desacrivateAlert }) => {
    return (
      <div>
        <button onClick={desacrivateAlert}>x</button>
        alert
      </div>
    );
  };

  const Button = ({ onclik, activate, setactivate }) => {
    return (
      <button
        disabled={activate}
        title="Learn More"
        color="#841584"
        onClick={onclik}
        accessibilityLabel="Learn more about this purple button"
      >
        press
      </button>
    );
  };

  return (
    <main>
      {showAlert && <Alert desacrivateAlert={handleDesactivate} />}
      <Input onchange={onchange} activate={activte} setactivate={setactivate} />
      <Button onclik={handleClick} activate={activte} />
    </main>
  );
}
