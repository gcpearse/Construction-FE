import Login from "../features/admin/Login"
import Dashboard from "../features/admin/dashboard/Dashboard"
import { useCookies } from "react-cookie"
import { useTestAuthQuery } from "../features/api/apiSlice"

const AdminPage: React.FC = () => {

  const [{ token }] = useCookies(["token"])

  const {
    isSuccess
  } = useTestAuthQuery(token)

  return (
    <section>
      {!isSuccess ? (
        <Login />
      ) : (
        <Dashboard />
      )}
    </section>
  )
}

export default AdminPage
