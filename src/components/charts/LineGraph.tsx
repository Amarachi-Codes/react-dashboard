// import { Line } from "react-chartjs-2"


// const LineChart = () => {
//     const state ={
//         labels:[
//             "January", "Feburary","March","April","May","June","July","August","September","October","November","December"],
//             datasets:[
//                 {
//                     label:"Task Overview",
//                     backgroundColor:"rgba(75,192,192,1)",
//                     borderColor:"rgba(0,0,0,1)",
//                     borderWidth: 2,
//                     data:[0, 200, 800, 0, -100, -20, 0, -100, -80, -80, 200,0]
//                 }
//             ]
//     }
//     const options ={
//         plugins:{
//             legend:{
//                 display:true,
//                 position: "bottom"
//             },
//             title:{
//                 text:"Total tak completed in last 7 days",
//                 display:true,
//                 fontSize:20 
//             }
//         }
//     }
//   return (
//     <div>
//       <Line data={state}
//       options={options}
//       />

//       <p style={{textAlign:"center"}}>Line Chart</p>
//     </div>
//   )
// }

// export default LineChart



import {CartesianGrid,  Legend, Tooltip, Line, LineChart, XAxis, YAxis,} from "recharts";

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
    <div>
      <LineChart width={600} height={300} data={data}>
        <Line 
        type ="monotone" 
        dataKey="task" 
        stroke="#FF1903" 
        strokeWidth={2}
        />
        <CartesianGrid stroke="#ccc"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
      </LineChart>
    
    </div>
  )
}

export default LineGraph

