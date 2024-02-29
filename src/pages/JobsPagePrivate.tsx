import { useCookies } from "react-cookie"
import Login from "../features/admin/Login"
import { useTestAuthQuery } from "../features/api/apiSlice"
import { useParams } from "react-router-dom"
import Jobs from "../features/jobs/Jobs"


const JobsPagePrivate: React.FC = () => {


  const { service } = useParams()

  const [{ token }] = useCookies(["token"])

  const {
    isSuccess
  } = useTestAuthQuery(token)


  return (
    <section>
      {!isSuccess ? (
        <Login />
      ) : (
        <Jobs service={service} />
      )}
    </section>
  )
}


export default JobsPagePrivate
