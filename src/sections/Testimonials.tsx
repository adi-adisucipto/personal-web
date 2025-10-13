import { testimoni } from "@/lib/data"
import Image from "next/image"


function Testimonials() {
  return (
    <section id="testimonial">
      <div className="bg-gray-50 dark:bg-gray-800 py-16 md:py-20">
        <div className="px-4 md:px-8 max-w-7xl mx-auto">
            <h2 className="w-full text-center mb-5 md:text-xl text-lg">Testimonials</h2>
            <h3 className="w-full text-center mb-10 md:text-lg text-[16px]">Kata orang-orang baik tentang Saya:</h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                {
                  testimoni.map((item, index) => (
                    <div key={index} className='p-8 dark:bg-gray-600 rounded-xl flex shadow-xl'>
                        <div className="flex flex-col items-center justify-between mx-auto max-w-[350px] gap-6">
                            <Image src={item.pic} alt={item.name} className="w-[65px] h-[65px] rounded-full"></Image>
                            <p>“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. “</p>
                            <div className="flex flex-col gap-1 items-center">
                                <h2 className="font-bold text-xl text-gray-900 dark:text-white">{item.name}</h2>
                                <p className="text-gray-900/60 font-medium dark:text-white/60">Verified Graduate</p>
                            </div>
                        </div>
                    </div>
                  ))
                }
            </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
