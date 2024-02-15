import Login from "../features/admin/Login"
import Logout from "../features/admin/Logout"
import { useCookies } from "react-cookie"

const Admin: React.FC = () => {

  const [cookies] = useCookies(["token"])

  return (
    <section>
      {!cookies.token ? (
        <Login />
      ) : (
        <Logout />
      )}
    </section>
  )
}

export default Admin
