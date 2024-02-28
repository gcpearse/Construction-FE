import { useCookies } from "react-cookie"
import Login from "../features/admin/Login"
import JobsBoard from "../features/jobs/JobsBoard"
import { useTestAuthQuery } from "../features/api/apiSlice"


const JobsPagePrivate: React.FC = () => {


  const [{ token }] = useCookies(["token"])

  const {
    isSuccess
  } = useTestAuthQuery(token)


  return (
    <section>
      {!isSuccess ? (
        <Login />
      ) : (
        <JobsBoard />
      )}
    </section>
  )
}


export default JobsPagePrivate
