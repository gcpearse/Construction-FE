import { IoClose, IoMenu } from "react-icons/io5"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { toggleSidebar } from "../features/sidebar/sidebarSlice"

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
          onClick={() => dispatch(toggleSidebar())} />
      ) : (
        <IoMenu
          className="nav-icon"
          onClick={() => dispatch(toggleSidebar())} />
      )}
    </nav>
  )
}

export default Nav
