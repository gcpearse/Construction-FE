import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"

const App: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </main>
  )
}

export default App
