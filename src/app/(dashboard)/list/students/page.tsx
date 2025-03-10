import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { role, studentsData} from "@/lib/data";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  phone?: string;
  photo: string;
  grade: number;
  class:string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accesor: "info",
  },
  {
    header: "Student ID",
    accesor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accesor: "grade",
    className: "hidden md:table-cell",
  },
  
  {
    header: "Phone",
    accesor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accesor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accesor: "actions",
  },
];

const StudentListPage = () => {
  const renderRows = (item: Student) => (
    <tr key={item.id} className="border-b border-gray-200 even:border-slate-50 text-xs hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt="" 
          height={40}
          width={40}
          className="w-10 h-10 rounded-full md:hidden xl:block object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      
      <td className="hidden md:table-cell">{item?.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" height={16} width={16}/>
            </button>
          </Link>
          { role === "admin" &&(
             <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
             <Image src="/delete.png" alt="" height={16} width={16}/>
           </button>)
          }
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex justify-between items-center">
        <h1 className=" hidden md:block text-lg font-semibold">All Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center self-end gap-4">
            <button className="flex items-center justify-center w-8 h-8 bg-lamaYellow rounded-full">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="flex items-center justify-center w-8 h-8 bg-lamaYellow rounded-full">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            { role === "admin" && <button className="flex items-center justify-center w-8 h-8 bg-lamaYellow rounded-full">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>}
          </div>
        </div>
      </div>

      {/* List */}
      <Table columns={columns} renderRows={renderRows} data={studentsData}/>

      {/* Pagination*/}

      <Pagination />
    </div>
  );
};

export default StudentListPage;
