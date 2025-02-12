"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    absent: 60,
    present: 89,
    amt: 2400,
  },
  {
    name: "Tue",
    absent: 6,
    present: 90,
    amt: 2210,
  },
  {
    name: "Wed",
    absent: 14,
    present: 80,
    amt: 2290,
  },
  {
    name: "Thu",
    absent: 40,
    present: 60,
    amt: 2000,
  },
  {
    name: "Fri",
    absent: 48,
    present: 54,
    amt: 2181,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-xl p-4 h-full">
        <div className="flex justify-between items-center">
            <h1 className="text-lg  font-semibold">Attendance</h1>
            <Image src='/moreDark.png' alt='' width={20} height={20} />
        </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
         barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis 
          dataKey="name" 
          axisLine={false} 
          tick={{fill:"#d1d5db"}} 
          tickLine={false} />
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}}/>
          <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
          <Bar
            dataKey="present"
            fill="#FAE27C"
            radius={[10,10,0,0]}
            legendType="circle"
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            radius={[10,10,0,0]}
            legendType="circle"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
