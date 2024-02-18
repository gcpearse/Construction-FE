import { useCookies } from "react-cookie"
import { useAppDispatch } from "../../../app/hooks"
import { logout } from "../authSlice"

const Logout: React.FC = () => {

  const dispatch = useAppDispatch()

  const removeCookie = useCookies(["token"])[2]

  const handleLogout = () => {
    dispatch(logout())
    removeCookie("token")
    localStorage.removeItem("name")
    localStorage.removeItem("role")
  }
  
  return (
    <button onClick={() => handleLogout()}>
      Log out
    </button>
  )
}

export default Logout
