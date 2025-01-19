import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';


export default function RecentJobs() {
  return (
    <section className='bg-blue-50 px-4 py-10'> 
    <div className='container-xl mx-auto lg:container'>
     <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
      Recent Jobs
     </h2>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {/* job listing-1 */}
      <div className='bg-white rounded-lg shadow-md relative'>
        <div className='p-4'>
          <div className='mb-6'>
            <div className='text-gray-600 my-2'>
              Full Time
            </div>
            <h3 className='text-xl font-bold'>
              Senior React Developer
            </h3>
          </div>
          <div className='mb-5'> 
          We are seeking a skilled and passionate TypeScript Developer to join our innovative team in Nigeria. The ideal candidate will have a strong foundation in TypeScript and modern JavaScript frameworks
          </div>
          <h3 className='text-indigo-500 mb-2'>
            $70 - $80K / Year
          </h3>
          <div className='border border-gray-100 mb-5'></div>
          <div className='flex flex-col lg:flex-row justify-between mb-4'> 
            <div className='flex justify-start items-center text-orange-700 mb-3'>
            <FaMapMarkerAlt className='text-lg' />
            <p className='ml-1'>Nigeria</p>
            </div>
            <Link href={'/jobs'} className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm text-center'>
            Read More
            </Link>
          </div>
        </div>
      </div>
      {/* job listing-2 */}
      <div className='bg-white rounded-lg shadow-md relative'>
        <div className='p-4'>
          <div className='mb-6'>
            <div className='text-gray-600 my-2'>
              Full Time
            </div>
            <h3 className='text-xl font-bold'>
              Full Stack Engineer (React/Next.js)
            </h3>
          </div>
          <div className='mb-5'> 
          We are seeking a skilled and motivated Full Stack Engineer to join our innovative team in Nigeria. The ideal candidate will possess strong expertise in both front-end and back-end development            </div>
          <h3 className='text-indigo-500 mb-2'>
            $70 - $80K / Year
          </h3>
          <div className='border border-gray-100 mb-5'></div>
          <div className='flex flex-col lg:flex-row justify-between mb-4'> 
            <div className='flex justify-start items-center text-orange-700 mb-3'>
              <FaMapMarkerAlt className='text-lg'/>
              <p className='ml-1'>Nigeria</p>
            </div>
            <Link href={'/jobs'} className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm text-center'>
            Read More
            </Link>
          </div>
        </div>
      </div>
      {/* job listing-3 */}
      <div className='bg-white rounded-lg shadow-md relative'>
        <div className='p-4'>
          <div className='mb-6'>
            <div className='text-gray-600 my-2'>
              Full Time
            </div>
            <h3 className='text-xl font-bold'>
              TypeScript Developer
            </h3>
          </div>
          <div className='mb-5'> 
          We are seeking a skilled and passionate TypeScript Developer to join our innovative team in Nigeria. The ideal candidate will have a strong foundation in TypeScript and modern JavaScript frameworks            </div>
          <h3 className='text-indigo-500 mb-2'>
            $70 - $80K / Year
          </h3>
          <div className='border border-gray-100 mb-5'></div>
          <div className='flex flex-col lg:flex-row justify-between mb-4'> 
            <div className='flex justify-start items-center text-orange-700 mb-3'>
              <FaMapMarkerAlt className='text-lg'/>
              <p className='ml-1'>Nigeria</p>
            </div>
            <Link href={'/jobs'} className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm text-center'>
            Read More
            </Link>
          </div>
        </div>
      </div>
     </div>
    </div>
  </section>
  );
};
