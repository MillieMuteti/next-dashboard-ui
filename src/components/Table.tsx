import React from "react";

const Table = ({
  columns,
  renderRows,
  data,
}: {
  columns: { header: string; accesor: string; className?: string }[];
  renderRows: (item: any) => React.ReactNode;
  data:any[];
}) => {
  return (
    <table className="mt-4 w-full">
      <thead>
        <tr className="text-sm text-gray-500 text-left">
          {columns.map((col) => (
            <th key={col.accesor} className={col.className}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item)=>renderRows(item))}</tbody>
    </table>
  );
};

export default Table;
