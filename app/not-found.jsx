import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='py-36 h-screen bg-indigo-50'>
      <div className='max-w-4xl mx-auto px-6 lg:px-8 flex flex-col'>
        <p className='text-indigo-700 font-bold text-lg'>Opps!</p>
        <h1 className='text-indigo-700 text-6xl md:text-9xl font-bold'>404</h1>
        <p className='text-indigo-700 font-bold text-lg mb-3'>Sorry we could'nt find that page.</p>
        <p className='text-indigo-700'>
          From here you can either check out the <span>
          <Link className='underline' href={'/'}>front page </Link>
          </span>
           or try searching for what you were trying to find.
        </p>
      </div>
  </section>
  )
}
