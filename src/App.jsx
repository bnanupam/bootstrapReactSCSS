import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='container'>
        <div className="row">
          <div className="col-6 offset-2">
            <h1>React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p className='pt-5'>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
