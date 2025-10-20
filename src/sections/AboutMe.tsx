import Image from "next/image"
import body from '../../public/images/body-adi.webp'

function AboutMe() {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-800 md:py-20 py-16">
        <h2 className='px-4 md:px-8 w-full text-center mb-10 md:text-xl text-lg'>About Me</h2>
        <div className="w-full ">
            <div className="mx-auto px-4 md:px-8 flex gap-12 w-full max-w-7xl flex-col md:flex-row justify-between items-center">
                <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px]">
                    <Image src={body} alt="body" style={{objectFit: 'cover'}} className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 dark:border-gray-800 max-md:left-5 md:right-0 md:h-[420px] md:w-[340px]"></Image>
                    <div className="absolute h-[360px] w-[320px] bg-gray-200 dark:bg-gray-600 max-md:top-5 md:bottom-0 md:h-[420px] md:w-[340px]"></div>
                </div>
                <div className="max-w-xl flex flex-col gap-6">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">Penasaran tentang Saya?</h3>
                    <p>Saya Adi Sucipto, lahir pada tanggal 04 Mei 1998. Saya adalah lulusan Fisika dari Universitas Lampung pada tahun 2022.</p>
                    <p>Memiliki pengalaman di dunia pendidikan, saya pernah mendedikasikan diri sebagai guru di SDN 03 Kampung Baru Bandar Lampung dan SMA Pangudi Luhur Bandar Lampung. Saat ini, saya aktif sebagai Guru Matematika di Ganesha Operation, di mana saya berfokus pada penyampaian materi secara efektif dan inspiratif.</p>
                    <p>Selain pengajaran, saya juga memiliki minat yang kuat di bidang teknologi dan sedang aktif mempelajari web development, khususnya dengan stack React, Tailwind CSS, dan Express. Saya antusias untuk menggabungkan latar belakang analitis saya dengan keterampilan teknis baru untuk menciptakan solusi yang inovatif.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe
