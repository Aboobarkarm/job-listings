"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import JobListing from "./JobListing";

export default function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?limit=3' : '/api/jobs';
      try {
        const response = await fetch(apiUrl, { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const result = await response.json();
        setJobs(result.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl mx-auto lg:container">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading && <p className="text-center text-gray-600">Loading jobs...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <JobListing key={job._id} job={job} />
            ))
          ) : (
            !loading && <p className="text-center text-gray-600">No jobs available.</p>
          )}
        </div>
      </div>
    </section>
  );
}
