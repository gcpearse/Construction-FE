import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Header from "./common/Header"
import Footer from "./common/Footer"
import Nav from "./common/Nav"
import Sidebar from "./features/sidebar/Sidebar"
import { useAppDispatch } from "./app/hooks"
import { closeSidebar } from "./features/sidebar/sidebarSlice"
import AdminLogin from "./features/admin/AdminLogin"

const App: React.FC = () => {

  const dispatch = useAppDispatch()

  return (
    <>
      <Header />
      <Nav />
      <main onClick={() => dispatch(closeSidebar())}>
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/admin"
            element={<AdminLogin />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
