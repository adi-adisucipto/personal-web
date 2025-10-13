import React from 'react'

function Experience() {
  return (
    <div id='experience' className='py-16 md:py-20 max-w-7xl mx-auto'>
        <h2 className='px-4 md:px-8 w-full text-center mb-10 md:text-xl text-lg'>Experience</h2>
        <div className='flex justify-center items-center p-4'>
            <div className='grid md:grid-cols-[2fr_1fr] grid-rows-[3fr_1fr] gap-5 rounded-lg shadow-xl p-8 dark:bg-gray-700 max-w-5xl'>
                <div className=''>
                    <h3 className='font-semibold text-lg md:text-xl'>Guru Berpengalaman</h3>
                    <div className='flex md:hidden my-3 font-medium text-[17px]'>Januari 2024 - Sekarang</div>
                    <div className='mt-2'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sit, officia quidem perspiciatis consequuntur, exercitationem quae unde itaque impedit, quis dicta rerum hic error vero delectus quod placeat aspernatur magni blanditiis accusantium id illo. Suscipit quis a minus ipsa officia provident optio dignissimos illum. Est, perferendis. Vitae exercitationem reprehenderit reiciendis.</p>
                    </div>
                </div>
                <div className='md:flex hidden font-medium text-[17px]'>Januari 2024 - Sekarang</div>
            </div>
        </div>
    </div>
  )
}

export default Experience
