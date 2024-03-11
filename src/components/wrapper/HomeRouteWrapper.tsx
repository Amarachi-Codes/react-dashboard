import { Link, Outlet } from "react-router-dom"


const HomeRouteWrapper = () => {
  return (
    <div>
      <header className='header'>
        <div className="header-left">
          <span>Logo Here</span>
        <input type="text" placeholder="search from message" />
        </div>
        

        <div className="header-right">


          <Link to={'/'}>Notification</Link>
          <Link to={'/project'}>Project</Link>

        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default HomeRouteWrapper
