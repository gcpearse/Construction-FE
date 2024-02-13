import { IoClose, IoMenu } from "react-icons/io5"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { toggle } from "../features/sidebar/sidebarSlice"

const Nav: React.FC = () => {

  const isSidebarVisible = useAppSelector((state) => state.sidebar.visibleSidebar)
  const dispatch = useAppDispatch()

  return (
    <nav>
      <h1>Construction</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Jobs</li>
        <li>Admin</li>
      </ul>
      {isSidebarVisible ? (
        <IoClose
          className="nav-icon"
          onClick={() => dispatch(toggle())} />
      ) : (
        <IoMenu
          className="nav-icon"
          onClick={() => dispatch(toggle())} />
      )}
    </nav>
  )
}

export default Nav
