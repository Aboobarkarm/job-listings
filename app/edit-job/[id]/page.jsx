import EditJobForm from '@/components/EditJobForm';

const getJobById = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs/${id}`, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch job');
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null; 
  }
};

export default async function EditJob({ params }) {
  const { id } =  params; 
  const job = await getJobById(id);
  console.log(job)

  if (!job) {
    return <div className='text-center text-red-500'>Error: Job not found.</div>
  }
  
  return <EditJobForm jobId={ job } />;
}