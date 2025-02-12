import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl ">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Qui occaecat enim magna.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              12/02/2025
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Velit nisi est sunt veniam non incididunt eiusmod amet ea elit qui cillum consectetur.</p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Qui occaecat enim magna.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              12/02/2025
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Velit nisi est sunt veniam non incididunt eiusmod amet ea elit qui cillum consectetur.</p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Qui occaecat enim magna.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              12/02/2025
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">Velit nisi est sunt veniam non incididunt eiusmod amet ea elit qui cillum consectetur.</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
