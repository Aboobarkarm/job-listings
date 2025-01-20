import Link from 'next/link';

export default function ViewAllJobs() {
  return (
    <section className='max-w-lg mx-auto my-10 px-6'>
      <Link  href={'jobs'} className='block bg-black text-white text-center py-4 px-6 rounded-lg hover:text-gray-700'>
      View All Jobs
      </Link>
    </section>
  );
};
