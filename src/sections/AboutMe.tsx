import Image from "next/image"
import body from '../../public/images/body-adi.webp'

function AboutMe() {
  return (
    <section id="about">
        <div className="w-full py-16 md:py-20 2xl:py-24 bg-gray-50 dark:bg-gray-800">
            <div className="mx-auto px-4 md:px-8 flex gap-12 w-full max-w-7xl flex-col md:flex-row justify-between items-center">
                <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px]">
                    <Image src={body} alt="body" style={{objectFit: 'cover'}} className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 dark:border-gray-800 max-md:left-5 md:right-0 md:h-[420px] md:w-[340px]"></Image>
                    <div className="absolute h-[360px] w-[320px] bg-gray-200 dark:bg-gray-600 max-md:top-5 md:bottom-0 md:h-[420px] md:w-[340px]"></div>
                </div>
                <div className="max-w-xl flex flex-col gap-6">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">Penasaran tentang Saya?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, similique autem recusandae pariatur, illum nostrum eaque voluptatem commodi aspernatur maiores aliquam magni possimus earum debitis amet, a reiciendis soluta sed? Saepe pariatur dolore dolorem sunt explicabo voluptatem tempora ullam. Nemo impedit ab est iste expedita laborum beatae hic possimus aspernatur?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem officia sed neque saepe ullam cumque deleniti quasi inventore maxime pariatur. Explicabo cupiditate accusamus beatae, exercitationem similique, nulla doloribus nobis obcaecati molestiae quasi ad, illum iusto iure voluptatum! Recusandae praesentium earum voluptas ad modi officiis nisi eius amet saepe consectetur cum eaque molestiae, est aspernatur! Tempore maxime dolore aspernatur eaque illum recusandae nostrum? A laboriosam ea earum molestiae, amet deleniti quas?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, assumenda inventore. Animi blanditiis, dicta minima corporis consequuntur fugit quis? Ullam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dicta perferendis aliquam obcaecati! Atque sunt ducimus, iusto excepturi architecto debitis animi cumque harum asperiores exercitationem unde autem error eius ipsam veniam voluptatibus itaque! Facilis optio vitae et soluta iure eius totam magni quibusdam sed quos, nam eaque ratione, perspiciatis corrupti natus molestiae dolore vel. Cupiditate molestiae tempore corrupti voluptate quos.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe
