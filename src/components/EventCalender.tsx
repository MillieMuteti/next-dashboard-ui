"use client"

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
    {
       id: 1, 
       title: "Lorem ipsum dor",
       time: "12:00pm to 2:00p.m",
       description: "Ea adipisicing sit eiusmod qui incididunt consectetur et non est sit ut culpa officia."

    },
    {
        id: 2, 
        title: "Lorem ipsum dor",
        time: "12:00pm to 2:00p.m",
        description: "Ea adipisicing sit eiusmod qui incididunt consectetur et non est sit ut culpa officia."
 
     },
     {
        id: 3, 
        title: "Lorem ipsum dor",
        time: "12:00pm to 2:00p.m",
        description: "Ea adipisicing sit eiusmod qui incididunt consectetur et non est sit ut culpa officia."
 
     },
     {
        id: 4, 
        title: "Lorem ipsum dor",
        time: "12:00pm to 2:00p.m",
        description: "Ea adipisicing sit eiusmod qui incididunt consectetur et non est sit ut culpa officia."
 
     },
]

const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white rounded-md p-4'>
        <Calendar onChange={onChange} value={value} />
         <div className="flex justify-between items-center">
                <h1 className="text-xl my-4  font-semibold">Events</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
              </div>
        <div className='flex flex-col gap-4'>
            {events.map(event=>(
                <div key={event.id} className='p-5 border-2 border-gray-100 rounded-md border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-gray-600 font-semibold'>{event.title}</h1>
                        <span className='text-xs text-gray-300'>{event.time}</span>
                    </div>
                    <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EventCalender