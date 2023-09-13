import Image from 'next/image'
import React from 'react'
import { Cardct } from './card'

export default function Contact() {
    return (
        <section id='contact' className='h-screen pt-36 px-28   pb-10 dark:bg-drk'>
            <div className="  ">
                <p className='text-4xl font-bold text-emerald-400'>Contact US</p>
            </div>
            <div className="flex gap-20 ">
                <div className=" w-1/5 mt-20"><p className='text-2xl font-bold text-emerald-400'>For More Information Sign Up With US Here: <button className='mt-10 w-full hover:bg-emerald-400 py-3 border border-emerald-400 duration-100 hover:text-white rounded-xl'>Submit</button></p></div>
                <div className="w-2/6 mt-20">
                    <div className="mb-6">
                        <input type="text" placeholder='Your Name' id="default-input" className="   border-t-0 border-x-0 border-b-2 focus:border-2  focus:ring-emerald-400 duration-75 focus:placeholder:text-emerald-400 focus:placeholder:font-semibold  focus:border-emerald-400 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-4 dark:bg-gray-700/25 dark:border-gray-600 dark:border-b-4 dark:border-b-emerald-400 dark:focus:border-b-2 dark:placeholder-gray-400 dark:text-white dark:focus:placeholder:text-emerald-400 dark:focus:ring-emerald-400 dark:focus:border-emerald-400"></input>
                        <input type="text" placeholder='Your Phone' id="default-input" className=" mt-14   border-t-0 border-x-0 border-b-2 focus:border-2  focus:ring-emerald-400 duration-75 focus:placeholder:text-emerald-400 focus:placeholder:font-semibold  focus:border-emerald-400 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-4 dark:bg-gray-700/25 dark:border-gray-600 dark:border-b-4 dark:border-b-emerald-400 dark:text-white dark:focus:border-b-2 dark:placeholder-gray-400 dark:focus:placeholder:text-emerald-400 dark:focus:ring-emerald-400 dark:focus:border-emerald-400"></input>
                        <input type="text" placeholder='Your Email' id="default-input" className="mt-14   border-t-0 border-x-0 border-b-2 focus:border-2  focus:ring-emerald-400 duration-75 focus:placeholder:text-emerald-400 focus:placeholder:font-semibold  focus:border-emerald-400 border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-4 dark:bg-gray-700/25 dark:border-gray-600 dark:border-b-4 dark:border-b-emerald-400 dark:text-white dark:focus:border-b-2 dark:placeholder-gray-400 dark:focus:placeholder:text-emerald-400 dark:focus:ring-emerald-400 dark:focus:border-emerald-400"></input>
                    </div>

                </div>
                <div className="  flex items-center justify-center  font-semibold text-2xl text-gray-800 text-center dark:text-emerald-400">OR</div>
                <div className=" w-2/6 flex flex-col gap-14">
                    <a href="">
                        <Cardct img='/wa.png' nohp='085372510812' judul='WhatsApp' ket='Send Me A Message' />
                    </a>
                    <a href="">
                        <Cardct img='/gmail.png' nohp='filzaramadhan2003@gmail.com' judul='Gmail' ket='Send Me A Message' />
                    </a>
                    <a href="">
                        <Cardct img='/linkedin.png' nohp='Filza Rizki Ramadhan' judul='Linkedin' ket='Send Me A Message' />
                    </a>
                </div>
            </div>
        </section>
    )
}
