
// 

import { LineGraph, TopDueProjects,  } from '../..'
import './styles.css'


const AppHomePage = () => {
  return (
    <>
    <h1>Dashboard</h1>
    <div className="container">
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
    </div>
   <LineGraph/>
   <div className='Footer'>
    <TopDueProjects/>
    <div>Timesheet Logged Hours</div>
   </div>
    </>
  )
}

export default AppHomePage
