import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { classesData, role, subjectsData } from "@/lib/data";
import FormModal from "@/components/FormModal";

type Class = {
  id: number;
  name: string;
  supervisor: string;
  grade:number;
  capacity:number;
};

const columns = [
  {
    header: "Class Name",
    accesor: "className",
  },
  {
    header: "Capacity",
    accesor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accesor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accesor: "supervisor",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accesor: "actions",
  },
];

const ClassListPage = () => {
  const renderRows = (item: Class) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:border-slate-50 text-xs hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>

      <td>
        <div className="flex items-center gap-2">
          
          {role === "admin" && (
           <>
           <FormModal table="class" type="update" data={item}/>
           <FormModal table="class" type="delete" id={item.id}/>
          </>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex justify-between items-center">
        <h1 className=" hidden md:block text-lg font-semibold">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center self-end gap-4">
            <button className="flex items-center justify-center w-8 h-8 bg-lamaYellow rounded-full">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="flex items-center justify-center w-8 h-8 bg-lamaYellow rounded-full">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
             
             <FormModal table="class" type="create" />
             
            )}
          </div>
        </div>
      </div>

      {/* List */}
      <Table columns={columns} renderRows={renderRows} data={classesData} />

      {/* Pagination*/}

      <Pagination />
    </div>
  );
};

export default ClassListPage;
