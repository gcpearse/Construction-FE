import { useCookies } from "react-cookie"
import Login from "../features/admin/Login"
import { useTestAuthQuery } from "../features/api/apiSlice"
import SingleJob from "../features/jobs/single-job/SingleJob"


const SingleJobPagePrivate: React.FC = () => {


  const [{ token }] = useCookies(["token"])

  const {
    isSuccess
  } = useTestAuthQuery(token)


  return (
    <section>
      {!isSuccess ? (
        <Login />
      ) : (
        <SingleJob />
      )}
    </section>
  )
}


export default SingleJobPagePrivate
