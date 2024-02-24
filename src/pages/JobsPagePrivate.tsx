import { useCookies } from "react-cookie"
import Login from "../features/admin/Login"
import JobsBoard from "../features/jobs/JobsBoard"

const JobsPagePrivate: React.FC = () => {

  const [cookies] = useCookies(["token"])

  return (
    <section>
      {!cookies.token ? (
        <Login />
      ) : (
        <JobsBoard />
      )}
    </section>
  )
}

export default JobsPagePrivate
