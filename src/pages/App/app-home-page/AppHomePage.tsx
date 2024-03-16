
// 

import { LineGraph, MyBarChart, TopDueProjects,} from '../..'
import './styles.css'


const AppHomePage = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="container">
        <div className="card">
          <div className='innerCard'>
            <div>
              <p>Total Projects</p>
              <p className='fig'>3</p>
            </div>
            <div className='percentage'>
              <p>46%</p>
            </div>
          </div>

        </div>
        <div className="card">
        <div className='innerCard'>
            <div>
              <p>Total Tasks</p>
              <p className='fig'>18</p>
            </div>
            <div className='percentage'>
              <p>74%</p>
            </div>
          </div>
        </div>
        <div className="card">
        <div className='innerCard'>
            <div>
              <p>Total Expense</p>
              <p className='fig'>5</p>
            </div>
            <div className='percentage'>
              <p>14%</p>
            </div>
          </div>
        </div>
        <div className="card">
        <div className='innerCard'>
            <div>
              <p>Total Users</p>
              <p className='fig'>5</p>
            </div>
            <div className='percentage'>
              <p>14%</p>
            </div>
          </div>
        </div>
      </div>
      <LineGraph />
      <div className='Footer'>
        <TopDueProjects />
        <MyBarChart />
      </div>
    </>
  )
}

export default AppHomePage
