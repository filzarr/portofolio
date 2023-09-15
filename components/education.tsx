"use client"
import Image from 'next/image'
export default function Education() {
    return (
        <section className="md:h-screen pt-36  md:pb-10 dark:bg-drk" id='education'>
            <div className="flex justify-center text-center"><p className="text-5xl font-semibold text-emerald-400">Education</p></div>
            <div className="md:px-32 px-5 mt-20">

                <div className=" md:p-10 rounded-lg shadow-xl border p-5 max-sm:h-full border-gray-300 dark:bg-[#132347]">
                    <ol className=" max-sm:flex max-sm:flex-col max-sm:justify-center md:grid md:grid-cols-3 max-sm:gap-20">
                        <li className=" max-sm:grid max-sm:justify-center md:mb-6 sm:mb-0">
                            <div className="flex max-sm:justify-center  ">
                                
                                <div className="z-10 flex items-center justify-center   rounded-full ring-0  ">
                                    <Image alt='man2' src={'/man2.png'} width={70} height={70}/>
                                </div>
                                
                            </div>
                            <div className="mt-3 sm:pr-8 max-sm:text-center">
                                <h3 className="text-lg font-semibold text-emerald-400 dark:text-white">Man 2 Model Medan</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018 - 2021</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Jurusan Ilmu Pengetahuan Alam, Man 2 Basket Club</p>
                            </div>
                        </li>
                        <li className="grid justify-center  md:mb-6 sm:mb-0 " >
                            <div className="flex justify-center  md:mr-5">
                                <div className="z-10 flex items-center justify-center   rounded-full ring-0  ">
                                <Image alt='Universitas Sumatera Utara' src={'/usu.png'} width={60} height={60}/>
                                </div>
                            </div>
                            <div className="mt-3 sm:pr-8 text-center justify-center flex-row">
                                <h3 className="text-lg font-semibold text-emerald-400 dark:text-white">Universitas Sumatera Utara</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - Now</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Fakultas Ilmu Komputer Dan Teknologi Informasi <br /> Jurusan Teknologi Informasi</p>
                            </div>
                        </li>
                        <li className=" mt-2 md:mb-6 sm:mb-0 md:flex sm:grid sm:justify-center   md:flex-col     md:items-end  gap-0 ">
                            <div className=" max-sm:flex max-sm:justify-center self-center md:ml-14 ">
                                <div className="z-10 md:flex md:items-center justify-center   rounded-full ring-0  ">
                                <Image alt='Parsinta' src={'/prs.jpeg'} width={60} height={60}/>
                                </div>
                            </div>
                            <div className="mt-3 max-sm:text-center   sm:pr-8">
                                <h3 className="text-lg font-semibold  text-emerald-400 dark:text-white">Parsinta Bootcamp</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Laravel Bootcamp</p>
                            </div>
                        </li>
                    </ol>
                </div>

            </div>
        </section>
    )
}
