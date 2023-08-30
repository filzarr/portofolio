"use client"
import Image from 'next/image'
export default function Education() {
    return (
        <div className="h-screen pt-32 pb-10">
            <div className="flex justify-center text-center"><p className="text-5xl font-semibold text-gray-800">Education</p></div>
            <div className="px-32 mt-20">

                <div className=" p-10 rounded-lg shadow-xl border border-gray-300">
                    <ol className=" grid grid-cols-3">
                        <li className=" mb-6 sm:mb-0">
                            <div className="flex ">
                                
                                <div className="z-10 flex items-center justify-center  bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                    <Image alt='man2' src={'/man2.png'} width={70} height={70}/>
                                </div>
                                
                            </div>
                            <div className="mt-3 sm:pr-8">
                                <h3 className="text-lg font-semibold text-emerald-400 dark:text-white">Man 2 Model Medan</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018 - 2021</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Jurusan Ilmu Pengetahuan Alam, Man 2 Basket Club</p>
                            </div>
                        </li>
                        <li className="grid justify-center  mb-6 sm:mb-0 " >
                            <div className="flex justify-center  mr-5">
                                <div className="z-10 flex items-center justify-center  bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <Image alt='Universitas Sumatera Utara' src={'/usu.png'} width={60} height={60}/>
                                </div>
                            </div>
                            <div className="mt-3 sm:pr-8 text-center justify-center flex-row">
                                <h3 className="text-lg font-semibold text-emerald-400 dark:text-white">Universitas Sumatera Utara</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - Now</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Fakultas Ilmu Komputer Dan Teknologi Informasi <br /> Jurusan Teknologi Informasi</p>
                            </div>
                        </li>
                        <li className=" mt-2 mb-6 sm:mb-0 flex   flex-col     items-end  gap-0 ">
                            <div className=" self-center ml-14 ">
                                <div className="z-10 flex items-center justify-center  bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <Image alt='Parsinta' src={'/prs.jpeg'} width={60} height={60}/>
                                </div>
                            </div>
                            <div className="mt-3 sm:pr-8">
                                <h3 className="text-lg font-semibold  text-emerald-400 dark:text-white">Parsinta Bootcamp</h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022</time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Laravel Bootcamp</p>
                            </div>
                        </li>
                    </ol>
                </div>

            </div>
        </div>
    )
}
