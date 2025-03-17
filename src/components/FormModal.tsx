"use client";
import Image from "next/image";

const FormModal = ({
  table,
  data,
  type,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "subject"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColour =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";
  return (
    <div>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColour}`}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
    </div>
  );
};

export default FormModal;
