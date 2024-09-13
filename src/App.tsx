import './App.css'

import MyClock from './component/MyClock/MyClock'
import Friend from './component/Friend/Friend'
function App() {
  let boolTest = 3;
  return (
    <>
    {boolTest == 3 && <Friend/>}
    <MyClock/>
  </>
  )

}

export default App
