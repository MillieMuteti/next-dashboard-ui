import TableSearch from '@/components/TableSearch'
import React from 'react'
import Image from 'next/image'
import Pagination from '@/components/Pagination'

const TeacherListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* Top */}
      <div className='flex justify-between items-center'>
        <h1 className=' hidden md:block text-lg font-semibold'>All Teachers</h1>
        <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
          <TableSearch />
          <div className='flex items-center self-end gap-4'>
            <button className='flex items-center justify-center w-8 h-8 bg-lamaYellow rounded-full'>
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className='flex items-center justify-center w-8 h-8 bg-lamaYellow rounded-full'>
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className='flex items-center justify-center w-8 h-8 bg-lamaYellow rounded-full'>
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>

      {/* List */}
     

      {/* Pagination*/}
   
        <Pagination />
      
      
    </div>
  )
}

export default TeacherListPage
