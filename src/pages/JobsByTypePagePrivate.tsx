import { useCookies } from "react-cookie"
import Login from "../features/admin/Login"
import { useTestAuthQuery } from "../features/api/apiSlice"
import { useParams } from "react-router-dom"
import JobsByType from "../features/jobs/JobsByType"


const JobsByTypePagePrivate: React.FC = () => {


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
        <JobsByType service={service} />
      )}
    </section>
  )
}


export default JobsByTypePagePrivate
