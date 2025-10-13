import Image from "next/image"
import head from '../../public/images/head-adi.jpg'
import { Github, Instagram, MapPin } from "lucide-react"
import { IconButton } from "@/components/icon-button"
import { Social_Links } from "@/lib/data"

function HeroSection() {
  return (
    <section id="hero" className="py-16 md:py-20 2xl:py-24">
      <div className="px-4 md:px-8 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-12">
          <div className="md:order-last h-[300px] w-[280px] md:h-[360px] md:w-[320px] relative">
            <Image src={head} alt="gambar" style={{objectFit: 'cover'}} className="absolute z-10 h-[280px] w-[240px] border-8 border-white dark:border-black max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"></Image>
            <div className="absolute h-[280px] w-[280px] bg-gray-200 dark:bg-gray-600 max-md:top-5 md:bottom-0 md:right-0 md:w-[280px] md:h-[320px]"></div>
          </div>
          <div className="max-w-3xl flex flex-col flex-grow gap-8 justify-center 2xl:gap-12">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-semibold md:font-bold md:text-5xl lg:text-6xl lg:leading-[72px] text-gray-900 dark:text-white">Hai, Saya Adi</h1>
              <p className="text-base text-gray-900/80 dark:text-white/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ab explicabo reprehenderit nulla cumque nisi similique facere quos provident, optio dolorum natus repellat sint itaque voluptatum atque? Possimus distinctio doloremque molestiae dolor quod non, ducimus rerum! Voluptates natus laborum sunt, ex, consequatur deleniti atque perspiciatis maxime facilis explicabo cum quasi?</p>
            </div>
            <div className="flex gap-2">
              <MapPin/>
              <p>Bandar Lampung, Indonesia</p>
            </div>
            <div className="flex gap-1">
              {
                Social_Links.map((item, index) => (
                  <IconButton key={index} onClick={() => window?.open(item.url, '_blank')}>
                    <item.icon/>
                  </IconButton>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
