
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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
           
        <BarChart
          width={500}
          height={300}
          data={data}
          
        >
         
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="days" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          
        </BarChart>
      
    </div>
  )
}

export default MyBarChart
