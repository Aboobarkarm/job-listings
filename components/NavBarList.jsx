

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/components/assets/img/logo.png';
import { useRouter } from 'next/navigation';



export default function NavBarList() {
  const router = useRouter();

  return (
    <nav className='fixed top-0 left-0 right-0 z-40 bg-indigo-700 border-b border-indigo-500'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex justify-between items-center h-20'>
        <div className='flex flex-1 justify-center items-center md:items-stretch md:justify-start'>
          <Link href={'/'} className='flex flex-shrink-0 items-center mr-4'>
          <Image src={logo} alt='React jobs' height={40} width={40} />
          <span className='hidden md:block text-white ml-2 text-2xl font-bold'>
            React Jobs
          </span>
          </Link>

          <div className='md:ml-auto'>
           <Link href={'/'} className={`${router.pathname === '/' ? 'bg-black text-white rounded-md py-2 px-3 hover:bg-gray-900 hover:text-white' : 'text-white rounded-md py-2 px-3 hover:text-white'}`}>
           Home
           </Link>
           <Link href={'/jobs'} className={`${router.pathname === '/jobs' ? 'bg-black text-white rounded-md py-2 px-3 hover:bg-gray-900 hover:text-white' : 'text-white rounded-md py-2 px-3 hover:text-white'}`}>
           Jobs
           </Link>
           <Link href={'/add-job'} className={`${router.pathname === '/add-job' ? 'bg-black text-white rounded-md py-2 px-3 hover:bg-gray-900 hover:text-white' : 'text-white rounded-md py-2 px-3 hover:text-white'}`}>
           Add Job
           </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
};
