import { Link, Outlet } from "react-router-dom";
import { IoMdNotificationsOutline, IoIosMenu } from "react-icons/io";
import profImg from './../../assets/profImg.jpg';
import { MdArrowDropDown } from "react-icons/md";
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


          <Link to={'/notification'}><IoMdNotificationsOutline /></Link>
          <Link to={'/project'}>
          <div className="profileDetails">
            <img src={profImg} className='profileHeader' />
            <div className="details">
              <p>Md Shimul Hoss</p>
              <p>Ui/Ux Designer</p>
            </div>
            <div className="dropdown">
              <MdArrowDropDown />
            </div>
          </div>
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default HomeRouteWrapper
