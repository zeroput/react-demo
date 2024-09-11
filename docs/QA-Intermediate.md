#### 1 What is a pure function and how are they relevant to React?

A function is considered pure if it contains no side effects and if, given the same input, it always returns the same output. They're relevant to React because, as a rule, React components (and more specifically, React's rendering flow) must be pure.



#### 2 What is the difference between a React element and a React component?

A React element is an object description of a DOM node. A React component is a function that optionally accepts input (via `props` or `context`), and returns a React element.

React 元素是 DOM 节点的对象描述。React 组件是一个函数，可以选择接受传入（通过 props  或 context ），并返回一个 React 元素。



#### 3 What are keys in React and why are they important?

Keys in React are used to identify unique elements in collections, such as arrays or maps. They play a critical role in helping React keep track of changes in the list or collection, ensuring that the rendering process is efficient and that the state is maintained correctly across re-renders.

给每个li 元素一个key，用作唯一标识符。当然，也可以使用元素的index，只需要在map的时候 (item, index)多加上一个参数

```jsx
friends.map((friend) => {
  return (
    <li key={friend.id}>
      <User profile={friend} />
    </li>
  )
})
// use index instead of id
<>
    <h2>These are my friends list</h2>
    <ul>
        {userList.map((obj, index) => {
            return <li key={index}>{obj.name}, the index is {index}</li>
        })}
    </ul>
</>
```

