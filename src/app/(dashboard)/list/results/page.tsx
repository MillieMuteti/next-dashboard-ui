import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import {   resultsData, role,  } from "@/lib/data";

type Results = {
  id: number;
  subject: string;
  student: string;
  score: number;
  teacher: string;
  class:string;
  date:string;
  type:"exam | assignment";
 
};

const columns = [
  {
    header: "Subject Name",
    accesor: "subject",
  },
  {
    header: "Student",
    accesor: "student",
    className: "hidden md:table-cell",
  },
  {
    header: "Score",
    accesor: "score",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accesor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accesor: "class",
    className: "hidden md:table-cell",
  },
 
  {
    header: "Date",
    accesor: "date",
    className: "hidden md:table-cell",
  },
 
  {
    header: "Actions",
    accesor: "actions",
  },
];

const ResultsListPage = () => {
  const renderRows = (item: Results) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:border-slate-50 text-xs hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td className="">{item.student}</td>
      <td className="hidden md:table-cell">{item.score}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/edit.png" alt="" height={16} width={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
              <Image src="/delete.png" alt="" height={16} width={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex justify-between items-center">
        <h1 className=" hidden md:block text-lg font-semibold">All Results</h1>
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
              <button className="flex items-center justify-center w-8 h-8 bg-lamaYellow rounded-full">
                <Image src="/plus.png" alt="" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* List */}
      <Table columns={columns} renderRows={renderRows} data={resultsData} />

      {/* Pagination*/}

      <Pagination />
    </div>
  );
};

export default ResultsListPage;
