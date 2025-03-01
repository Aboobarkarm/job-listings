import Link from 'next/link'
import Card from './Card'
import { IoIosAdd } from "react-icons/io"
import { CiBoxList } from "react-icons/ci"



export default function HomeCards() {
  return (
    <section className='py-4'>
      <div className='container-xl mx-auto lg:container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <Card>
            <h2 className='text-2xl font-bold'>
              For Developers
            </h2>
            <p className='mt-2 mb-4'>
              Browse our React job and start your career today
            </p>
            <Link href={'/jobs-page'} className='bg-black text-white inline-block rounded-lg px-4 py-2 hover:bg-gray-700'>
              <div className='flex items-start justify-start'>
                <CiBoxList size={25} className='mr-2'/>
              Browse Jobs
              </div>
            </Link>
          </Card>
          <Card bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>
              For Employers
            </h2>
            <p className='mt-2 mb-4'>
               List your jobs to find the perfect developer for the role
            </p>
            <Link href={'/add-job'} className='inline-block bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600'>
            <div className='flex items-start justify-start'>
             <IoIosAdd size={25} className='mr-2'/>
              Add Job
              </div>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};
