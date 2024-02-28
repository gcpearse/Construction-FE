import { useCookies } from "react-cookie"
import { useAppDispatch } from "../../../../app/hooks"
import { logout } from "../../authSlice"
import { MdLogout } from "react-icons/md"


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
    <button
      className="logout-btn"
      onClick={() => handleLogout()}>
      <MdLogout />&nbsp;Log out
    </button>
  )
}


export default Logout
