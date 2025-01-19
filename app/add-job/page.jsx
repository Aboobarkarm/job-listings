
export default function AddJob() {
  return (
    <section className='bg-indigo-50'>
      <div className='container mx-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 rounded-md shadow-md border m-4 md:m-0'>
          <form>
            <h2 className='text-3xl font-semibold text-center mb-6'>Add Job</h2>
            <div className='mb-4'>
              <label 
              htmlFor="type"
              className='text-gray-700 block font-bold mb-2'
              >
                Job Type
              </label>
              <select 
              name="type" id="type"
              className='border rounded w-full py-2 px-3'
              required
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Intenship">Intenship</option>
              </select>
            </div>
            <div className='mb-4'>
              <label 
              className='text-gray-700 block font-bold mb-2'
              >
                Job Listing Name
              </label>
              <input 
              type="text" 
              name='title'
              id='title'
              className='border rounded w-full px-3 py-2 mb-2'
              required
              />
            </div>
            <div className='mb-4'>
              <label 
              htmlFor="description"
              className='block font-bold text-gray-700 mb-2'
              >
              </label>
              <textarea 
              name="description" 
              id="description"
              rows='4'
              placeholder='Add any job duties, expectations, requirements, etc'
              className='border rounded w-full px-3 py-2'
              >
              </textarea>
            </div>
            <div className='mb-4'>
              <label 
              htmlFor="type"
              className='block text-gray-700 font-bold mb-2'
              >
                Selary
              </label>
              <select 
              name="selary"
              id="selary"
              required
              className='border rounded w-full px-3 py-2'
              >
                <option value="Under $50k">Under $50k</option>
                <option value="$50k - $60">$50 - $60</option>
                <option value="$60k - $70k">$60k - $70k</option>
                <option value="$70k - $80k">$70k - $80k</option>
                <option value="$80k - $90k">$80k - $90k</option>
                <option value="$90k - $100k">$90k - $100k</option>
                <option value="$100k - $125k">$100k - $125k</option>
                <option value="$125k - $150k">$125k - $150k</option>
                <option value="$150k - $175k">$150k - $175k</option>
                <option value="$175k - $200k">$175k - $200k</option>
                <option value="Over $200k">Over $200k</option>
              </select>
            </div>
            <div className='mb-4'>
              <label
              className='block text-gray-700 font-bold mb-2' 
              >
                Location
              </label>
              <input 
              type="text"
              name='location'
              id='location'
              placeholder='Company Location'
              required
              className='border rounded w-full px-3 py-2 mb-2'
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
