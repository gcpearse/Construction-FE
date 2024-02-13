import { useAppSelector } from "../../app/hooks"
import NavMenu from "../../common/NavMenu"

const Sidebar: React.FC = () => {

  const isSidebarVisible = useAppSelector((state) => state.sidebar.visibleSidebar)

  return (
    <div className={isSidebarVisible ? (
      "sidebar visible-sidebar"
    ) : (
      "sidebar"
    )}>
      <NavMenu />
    </div>
  )
}

export default Sidebar
