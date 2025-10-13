import { IconButton } from "@/components/icon-button"
import Image from "next/image"
import { skills } from "@/lib/data"


function Skills() {
  return (
    <div id="skills" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h3 className="w-full flex justify-center items-center text-xl">Ini adalah beberapa skills yang Saya kuasai</h3>
            <div className="flex justify-between w-full items-center py-16 md:py-20 2xl:py-24">
                <div className="md:flex grid grid-rows-2 grid-cols-4 gap-8 justify-between items-center w-full">
                    {
                        skills.map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <IconButton onClick={() => window.open(item.href, '_blank')}>
                                    <Image src={item.icon} alt={item.desc}></Image>
                                </IconButton>
                                <p>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
