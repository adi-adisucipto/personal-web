import { Mail, Phone } from 'lucide-react'

function Contact() {
  return (
    <section id='contact' className='max-w-3xl mx-auto py-16 md:py-20'>
      <h2 className='px-4 md:px-8 w-full text-center mb-10 md:text-xl text-lg'>Contact</h2>
        <div className='flex flex-col justify-center items-center gap-10 p-4'>
            <p className='text-center text-gray-800/70 text-xl dark:text-white'>Apa selanjutnya? Jangan ragu untuk menghubungi saya jika Anda mencari pengembang, memiliki pertanyaan, atau sekadar ingin terhubung.</p>
            <div className='flex text-3xl justify-between items-center gap-5'>
                <Mail/>
                <span>suciptoadi550@gmail.com</span>
            </div>

            <div className='flex text-3xl justify-between items-center gap-5'>
                <Phone/>
                <span>+62 89630760902</span>
            </div>
        </div>
    </section>
  )
}

export default Contact
