import React from 'react'

function Experience() {
  return (
    <div id='experience' className='py-16 md:py-20 max-w-7xl mx-auto'>
        <h2 className='px-4 md:px-8 w-full text-center mb-10 md:text-xl text-lg'>Experience</h2>
        <div className='flex flex-col justify-center items-center gap-10 p-4'>
            <div className='grid bg-gray-50 md:grid-cols-[2fr_1fr] grid-rows-[3fr_1fr] gap-5 rounded-lg shadow-lg p-8 dark:bg-gray-700 max-w-2xl'>
                <div className=''>
                    <h3 className='font-semibold text-lg md:text-xl'>Guru Matematika Ganesha Operation</h3>
                    <div className='flex md:hidden my-3 font-medium text-[17px]'>Januari 2024 - Sekarang</div>
                    <div className='mt-2'>
                        <p>Mengajar dan membimbing siswa dalam materi matematika.</p>
                    </div>
                </div>
                <div className='md:flex hidden font-medium text-[17px]'>Januari 2024 - Sekarang</div>
            </div>

            <div className='grid bg-gray-50 md:grid-cols-[2fr_1fr] grid-rows-[3fr_1fr] gap-5 rounded-lg shadow-lg p-8 dark:bg-gray-700 max-w-2xl'>
                <div className=''>
                    <h3 className='font-semibold text-lg md:text-xl'>Guru SMA Pangudi Luhur Bandar Lampung</h3>
                    <div className='flex md:hidden my-3 font-medium text-[17px]'>Mei 2023 - April 2024</div>
                    <div className='mt-2'>
                        <p>Bertanggung jawab atas pengajaran mata pelajaran terkait.</p>
                    </div>
                </div>
                <div className='md:flex hidden font-medium text-[17px]'>Mei 2023 - April 2024</div>
            </div>

            <div className='grid bg-gray-50 md:grid-cols-[2fr_1fr] grid-rows-[3fr_1fr] gap-5 rounded-lg shadow-lg p-8 dark:bg-gray-700 max-w-2xl'>
                <div className=''>
                    <h3 className='font-semibold text-lg md:text-xl'>Guru SDN 03 Kampung Baru</h3>
                    <div className='flex md:hidden my-3 font-medium text-[17px]'>April 2022 - Mei 2023</div>
                    <div className='mt-2'>
                        <p>Memberikan pengajaran dan bimbingan kepada siswa sekolah dasar.</p>
                    </div>
                </div>
                <div className='md:flex hidden font-medium text-[17px]'>April 2022 - Mei 2023</div>
            </div>
        </div>
    </div>
  )
}

export default Experience
