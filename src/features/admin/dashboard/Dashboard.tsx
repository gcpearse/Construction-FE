import Logout from "./Logout"
import BusinessInfoDisplay from "./businessInfo/BusinessInfoDisplay"
import BusinessInfoUpdater from "./businessInfo/BusinessInfoUpdater"

const Dashboard: React.FC = () => {

  return (
    <div className="dashboard-wrapper">

      <div className="dashboard-top">
        <h2>Dashboard</h2>
        <Logout />
      </div>

      <BusinessInfoDisplay />

      <BusinessInfoUpdater />

    </div>
  )
}

export default Dashboard
