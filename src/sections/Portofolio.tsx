import Image from 'next/image'
import Porto from '../../public/images/todo.png'

function Portofolio() {
  return (
    <div id='portofolio' className='bg-gray-50 py-16 md:py-20 dark:bg-gray-800'>
        <div className='px-4 md:px-8 mx-auto max-w-7xl w-full'>
            <div className='text-gray-900 text-xl text-center mb-10 dark:text-white'>Portofolio</div>
            <div className='flex md:flex-row flex-col shadow-xl max-w-6xl mx-auto'>
                <div className='flex item-center bg-gray-100 dark:bg-gray-500 rounded-t-xl md:rounded-r-none md:rounded-l-xl justify-center border-gray p-8 max-w-3xl'>
                    <Image src={Porto} alt='project' className='rounded-lg shadow-xl'></Image>
                </div>
                <div className='p-8 flex flex-col gap-2 dark:bg-gray-700 md:rounded-r-xl md:rounded-l-none rounded-b-xl'>
                    <h3 className='font-semibold text-xl text-gray-900 dark:text-white'>To Do List</h3>
                    <p className='text-gray-900/70 dark:text-white'>Saya telah berhasil membuat sebuah aplikasi web to do list di mana pengguna bisa memasukkan daftar tugas yang sedang dikerjakan.</p>
                    <p className='text-gray-900/70 dark:text-white'>Aplikasi ini berbasis React Js dan Tailwind. Pengguna bisa memasukkan daftar tugasnya dan dapat menceklis jika tugas telah selesai.</p>
                    <p className='text-gray-900/70 dark:text-white'>Selain itu pengguna juga bisa menampilkan semua daftar tugas berdasarkan filter "active" dan "completed". Pengguna juga bisa menghapus daftar tugas yang sudah selesai maupun yang tidak dikerjakan.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portofolio
