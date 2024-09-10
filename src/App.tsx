import './App.css'
import Employee from './component/Employee'
import Student from './component/Student'

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

  // function, event
  const myFn = ()=>{
    console.log(123)
    alert(123)
  }

  const fnWithParams = (parmas1: any, event)=>{
    console.log(event)
    alert(parmas1)
  }
  
  const myFnGeric = <T,> (parmas2: T) =>{
    console.log(parmas2, typeof parmas2)
  }

  // bind some property
  var idBind = '100001'
  var classBind = 'test'
  let my_style = {color : 'blue'}

  let innerHtmlStr = `
  <section>
  <h1>12. this is a inner html for a test by geminix</h1>
  </section>
  `
  
  // use iter to iter the element, like v-for in vue.js
  const my_arr_test = [1,2,3,1000]

  return (
    <>
      <div>
        {/* next section custom component */}
        <Employee></Employee>
        <Student></Student>
      </div>
    </>
  )
}

export default App
