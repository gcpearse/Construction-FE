import { useCookies } from "react-cookie"
import Login from "../features/admin/Login"
import ServicesBoard from "../features/services/ServicesBoard"
import { useTestAuthQuery } from "../features/api/apiSlice"

const ServicesPagePrivate: React.FC = () => {

  const [{token}] = useCookies(["token"])

  const {
    isSuccess
  } = useTestAuthQuery(token)

  return (
    <section>
      {!isSuccess ? (
        <Login />
      ) : (
        <ServicesBoard />
      )}
    </section>
  )
}

export default ServicesPagePrivate
