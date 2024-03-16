import { NavLink, Outlet } from "react-router-dom"
import './styles.css';
import AppProfile from "./AppProfile";
import { IoHomeSharp, IoSettingsOutline } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { BsListTask } from "react-icons/bs";
import { MdCardMembership } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";
import { IoIosTime } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";

const AppRouteWrapper = () => {
  return (
    <>
      <div className="app-container">
        <div className="sidebar">
          <AppProfile />
          <ul >
            <li>
              <IoHomeSharp className="homeicon"/>
              <NavLink to={"/app"} >Home</NavLink>
            </li>
            <li>
              <GoProject />
              <NavLink to={"/app/project"}>Project</NavLink>
            </li>
            <li>
              <BsListTask />
              <NavLink to={"/app/task"}>Task</NavLink>
            </li>
            <li>
              <MdCardMembership />
              <NavLink to={"/app/members"}>Members</NavLink>
            </li>
            <li>
            <LiaFileInvoiceSolid />
              <NavLink to={"/app/invoice"}>Invoice</NavLink>
            </li>
            <li>
            <SlCalender />
              <NavLink to={"/app/calender"}>Calender</NavLink>
            </li>
            <li>
            <IoIosTime />
              <NavLink to={"/app/timesheet"}>Timesheet</NavLink>
            </li>
            <li>
            <AiOutlineMessage />
              <NavLink to={"/app/messages"}>Messages</NavLink>
            </li>
            <li>
            <IoSettingsOutline />
              <NavLink to={"/app/settings"}>Settings</NavLink>
            </li>
          </ul>
        </div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default AppRouteWrapper
