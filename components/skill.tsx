"use client"
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Tabs } from 'flowbite-react'
import Image from 'next/image'
import Program from './program';
import React, { useEffect, useState } from 'react';

export default function Skill() {
    const [tool, setTool] = React.useState(false);

    const clk = (A : boolean) => {
        setTool(A);
    };


    return (

        <section className=" max-sm:mt-10 md:h-screen dark:bg-drk" id='skill'>
            <div className="grid md:grid-cols-2 justify-center items-center justify-items-center  h-full  px-28 ">
                <div className="flex justify-center text-center"><h1 className="mb-4 text-5xl md:text-3xl font-extrabold text-gray-900 dark:text-white  lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Skills</span> </h1></div>

                <div className=" w-full rounded-md p-10 border border-gray-200 shadow-xl block max-sm:mt-16 max-sm:px-5  dark:bg-[#132347]  ">
                    <div className="flex justify-center gap-20 ">
                        <button onClick={(e) => clk(false)} type='button' className={tool ? 'dark:text-gray-300 flex gap-2 text-xl items-center font-semibold text-gray-800' : ' text-emerald-400 flex gap-2 text-xl items-center font-semibold  '}><svg xmlns="http://www.w3.org/2000/svg" width={20} fill="currentColor" className="bi bi-code" viewBox="0 0 16 16">
                            <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
                        </svg>Programming</button>
                        <button onClick={(e) => clk(true)} className={!tool ? ' dark:text-gray-300 flex gap-2 text-xl items-center font-semibold text-gray-800' : ' text-emerald-400 flex gap-2 text-xl items-center font-semibold  '}><svg xmlns="http://www.w3.org/2000/svg" width={20} fill="currentColor" className="bi bi-tools" viewBox="0 0 16 16">
                            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                        </svg>Tools</button>
                    </div>
                    <div className={tool ? 'hidden ease-in duration-100' : " grid  md:grid-cols-5 grid-cols-3 gap-12 mt-10 ease-out duration-100 " }>
                        <Program img={'/html.png'} ket={'HTML 5'} />
                        <Program img={'/css.png'} ket={'CSS 3'} />
                        <Program img={'/js.png'} ket={'Javascript'} />
                        <Program img={'/php.png'} ket={'PHP'} />
                        <Program img={'/typescript.png'} ket={'Typescript'} />
                        <Program img={'/c-.png'} ket={'C++'} />
                        <Program img={'/c.png'} ket={'C'} />
                        <Program img={'/java.png'} ket={'Java'} />
                        <Program img={'/react.png'} ket={'React JS'} />
                        <Program img={'/next.png'} ket={'Next JS'} />
                        <Program img={'/tailwind.png'} ket={'Tailwind CSS'} />
                        <Program img={'/laravel.png'} ket={'Laravel'} />
                        <Program img={'/express.png'} ket={'Express JS'} />
                        <Program img={'/node.png'} ket={'Node JS'} />
                        <Program img={'/mysql.png'} ket={'MySQL'} />
                        <Program img={'/flutter.png'} ket={'Flutter'} />
                        <Program img={'/vite.png'} ket={'Vite JS'} />
                        <Program img={'/flow.jpg'} ket={'Flowbite'} />




                    </div>
                    <div className={!tool ? 'hidden ease-in-out duration-100' : " grid grid-cols-3 md:grid-cols-5 gap-12 mt-10 ease-in-out duration-100" }>
                        <Program img={'/vsc.png'} ket={'Visual Studio Code'} />
                        <Program img={'/intelij.png'} ket={'Intellij IDE'} />
                        <Program img={'/clion.png'} ket={'Clion IDE'} />
                        <Program img={'/android.png'} ket={'Android Studio'} />
                        <Program img={'/bitvise.png'} ket={'Bitvise'} />
                        <Program img={'/xampp.png'} ket={'Xampp'} />
                        <Program img={'/git.png'} ket={'Github'} />
                        <Program img={'/figma.png'} ket={'Figma'} />
                    




                    </div>



                </div>
            </div>
        </section>
    )
}
