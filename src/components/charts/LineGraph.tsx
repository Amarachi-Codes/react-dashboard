
import {CartesianGrid,  Legend, Tooltip, Line, LineChart, XAxis, YAxis,} from "recharts";
import "./styles.css";

const data =[
    
    {name: "Jan", task: 0},
    {name: "Feb", task: 200},
    {name: "Mar", task: 800},
    {name: "Apr", task: 0},
    {name: "May", task: -100},
    {name: "June", task: -20},
    {name: "July", task: 0},
    {name: "Aug", task: -100},
    {name: "Sep", task: -80},
    {name: "Oct", task: -80},
    {name: "Nov", task: 200},
    {name: "Dec", task: 0},
];
const LineGraph = () => {
   
  return (
    <div className="Linechart">
      <p className="LineTitle">Task Overview</p>
      <p className="LineSubtitle">Total Completed task in last 7days</p>
      <LineChart width={1110} height={350} data={data}>
        <Line 
        type ="monotone" 
        dataKey="task" 
        stroke="#FF1903"
        fill="#82ca9d" 
        strokeWidth={2}
        />
        <CartesianGrid stroke="#efefef"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
      </LineChart>
    
    </div>
  )
}

export default LineGraph

