import { Link } from "react-router-dom"

const ServicesPage: React.FC = () => {
  return (
    <div className="temp-wrapper">
      <h2>Hello</h2>

      <p>This site is currently under construction.</p>
      
      <p>If you have user credentials, you can log in and view the admin dashboard <Link to="/admin"><span>here</span></Link>.</p>
    </div>
  )
}

export default ServicesPage
