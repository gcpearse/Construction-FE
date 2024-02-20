import { Route, Routes } from "react-router-dom"
import "./App.css"
import AdminPage from "./pages/AdminPage"
import JobsPage from "./pages/JobsPage"
import HomePage from "./pages/HomePage"
import Header from "./common/Header"
import Footer from "./common/Footer"
import Nav from "./common/Nav"
import Sidebar from "./features/sidebar/Sidebar"
import { useAppDispatch } from "./app/hooks"
import { closeSidebar } from "./features/sidebar/sidebarSlice"

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
            element={<HomePage />}
          />
          <Route
            path="/admin"
            element={<AdminPage />}
          />
          <Route
            path="/admin/jobs"
            element={<JobsPage />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
