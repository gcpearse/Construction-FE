import BusinessInfoDisplay from "./businessInfo/BusinessInfoDisplay"
import BusinessInfoUpdater from "./businessInfo/BusinessInfoUpdater"
import JobsDisplay from "./jobs/JobsDisplay"
import ServicesDisplay from "./services/ServicesDisplay"
import UserProfile from "./userProfile/UserProfile"

const Dashboard: React.FC = () => {

  return (
    <div className="page-wrapper">

      <div className="page-top">
        <h2>Dashboard</h2>
        <UserProfile />
      </div>

      <div className="page-els-wrapper dashboard-wrapper">
        <BusinessInfoDisplay />
        <JobsDisplay />
        <ServicesDisplay />
      </div>

      <BusinessInfoUpdater />

    </div>
  )
}

export default Dashboard
