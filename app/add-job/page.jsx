"use client";

import { useState } from "react";

export default function AddJob() {
  const [formData, setFormData] = useState({
    type: "Full-time",
    title: "",
    description: "",
    salary: "Under $50k",
    location: "",
    company: "",
    company_description: "",
    contact_email: "",
    contact_phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          company: { name: formData.company, description: formData.company_description },
          contact: { email: formData.contact_email, phone: formData.contact_phone },
        }),
      });

      const result = await res.json();
      console.log(result)

      if (res.ok) {
        setSuccess("Job created successfully!");
        setFormData({
          type: "Full-time",
          title: "",
          description: "",
          salary: "Under $50k",
          location: "",
          company: "",
          company_description: "",
          contact_email: "",
          contact_phone: "",
        });
      } else {
        throw new Error(result.message || "Failed to create job");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-indigo-50">
      <div className="container mx-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 rounded-md shadow-md border m-4 md:m-0">
          <h2 className="text-3xl font-semibold text-center mb-6">Add Job</h2>

          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <form onSubmit={handleSubmit}>
            {/* Job Type */}
            <div className="mb-4">
              <label htmlFor="type" className="font-bold text-gray-700">
                Job Type
              </label>
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

            {/* Job Title */}
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

            {/* Description */}
            <div className="mb-4">
              <label className="font-bold text-gray-700">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Job duties, expectations, etc."
                className="border rounded w-full px-3 py-2"
                required
              ></textarea>
            </div>

            {/* Salary */}
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

            {/* Location */}
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

            {/* Company Name */}
            <div className="mb-4">
              <label className="font-bold text-gray-700">Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="border rounded w-full px-3 py-2"
                required
              />
            </div>

            {/* Company Description */}
            <div className="mb-4">
              <label className="font-bold text-gray-700">Company Description</label>
              <textarea
                name="company_description"
                value={formData.company_description}
                onChange={handleChange}
                rows="3"
                className="border rounded w-full px-3 py-2"
              ></textarea>
            </div>

            {/* Contact Email */}
            <div className="mb-4">
              <label className="font-bold text-gray-700">Contact Email</label>
              <input
                type="email"
                name="contact_email"
                value={formData.contact_email}
                onChange={handleChange}
                className="border rounded w-full px-3 py-2"
                required
              />
            </div>

            {/* Contact Phone */}
            <div className="mb-4">
              <label className="font-bold text-gray-700">Contact Phone (Optional)</label>
              <input
                type="tel"
                name="contact_phone"
                value={formData.contact_phone}
                onChange={handleChange}
                className="border rounded w-full px-3 py-2"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-sm w-full"
            >
              {loading ? "Submitting..." : "Add Job"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
