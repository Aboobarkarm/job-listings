"use client";

import { useState, useEffect } from "react";

export default function EditJobForm ({ jobId }) {
  console.log(jobId)
  const [formData, setFormData] = useState({
    type: "",
    title: "",
    description: "",
    salary: "",
    location: "",
    company: {
      name: "",
      description: "",
    },
    contact: {
      email: "",
      phone: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch job details when the component mounts
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`/api/jobs/${jobId.toString()}`);
        const data = await response.json();
        if (response.ok) {
          setFormData(data);
        } else {
          setError(data.message || "Failed to fetch job details");
        }
      } catch (error) {
        setError("Error fetching job details");
      }
    };

    fetchJob();
  }, [jobId]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("company.")) {
      setFormData((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [name.split(".")[1]]: value,
        },
      }));
    } else if (name.startsWith("contact.")) {
      setFormData((prev) => ({
        ...prev,
        contact: {
          ...prev.contact,
          [name.split(".")[1]]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`/api/jobs/${jobId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("Job updated successfully!");
      } else {
        setError(data.message || "Failed to update job");
      }
    } catch (error) {
      setError("An error occurred while updating the job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-indigo-50">
      <div className="container mx-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 rounded-md shadow-md border m-4 md:m-0">
          <h2 className="text-3xl font-semibold text-center mb-6">Edit Job</h2>

          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="type" className="font-bold text-gray-700">Job Type</label>
              <select
                name="type"
                id="type"
                className="border rounded w-full py-2 px-3"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="font-bold text-gray-700">Job Listing Name</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border rounded w-full px-3 py-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="font-bold text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="border rounded w-full px-3 py-2"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="font-bold text-gray-700">Salary</label>
              <select
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="border rounded w-full px-3 py-2"
                required
              >
                <option value="Under $50k">Under $50k</option>
                <option value="$50k - $60k">$50k - $60k</option>
                <option value="$60k - $70k">$60k - $70k</option>
                <option value="Over $200k">Over $200k</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="font-bold text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="border rounded w-full px-3 py-2"
                required
              />
            </div>

            <h3 className="text-2xl mb-4">Company Info</h3>

            <div className="mb-4">
              <label className="font-bold text-gray-700">Company Name</label>
              <input
                type="text"
                name="company.name"
                value={formData.company.name}
                onChange={handleChange}
                className="border rounded w-full px-3 py-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="font-bold text-gray-700">Company Description</label>
              <textarea
                name="company.description"
                value={formData.company.description}
                onChange={handleChange}
                rows="3"
                className="border rounded w-full px-3 py-2"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="font-bold text-gray-700">Contact Email</label>
              <input
                type="email"
                name="contact.email"
                value={formData.contact.email}
                onChange={handleChange}
                className="border rounded w-full px-3 py-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="font-bold text-gray-700">Contact Phone (Optional)</label>
              <input
                type="tel"
                name="contact.phone"
                value={formData.contact.phone}
                onChange={handleChange}
                className="border rounded w-full px-3 py-2"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-sm w-full"
            >
              {loading ? 'Updating...' : 'Update Job'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

