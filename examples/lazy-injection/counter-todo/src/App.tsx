import { Suspense, lazy, useReducer, useTransition } from "react"
import "./App.css"
import logo from "./logo.svg"

const Counter = lazy(() =>
  import("./features/counter/Counter").then(m => ({ default: m.Counter })),
)

const Quotes = lazy(() =>
  import("./features/quotes/Quotes").then(m => ({ default: m.Quotes })),
)

const App = () => {
  const [counterOpen, toggleCounter] = useReducer(b => !b, false)
  const [quotesOpen, toggleQuotes] = useReducer(b => !b, false)
  const [, startTransition] = useTransition()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <details open={counterOpen}>
          <summary onClick={() => startTransition(toggleCounter)}>
            Counter example
          </summary>
          <Suspense>{counterOpen && <Counter />}</Suspense>
        </details>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <details open={quotesOpen}>
          <summary onClick={() => startTransition(toggleQuotes)}>
            Quotes example
          </summary>
          <Suspense>{quotesOpen && <Quotes />}</Suspense>
        </details>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://react-redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://reselect.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reselect
          </a>
        </span>
      </header>
    </div>
  )
}

export default App