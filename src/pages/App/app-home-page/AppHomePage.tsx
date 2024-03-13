
// 

import { LineGraph, MyBarChart, TopDueProjects,  } from '../..'
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
    <MyBarChart/>
   </div>
    </>
  )
}

export default AppHomePage
