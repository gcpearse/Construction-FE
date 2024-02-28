import { Route, Routes } from "react-router-dom"
import "./App.css"
import AdminPage from "./pages/AdminPage"
import JobsPagePrivate from "./pages/JobsPagePrivate"
import HomePage from "./pages/HomePage"
import ServicesPagePublic from "./pages/ServicesPagePublic"
import Header from "./common/Header"
import Footer from "./common/Footer"
import Nav from "./common/Nav"
import Sidebar from "./features/sidebar/Sidebar"
import { useAppDispatch } from "./app/hooks"
import { closeSidebar } from "./features/sidebar/sidebarSlice"
import ServicesPagePrivate from "./pages/ServicesPagePrivate"


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
            path="/services"
            element={<ServicesPagePublic />}
          />

          <Route
            path="/admin"
            element={<AdminPage />}
          />

          <Route
            path="/admin/jobs"
            element={<JobsPagePrivate />}
          />

          <Route
            path="/admin/services"
            element={<ServicesPagePrivate />}
          />
        </Routes>

      </main>

      <Footer />

    </>
  )
}

export default App
