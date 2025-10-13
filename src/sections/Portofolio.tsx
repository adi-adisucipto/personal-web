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
                    <p className='text-gray-900/70 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ut odio praesentium inventore et quod eveniet, facere iste atque optio voluptatum alias reiciendis nemo repellat quasi, quas cumque laudantium, repudiandae ea! Laudantium consequatur facere amet sint magni alias dolorem possimus, quis debitis iste nisi molestias sit itaque aspernatur veniam reprehenderit?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portofolio
