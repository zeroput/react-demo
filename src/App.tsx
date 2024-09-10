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
        <h2>1. string type{myName}</h2>
        <h2>2. number type: {myNum}</h2>
        <h2>3. bool type: {threeExp ? 'yes': 'no'}</h2>
        <h2>4. call the API: get the fixed(2) of this {PI} "==="  {PI.toFixed(2)}</h2>
        <h2>5. display the obj, {obj.key1}</h2>
        <h2>6. display the obj, {JSON.stringify(obj)}</h2>
        <h2>=========</h2>
        <h2 onClick={myFn}>7. Click me</h2>
        <button onClick={ (e)=>fnWithParams(3333, e) }>Run Alert</button>
        <br/>
        <button  onClick={ ()=>myFnGeric(5555) }>Run Generic Function</button>
        <h2 id={idBind}>
          8. id is {idBind}
        </h2>
        <h2 className={classBind}>9. Bind the css class </h2>
        <h2 style={my_style}>10. bind the style by using variable</h2>
        <h2 style={{color : 'grey'}}>11. bind the style use obj directly</h2>
        <div dangerouslySetInnerHTML={{__html : innerHtmlStr}}></div>
        {/* this will iter the number array by using arr.map() function */}
        <div id='test the iter'>
          {
            my_arr_test.map(ele => {
              return  <div id={ele.toString()} key={ele}>
                      <h5>{ele}</h5>
                    </div>
            })
          }
        </div>
        
      </div>
    </>
  )
}

export default App
