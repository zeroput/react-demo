import * as React from "react";
import './LightSwitcher.css'

function LightSwitcher() {
  // use the state hook
  const [mode, setMode] = React.useState("dark");

  const activateDarkMode = () => {
    setMode("dark")
  }

  const activateLightMode = () => {
    setMode("light")
  }

  return (
    <main className={mode}>
      {mode === "light" ? (
        <button onClick={activateDarkMode}>Turn off the light</button>
      ) : (
        <button onClick={activateLightMode}>Turn on the light please</button>
      )}
    </main>
  );
}

export default function App() {
  return <LightSwitcher />
}
