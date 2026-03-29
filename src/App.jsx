import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>My First React App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add 1
      </button>
    </div>
  )
}

export default App