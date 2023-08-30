"use client"
import Image from 'next/image'
export default function About() {
    return (
        <div className=" h-screen" id='About'>
            <div className="grid grid-cols-2 justify-center items-center justify-items-center  h-full  px-28">
                <div className="">
                    <p className='text-4xl font-bold text-gray-800'>About Me</p>
                </div>
                <div className="  justify-self-start text-gray-800">

                    <div className=" border-b-2  pb-10 border-gray-800">
                        <p className='text-5xl font-semibold'>Hello Saya <strong className='text-emerald-400'>Filza Rizki Ramadhan</strong></p>
                        <div className="flex text-emerald-400 mt-2">
                            <div className="flex  justify-start  w-full items-center  gap-10">
                                <p className='text-lg font-semibold'>Full Stack Developer</p>
                                <div className="flex gap-2">
                                    <Image src={'/indo.png'} width={30} height={30} alt='indo' />
                                    <p className='text-lg font-semibold'> Indonesia</p>
                                </div>
                            </div>
                        </div>
                        <p className=' capitalize  break-words mt-5 text-gray-500 font-medium'>Hello Saya Filza Rizki Ramadhan Saya Seorang Mahasiswa Serta Seorang Freelance, Saya Seorang Full Stack Developer mobile dan website. saya menguasai beberapa bahasa pemrograman dan juga framework, baik pada tingkat pemula maupun berpengalaman. Saya juga bisa bekerja sendiri maupun dalam tim</p>
                    </div>
                    <div className="grid gap-10 grid-cols-3 mt-10">
                        <button className=" hover:border-4 hover:border-emerald-400 ease-in duration-100  grid border-b-4 px-3 py-3 border-emerald-400 shadow-sm rounded-xl items-center justify-center">
                            <p className=' text-3xl text-center text-emerald-400'>1+</p>
                            <p className=' text-center text-lg font-semibold'>Pengalaman Bekerja</p>
                        </button>
                        <button className=" hover:border-4 hover:border-emerald-400 ease-in duration-100  grid border-b-4 px-3 py-3 border-emerald-400 shadow-sm rounded-xl items-center justify-center">
                            <p className=' text-3xl text-center text-emerald-400'>5+</p>
                            <p className=' text-center text-lg font-semibold'>Bahasa Pemrograman</p>
                        </button>
                        <button className=" hover:border-4 hover:border-emerald-400 ease-in duration-100  grid border-b-4 px-3 py-3 border-emerald-400 shadow-sm rounded-xl items-center justify-center">
                            <p className=' text-3xl text-center text-emerald-400'>5</p>
                            <p className=' text-center text-lg font-semibold'>Portofolio</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
