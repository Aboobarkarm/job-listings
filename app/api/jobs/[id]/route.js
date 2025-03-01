import { NextResponse } from "next/server";
import connectMongoDb from "@/libs/mongodb";
import Job from "@/models/job";
import mongoose from "mongoose";

/**
 * @desc Get a Single job posting
 * @route GET /api/jobs
 */

export async function GET(req, { params }) {
  try {
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid job ID format" },
        { status: 400 }
      );
    }

    await connectMongoDb();
    const job = await Job.findById(id);

    if (!job) {
      return NextResponse.json(
        { success: false, message: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: job }, { status: 200 });
  } catch (error) {
    console.error("Error fetching job:", error.message);
    return NextResponse.json(
      { success: false, message: "Failed to fetch job", error: error.message },
      { status: 500 }
    );
  }
}


/**
 * @desc Update a job posting
 * @route PATCH /api/jobs
 */

export async function PATCH(req, { params }) {
  try {
    const { id } = await params;
    const body = await req.json();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid job ID format" },
        { status: 400 }
      );
    }

    await connectMongoDb();
    const updatedJob = await Job.findByIdAndUpdate(id, body, { new: true });

    if (!updatedJob) {
      return NextResponse.json(
        { success: false, message: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Job updated successfully", data: updatedJob },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating job:", error.message);
    return NextResponse.json(
      { success: false, message: "Failed to update job", error: error.message },
      { status: 500 }
    );
  }
}


/**
 * @desc Delete a job posting
 * @route DELETE /api/jobs
 */

export async function DELETE( req, { params }) {
  try {
    const { id } = await params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid job ID format" },
        { status: 400 }
      );
    }

    await connectMongoDb();
    const result = await Job.findByIdAndDelete(id);

    if (!result) {
      return NextResponse.json(
        { success: false, message: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Job deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting job:", error.message);
    return NextResponse.json(
      { success: false, message: "Failed to delete job", error: error.message },
      { status: 500 }
    );
  }
}
