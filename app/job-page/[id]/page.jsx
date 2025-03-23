import { FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import JobActions from '@/components/JobActions';

async function getJob(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${id}`, {
    cache: 'no-store',
  }); 

  if (!res.ok) return null;
  const job = await res.json();
  return job.data;
}

export default async function JobPage({ params }) {
  const { id } = await params; 
  const job = await getJob(id)
  
  
  if (!job) {
    return <div className='py-20 text-center text-red-500'>Job not found</div>;
  }

  return (
    <>
      <section>
        <div className='container m-auto py-20 px-6'>
          <Link
            href='/'
            className='text-indigo-500 hover:text-indigo-600 flex mt-2 items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className='bg-indigo-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-[70%_30%] w-full gap-6'>
            <main>
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <div className='text-gray-500 mb-4'>{job.type}</div>
                <h1 className='text-3xl font-bold mb-4'>{job.title}</h1>
                <div className='text-gray-500 mb-4 flex items-center justify-center md:justify-start'>
                  <FaMapMarkerAlt className='text-lg text-orange-700 mr-2' />
                  <p className='text-orange-700'>{job.location}</p>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-indigo-800 text-lg font-bold mb-6'>
                  Job Description
                </h3>
                <p className='mb-4'>{job.description}</p>
                <h3 className='text-indigo-800 text-lg font-bold mb-2'>
                  Salary
                </h3>
                <p className='mb-4'>{job.salary}</p>
              </div>
            </main>

            <aside>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold mb-6'>Company Info</h3>
                <h2 className='text-2xl'>
                  {job.company?.name || 'Unknown Company'}
                </h2>
                <p className='my-2'>
                  {job.company?.description || 'No description available'}
                </p>
                <hr className='my-4' />

                <h3 className='text-xl'>Contact Email:</h3>
                <p className='my-2 bg-indigo-100 p-2 font-bold'>
                  {job.contact?.email || 'Not provided'}
                </p>

                <h3 className='text-xl'>Contact Phone:</h3>
                <p className='my-2 bg-indigo-100 p-2 font-bold'>
                  {job.contact?.phone || 'Not provided'}
                </p>
              </div>

              <JobActions jobId={job._id} />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
