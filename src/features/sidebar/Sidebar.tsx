import { useAppSelector } from "../../app/hooks"

const Sidebar: React.FC = () => {

  const isSidebarVisible = useAppSelector((state) => state.sidebar.visibleSidebar)

  return (
    <div className={isSidebarVisible ? (
      "sidebar visible-sidebar"
    ) : (
      "sidebar"
    )}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Jobs</li>
        <li>Admin</li>
      </ul>
    </div>
  )
}

export default Sidebar
