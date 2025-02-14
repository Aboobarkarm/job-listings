import { NextResponse } from "next/server";
import connectMongoDb from "@/libs/mongodb";
import Job from "@/models/job";

/**
 * @desc Create a new job posting
 * @route POST /api/jobs
 */
export async function POST(req) {
  try {
    const body = await req.json();
    await connectMongoDb();

    const job = new Job(body);
    await job.save();

    return NextResponse.json(
      { success: true, message: "Job created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating job:", error.message);
    return NextResponse.json(
      { success: false, message: "Failed to create job", error: error.message },
      { status: 500 }
    );
  }
}

/**
 * @desc Get all job postings (supports optional limit query)
 * @route GET /api/jobs?limit=3
 */
export async function GET(req) {
  try {
    await connectMongoDb();

    // Extract the "limit" query parameter from the request
    const { searchParams } = new URL(req.url);
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")) : 0;

    // Fetch jobs with optional limit
    const data = limit > 0 ? await Job.find().sort({ createdAt: -1 }).limit(limit) : await Job.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching jobs:", error.message);
    return NextResponse.json(
      { success: false, message: "Failed to fetch jobs", error: error.message },
      { status: 500 }
    );
  }
}
