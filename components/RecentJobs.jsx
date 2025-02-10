"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function RecentJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedJobs, setExpandedJobs] = useState({}); // Store expanded state for each job

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs", { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const result = await response.json();
        setJobs(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Toggle function for expanding/collapsing job descriptions
  const toggleExpand = (jobId) => {
    setExpandedJobs((prev) => ({
      ...prev,
      [jobId]: !prev[jobId], // Toggle state for the specific job
    }));
  };

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl mx-auto lg:container">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Recent Jobs
        </h2>

        {loading && <p className="text-center text-gray-600">Loading jobs...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.length > 0 ? (
            jobs.slice(0, 3).map((job) => {   // ✅ Show only the first 3 jobs
              const isTruncated = !expandedJobs[job._id];
              const description = isTruncated
                ? job.description.slice(0, 150) + (job.description.length > 150 ? "..." : "")
                : job.description;

              return (
                <div key={job._id} className="bg-white rounded-lg shadow-md relative">
                  <div className="p-4">
                    <div className="mb-4">
                      <div className="text-gray-600 my-2">{job.type}</div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                    </div>
                    <div className="mb-5">{description}</div>

                    {job.description.length > 150 && (
                      <button
                        onClick={() => toggleExpand(job._id)}
                        className="text-indigo-500 mb-4 hover:text-indigo-700"
                      >
                        {isTruncated ? "More" : "Less"}
                      </button>
                    )}

                    <h3 className="text-indigo-500 mb-2">{job.salary}</h3>
                    <div className="border border-gray-100 mb-5"></div>
                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                      <div className="flex justify-start items-center text-orange-700 mb-3">
                        <FaMapMarkerAlt className="text-lg" />
                        <p className="ml-1">{job.location}</p>
                      </div>
                      <Link
                        href={`/jobs/${job._id}`} 
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm text-center"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            !loading && <p className="text-center text-gray-600">No jobs available.</p>
          )}
        </div>
      </div>
    </section>
  );
}
