import * as React from "react";
import './LightSwitcher.css'

function LightSwitcher() {
  // use the state hook
  const [mode, setMode] = React.useState("dark");

  const clickEvent = () => {
    setMode(mode === "dark" ? "light" : "dark")
  }

  return (
    <main className={mode}>
      <button onClick={clickEvent}>
        {mode === "dark" ? "1-Turn on the Light" : "2-Turn off the Light"}
      </button>
    </main>
  );
}

export default function App() {
  return <LightSwitcher />
}
