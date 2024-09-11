import './App.css'

import PasswordInput from './component/PasswordInput/PasswordInput'
import Friend from './component/Friend/Friend'
function App() {
  let boolTest = 3;
  return (
    <>
    {boolTest == 3 && <Friend/>}
    <PasswordInput/>
  </>
  )

}

export default App
