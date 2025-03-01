"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

export default function JobListing({ job }) {
  const [expandedJobs, setExpandedJobs] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const toggleDescription = (jobId) => {
    setExpandedJobs((prev) => ({
      ...prev,
      [jobId]: !prev[jobId],
    }));
  };

  const handleNavigation = (jobId) => {
    setLoading(true);
    router.push(`/job-page/${jobId}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">
          {expandedJobs[job._id] ? job.description : `${job.description.slice(0, 90)}...`}
        </div>

        <button
          onClick={() => toggleDescription(job._id)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {expandedJobs[job._id] ? "Less" : "More"}
        </button>

        <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3 flex items-center">
            <FaMapMarkerAlt className="text-lg" />
            <p className="ml-1">{job.location}</p>
          </div>

          <button
            onClick={() => handleNavigation(job._id)}
            className="h-[36px] flex justify-center items-center bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm w-[120px]"
            disabled={loading}
          >
            {loading ? <ClipLoader size={20} color="#fff" /> : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
}
