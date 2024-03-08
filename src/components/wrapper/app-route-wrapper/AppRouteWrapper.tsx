import { NavLink, Outlet } from "react-router-dom"
import './styles.css';
import AppProfile from "./AppProfile";

const AppRouteWrapper = () => {
  return (
    <>
    <div className="app-container">
      <div className="sidebar">
        <AppProfile/>
        <ul>
            <li>
                <NavLink to={"/app"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/app/project"}>Project</NavLink>
            </li>
            <li>
                <NavLink to={"/app/task"}>Task</NavLink>
            </li>
            <li>
                <NavLink to={"/app/members"}>Members</NavLink>
            </li>
            <li>
                <NavLink to={"/app/invoice"}>Invoice</NavLink>
            </li>
            <li>
                <NavLink to={"/app/calender"}>Calender</NavLink>
            </li>
            <li>
                <NavLink to={"/app/timesheet"}>Timesheet</NavLink>
            </li>
            <li>
                <NavLink to={"/app/messages"}>Messages</NavLink>
            </li>
            <li>
                <NavLink to={"/app/settings"}>Settings</NavLink>
            </li>
        </ul>
      </div>
      <div className="app-content">
        <Outlet/>
      </div>
    </div>
    </>
  )
}

export default AppRouteWrapper
