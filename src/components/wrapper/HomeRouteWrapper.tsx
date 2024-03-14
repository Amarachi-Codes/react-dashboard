import { Link, Outlet } from "react-router-dom";
import { IoMdNotificationsOutline, IoIosMenu } from "react-icons/io";


const HomeRouteWrapper = () => {
  return (
    <div>
      <header className='header'>
        <div className="header-left">
          <IoIosMenu />
          <span>Logo Here</span>
          <input type="text" placeholder="search from message" />
        </div>


        <div className="header-right">


          <Link to={'/'}><IoMdNotificationsOutline /></Link>
          <Link to={'/project'}>Project</Link>

        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default HomeRouteWrapper
