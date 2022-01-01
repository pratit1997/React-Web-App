import React from 'react'
import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,
  } from "recharts";
  import './Data.css';
  import { format, parseISO } from "date-fns";

  
  const data = [];
 


export default class Data extends React.Component {
    
  state = {
    covid: null
  };

      async componentDidMount() {
        const url = "https://api.opencovid.ca/summary?stat=cases&loc=canada&after=01-01-2021";
        const response = await fetch(url);
        const data2 = await response.json();
        // this.setState({ artical: data, loading: false });
        console.log(Object.keys(data2.summary).length)
        for (let num = 0; num <Object.keys(data2.summary).length; num++) {
            // console.log(data2.summary[num].date)
            data.push({
              date: data2.summary[num].date,
              value: data2.summary[num].active_cases,
            });
            
        }
        this.setState({ covid: data});
        // console.log(data);
        
      }
    
      render() {
        
  return (

    <ResponsiveContainer width="100%" height={400} id="data" >
    <AreaChart data={this.state.covid} margin={{
                    top: 5, right: 30, left: 30, bottom: 5,
                }}>
      <defs>
        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
          <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
        </linearGradient>
      </defs>
      {/* {console.log(data)} */}

      <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />

      <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate() % 7 === 0) {
              return format(date, "MMM, d");
            }
            return "";
          }}
        />

      <YAxis
        datakey="value"
        axisLine={false}
        tickLine={false}
        tickCount={8}
        // tickFormatter={(number) => `${number.toFixed(2)}`}
      />
<Tooltip content={<CustomTooltip />} />

      <CartesianGrid opacity={0.1} vertical={false} />
    </AreaChart>
  </ResponsiveContainer>
  );
}
}

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <h4>{label}</h4>
        <p>${payload[0].value} cases</p>
      </div>
    );
  }
  return null;
}
// import {
//     ResponsiveContainer,
//     AreaChart,
//     XAxis,
//     YAxis,
//     Area,
//     Tooltip,
//     CartesianGrid,
//   } from "recharts";
//   import { format, parseISO, subDays } from "date-fns";
  
//   const data = [];
//   async function componentDidMount() {
//     const url = "https://api.opencovid.ca/summary?stat=cases&loc=canada&after=01-12-2020";
//     const response =  fetch(url);
//     const data2 = await response.json();
//     // this.setState({ artical: data, loading: false });
    
//     for (let num = 0; num <=200; num++) {
//         // console.log(data2.summary[num].date)
//         data.push({
//         date: data2.summary[num].date,
//         value: data2.summary[num].active_cases,
//         });
        
//     }
//     // console.log(data);
    
// }
        
  
//   export default function Home() {
    
//     return (
//       <ResponsiveContainer width="100%" height={400}>
//         <AreaChart data={data}>
//           <defs>
//             <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
//               <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
//             </linearGradient>
//           </defs>
  
//           <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />
  
//           {/* <XAxis
//             dataKey="date"
//             axisLine={false}
//             tickLine={false}
//             tickFormatter={(str) => {
//               const date = parseISO(str);
//               if (date.getDate() % 7 === 0) {
//                 return format(date, "MMM, d");
//               }
//               return "";
//             }}
//           /> */}
  
//           <YAxis
//             datakey="value"
//             axisLine={false}
//             tickLine={false}
//             tickCount={8}
//             // tickFormatter={(number) => `$${number.toFixed(2)}`}
//           /> 
  
//            {/* <Tooltip content={<CustomTooltip />} /> */}
  
//           <CartesianGrid opacity={0.1} vertical={false} />
//         </AreaChart>
//       </ResponsiveContainer>
//     );
//   }
  
//   function CustomTooltip({ active, payload, label }) {
//     if (active) {
//       return (
//         <div className="tooltip">
//           <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
//           <p>${payload[0].value.toFixed(2)} CAD</p>
//         </div>
//       );
//     }
//     return null;
//   }
  
