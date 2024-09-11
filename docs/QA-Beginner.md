#### 1 What does it mean to derive state in React?

Deriving state refers to the practice of computing values based on props or other state within a React component. It allows you to minimize the amount of React state you use in a component, often leading to more predictable state updates.

```js
const [searchTerm, setSearchTerm] = React.useState("");
const filteredItems = items.filter((item) =>
  item.toLowerCase().includes(searchTerm.toLowerCase())
);
```



#### 2 What is "rendering" in React?

Rendering is just a fancy way of saying that React calls your function component with the intent of eventually updating the View.



#### 3 What causes a React component to re-render?

When the **state** of a component changes.



#### 4 If you needed to preserve a value across renders, but that value had nothing to do with the UI, what would you do?

You'd store the value inside of a "ref" using `React.useRef`.



#### 5 What is the purpose of `useEffect`?

From a philosophical perspective, to synchronize your component with some external system. From a pragmatic perspective, to remove side effects (that aren't triggered by a particular event) from React's rendering flow.

从哲学的角度来看，将你的组件与一些外部系统同步。从实用的角度来看，从 React 的渲染流程中删除副作用（不是由特定事件触发的）



#### 6 What would you do if you had two components that both needed to share the same non-visual logic?

You'd encapsulate that logic into a custom hook that each component could consume. encapsulate 封装

```js
export default function useNonVisualLogic() {
  // Reusable, non visual logic 
}
```



#### 7 How can you set default props for a component?

React components are just functions, so you can use JavaScript's "default parameters" feature.

```js
function PrimaryButton ({ size = "medium", color = "var(--yellow)" }) {
  ...
}
function PasswordInput({ minimum = 8 }) {
    ...
}
```



#### 8 What's the de facto way to add a new item to an array that's on state?

To add an item to an array, use JavaScript's spread operator (`...`) to spread all the existing elements onto a new array with the new item. // 使用js中的解构语法糖来结构 并添加到数组中

```js
const handleNewHighScore = (session) => {
  const newHighScores = [...highScores, session]
  setHighScores(newHighScores)
}
// my state example
const [itemList, setItemList] = useState([])
const newData = (itemToAdd) => {
    const afterUpdate = [...itemList, itemToAdd]
    setItemList(afterUpdate)
}
```



#### 9 What's the de facto way to remove an item from an array that's on state?

//在state中 移除一个item，传入id然后filter掉这个item，然后将filter后的内容重新setStateVarName回去。

To remove an item from an array, use JavaScript's `filter` method to create a new array, filtering out the item that should be removed.

```js
const handleRemoveCheater = (id) => {
  const newHighScores = highScores.filter((session) =>
    session.id !== id
  )
  setHighScores(newHighScores)
}
```



#### 10 What's the de facto way to update an item in an array that's on state?

// 更新 state 数组中某个item的实际方法是什么？

To update an item, use JavaScript's `map` method to create a new array, updating the specific item where appropriate.

// 使用map来迭代 创建一个新数组，重新set回去，下面是代码示例

```js
const handleUpdateHighScore = (updatedSession) => {
  const newHighScores = highScores.map((session) => {
    return session.id === updatedSession.id // equals the id, return new obj, or return it back
      ? updatedSession
      : session
  })
  setHighScores(newHighScores)
}
```



#### 11 What types of data can you pass as props?

string, bool, number, the basic data type. function , arrary and object{}. You can pass any data type that is in the javascript.



#### 12 What are the most common techniques used to conditionally render UI in React?

1use if-else

2 use JavaScript's ternary operator.

3 use && 

The most basic example is just using a simple `if/else` statement.

```jsx
function Dashboard () {
  const user = useAuth()
  if (user?.firstLogin === true) {
    return <h1>👋 Welcome!</h1>
  } else if (user) {
    return <h1>Welcome back!</h1>
  } else {
    return  <h1>Login to see your dashboard</h1>
  }
}
```

If you're rendering different UI based on a single condition, typically you'd use JavaScript's ternary operator.

```jsx
function Dashboard () {
  const user = useAuth()
  return user
    ? <h1>Welcome back!</h1>
    : <h1>Login to see your dashboard</h1>
}
```

You can also use JavaScript's logical `&&` operator.

> if the `showWarning()` return true, it will display the `<Warning />`, OR it will not display the html.

```jsx
function Dashboard () {
  return (
    <React.Fragment>
      <Logo />
      {showWarning() === true && <Warning />}
    </React.Fragment>
  )
}
```