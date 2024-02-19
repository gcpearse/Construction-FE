import Logout from "./Logout"
import BusinessInfoDisplay from "./businessInfo/BusinessInfoDisplay"
import BusinessInfoUpdater from "./businessInfo/BusinessInfoUpdater"
import JobsDisplay from "./jobs/JobsDisplay"

const Dashboard: React.FC = () => {

  return (
    <div className="dashboard-wrapper">

      <div className="dashboard-top">
        <h2>Dashboard</h2>
        <Logout />
      </div>

      <div className="dashboard-components">
        <BusinessInfoDisplay />
        <JobsDisplay />
      </div>

      <BusinessInfoUpdater />

    </div>
  )
}

export default Dashboard
