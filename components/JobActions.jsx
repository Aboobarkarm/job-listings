"use client";

import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function JobActions({ jobId }) {
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleDelete = async () => {
    const res = await fetch(`/api/jobs/${jobId}`, { method: "DELETE" });

    if (res.ok) {
      setShowSuccessModal(true);
      
      setTimeout(() => {
        setShowSuccessModal(false);
        router.push("/");
      }, 5000);
    } else {
      alert("Failed to delete the job.");
    }
  };

  const onDeleteClick = () => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure you want to delete this job?",
      buttons: [
        {
          label: "Yes, Delete",
          onClick: handleDelete,
          className: "bg-red-500 text-white px-4 py-2 rounded-md",
        },
        {
          label: "Cancel",
          className: "bg-gray-300 px-4 py-2 rounded-md",
        },
      ],
      overlayClassName: "bg-black bg-opacity-50",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-bold mb-6">Manage Job</h3>
      
      <Link
        href={`/edit-job/${jobId}`}
        className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-md w-full block"
      >
        Edit Job
      </Link>

      <button
        onClick={onDeleteClick}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md w-full block mt-4"
      >
        Delete Job
      </button>

      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Success</h2>
            <p>Job deleted successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
}
