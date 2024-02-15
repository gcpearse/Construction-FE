import { useCookies } from "react-cookie"
import { useAppDispatch } from "../../app/hooks"
import { logout } from "./authSlice"

const Dashboard: React.FC = () => {

  const dispatch = useAppDispatch()

  const removeCookie = useCookies(["token"])[2]

  const handleLogout = () => {
    dispatch(logout())
    removeCookie("token")
    localStorage.removeItem("name")
    localStorage.removeItem("role")
  }

  return (
    <div className="dashboard-wrapper">

      <h2>Dashboard</h2>

      <button onClick={() => handleLogout()}>
        Log out
      </button>
      
    </div>
  )
}

export default Dashboard
