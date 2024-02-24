import { useCookies } from "react-cookie"
import Login from "../features/admin/Login"
import ServicesBoard from "../features/services/ServicesBoard"

const ServicesPagePrivate: React.FC = () => {

  const [cookies] = useCookies(["token"])

  return (
    <section>
      {!cookies.token ? (
        <Login />
      ) : (
        <ServicesBoard />
      )}
    </section>
  )
}

export default ServicesPagePrivate
