"use client"
import Image from 'next/image'
export default function About() {
    return (
        <section className=" h-screen dark:bg-drk" id='about'>
            <div className=" md:grid md:grid-cols-2 justify-center items-center justify-items-center  h-full px-5 flex flex-col  md:px-28 ">
                <div className="">
                    <p className='text-4xl font-bold text-emerald-400'>About Me</p>
                </div>
                <div className="  justify-self-start text-gray-800">

                    <div className=" border-b-2 max-sm:flex max-sm:text-center max-sm:flex-col max-sm:justify-center    pb-10 border-gray-800">
                        <p className=' text-2xl  md:text-5xl font-semibold dark:text-white'>Hello Saya <strong className='text-emerald-400'>Filza Rizki Ramadhan</strong></p>
                        <div className="flex text-emerald-400 mt-2">
                            <div className="flex  justify-start  w-full items-center  gap-10">
                                <p className='text-lg font-semibold'>Full Stack Developer</p>
                                <div className="flex gap-2">
                                    <Image src={'/indo.png'} width={30} height={30} alt='indo' />
                                    <p className='text-lg font-semibold'> Indonesia</p>
                                </div>
                            </div>
                        </div>
                        <p className=' capitalize  break-words mt-5 text-gray-500 font-medium dark:text-gray-300'>Hello Saya Filza Rizki Ramadhan Saya Seorang Mahasiswa Serta Seorang Freelance, Saya Seorang Full Stack Developer mobile dan website. saya menguasai beberapa bahasa pemrograman dan juga framework, baik pada tingkat pemula maupun berpengalaman. Saya juga bisa bekerja sendiri maupun dalam tim</p>
                    </div>
                    <div className="md:grid gap-10 max-sm:w-full md:grid-cols-3 mt-10 max-sm:flex max-sm:flex-col max-sm:gap-10 max-sm:px-5">
                        <button className=" hover:border-4 hover:border-emerald-400 ease-in duration-100 max-sm:w-full  grid border-b-4 px-3 py-3 border-emerald-400 shadow-sm rounded-xl items-center justify-center">
                            <p className=' text-3xl text-center text-emerald-400'>1+</p>
                            <p className=' text-center text-lg font-semibold dark:text-gray-200'>Pengalaman Bekerja</p>
                        </button>
                        <button className=" hover:border-4 max-sm:w-full hover:border-emerald-400 ease-in duration-100  grid border-b-4 px-3 py-3 border-emerald-400 shadow-sm rounded-xl items-center justify-center">
                            <p className=' text-3xl text-center text-emerald-400'>5+</p>
                            <p className=' text-center text-lg font-semibold dark:text-gray-200'>Bahasa Pemrograman</p>
                        </button>
                        <button className=" hover:border-4 max-sm:w-full hover:border-emerald-400 ease-in duration-100  grid border-b-4 px-3 py-3 border-emerald-400 shadow-sm rounded-xl items-center justify-center">
                            <p className=' text-3xl text-center text-emerald-400'>5</p>
                            <p className=' text-center text-lg font-semibold dark:text-gray-200'>Portofolio</p>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
