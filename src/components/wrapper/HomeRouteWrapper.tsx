import { Link, Outlet } from "react-router-dom"


const HomeRouteWrapper = () => {
  return (
    <div>
       <header className='header'>
      <Link to={'/'}>Home</Link>
      <Link to={'/project'}>Project</Link>
    </header>
    <Outlet/>
    </div>
  )
}

export default HomeRouteWrapper
