
import { CartesianGrid, Legend, Tooltip, Area, AreaChart, XAxis, YAxis, } from "recharts";
import "./styles.css";
import MyBtn from "../buttons/MyBtn";
import ColoredBtn from "../buttons/ColoredBtn";


const data = [

  { name: "Jan", task: 0 },
  { name: "Feb", task: 200 },
  { name: "Mar", task: 800 },
  { name: "Apr", task: 0 },
  { name: "May", task: 100 },
  { name: "June", task: 20 },
  { name: "July", task: 300 },
  { name: "Aug", task: 100 },
  { name: "Sep", task: 100 },
  { name: "Oct", task: 80 },
  { name: "Nov", task: 400 },
  { name: "Dec", task: 0 },
];
const LineGraph = () => {

  return (
    <div className="Linechart">
      <p className="LineTitle">Task Overview</p>
      <div className="lineWrapper">
        <p className="LineSubtitle">Total Completed task in last 7days</p>
        <div className="linebuttons">
          <MyBtn name="Weekly" />
          <ColoredBtn />
          <MyBtn name="Yearly" />
        </div>
      </div>
      <AreaChart width={1110} height={350} data={data}>
        <Area
          type="monotone"
          dataKey="task"
          stroke="#FF1903"
          fill="rgb(184, 28, 184)"
          strokeWidth={2}
        />
        <CartesianGrid stroke="#efefef" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </AreaChart>

    </div>
  )
}

export default LineGraph

