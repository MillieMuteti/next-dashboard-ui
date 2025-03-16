/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import BigCalendar from "@/components/BigCalender";
import Announcements from "@/components/Announcements";
import Link from "next/link";
import Performance from "@/components/Performance";

const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* UserInfoCard */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 object-cover rounded-full"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Mathilda Frank</h1>
              <p className="text-xs text-gray-500">
                Elit dolore ullamco dolore pariatur dolore eiusmod amet laboris
                duis elit incididunt.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" height={14} width={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" height={14} width={14} />
                  <span>May 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" height={14} width={14} />
                  <span>metcoj@kuiw.bs</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" height={14} width={14} />
                  <span>(225) 808-4878</span>
                </div>
              </div>
            </div>
          </div>
          {/* SmallInfoCard */}
          <div className="flex-1 flex justify-between gap-4 flex-wrap">
            {/* card */}
            <div className="flex p-4 rounded-md bg-white gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-xs text-gray-400">Attendance</span>
              </div>
            </div>

            <div className="flex p-4 rounded-md bg-white gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6th</h1>
                <span className="text-xs text-gray-400">Grade</span>
              </div>
            </div>

            <div className="flex p-4 rounded-md bg-white gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">16</h1>
                <span className="text-xs text-gray-400">Lessons</span>
              </div>
            </div>

            <div className="flex p-4 rounded-md bg-white gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-xs text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
            <h1>Student's Schedule</h1>
            <BigCalendar />
        </div>
      </div>
      {/*Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
      <div className="bg-white rounded-md p-4">
        <h1 className="text-xl font-semibold">Shortcuts</h1>
        <div className="mt-4 flex flex-wrap gap-4 text-gray-500">
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/" >Student's Lesson</Link>
            <Link className="p-3 rounded-md bg-lamaPurpleLight" href="/" >Student's Teachers</Link>
            <Link className="p-3 rounded-md bg-lamaYellowLight" href="/" >Student's Resul-'ts</Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/" >Student's Exams</Link>
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/" >Student's Assignments</Link>
            
        </div>

      </div>
      <Performance />
      <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
