import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='py-24 bg-indigo-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <p className='text-white font-bold text-lg'>Opps!</p>
        <h1 className='text-white text-5xl md:text-9xl font-bold'>404</h1>
        <p className='text-white font-bold text-lg mb-3'>Sorry we could'nt find that page.</p>
        <p className='text-white'>
          From here you can either check out the <span>
          <Link className='underline' href={'/'}>font page </Link>
          </span>
           or try searching for what you were trying to find.
        </p>
      </div>
  </section>
  )
}
