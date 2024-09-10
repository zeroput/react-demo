import './App.css'

function App() {
  // use {} expression
  const myName = 'Hello World';
  const myNum = 101;
  let threeExp = true;
  const PI = 3.1416;
  let obj = {    
    "key1": "Tom",
    "key2": "Jerry",
    "key3": "Jepson"
  }

  
  return (
    <>
      <div>
        <h2>1. string type{myName}</h2>
        <h2>2. number type: {myNum}</h2>
        <h2>3. bool type: {threeExp ? 'yes': 'no'}</h2>
        <h2>4. call the API: get the fixed(2) of this {PI} "==="  {PI.toFixed(2)}</h2>
        <h2>5. display the obj, {obj.key1}</h2>
        <h2>5. display the obj, {JSON.stringify(obj)}</h2>
        <h2></h2>
        <h2></h2>
        <h2></h2>
      </div>
    </>
  )
}

export default App
