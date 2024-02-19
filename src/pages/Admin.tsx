import Login from "../features/admin/Login"
import Dashboard from "../features/admin/dashboard/Dashboard"
import { useCookies } from "react-cookie"

const Admin: React.FC = () => {

  const [cookies] = useCookies(["token"])

  return (
    <section>
      {!cookies.token ? (
        <Login />
      ) : (
        <Dashboard />
      )}
    </section>
  )
}

export default Admin
