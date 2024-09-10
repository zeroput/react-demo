import './App.css'
import Employee from './component/Employee'
import Badge from './component/Badge/Badge'

function App() {
  const showOrNot = false;

  return showOrNot ?
    <>
      <Badge></Badge>
    </>
    :
    <>
      <Employee />
    </>
}

export default App
