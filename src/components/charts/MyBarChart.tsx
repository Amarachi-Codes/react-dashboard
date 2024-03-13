
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';
import "./styles.css";

const data =[
  {name: "Sat", days: 2}, 
  {name: "Sun", days: 3.2},
  {name: "Mon", days: 2.5},
  {name: "Tue", days: 2},
  {name: "Wed", days: 2.7},
  {name: "Thur", days: 2.6},
  {name: "Fri", days: 2},
  
]
const MyBarChart = () => {
  return (
    <div>
        <p className="LineTitle">Timesheet Logged Hours</p>
      <p className="LineSubtitle"> Last 7days</p>   
        <BarChart
          width={750}
          height={250}
          data={data}
          
        >
         
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="days" fill="rgb(204,80,147)" activeBar={<Rectangle fill="rgb(157,87,168)" stroke="blue" />} />
          
        </BarChart>
      
    </div>
  )
}

export default MyBarChart
