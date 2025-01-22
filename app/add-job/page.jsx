
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
              name="type"
               id="type"
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
            <h3 className='text-2xl mb-5'>Company Info</h3>
            <div className='mb-4'>
              <label 
              htmlFor="company"
              className='block text-gray-700 font-bold mb-2'
              >
                Company Name
              </label>
              <input
               type="text"
               id='company'
               name='company'
               placeholder='Company Name'
               required
               className='w-full py-2 px-3 border rounded'
               />
            </div>
            <div className='mb-4'>
              <label
               htmlFor="company_decription"
               className='block text-gray-700 font-bold mb-2'
              >
                Company Description
              </label>
              <textarea 
              name="company_description"
               id="company_description"
               rows='4'
               placeholder='What does your company do ?'
               className='w-full py-2 px-3 border rounded'
               >
               </textarea>
            </div>
            <div className='mb-4'>
              <label
               htmlFor="contact_email"
               className='block text-gray-700 font-bold mb-2'
              >
                Contact Email
              </label>
              <input 
              type="email"
              id='contact_email'
              name='contact_email'
              placeholder='Email address for applications'
              required
              className='w-full py-2 px-3 border rounded'
               />
            </div>
            <div className='mb-4'>
            <label 
            htmlFor="contact_phone"
            className='block text-gray-700 font-bold mb-2'
            >
            Contact Phone
            </label>
            <input
             type="tel"
             id='contact_phone'
             name='contact_phone'
             placeholder='Optional phone for applications'
             className='w-full py-2 px-4 border rounded'
             />
            </div>
            <div>
              <button type='summit' className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full'>
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
