"use client"

import Image from "next/image"
type AppProps = {
    img: string;
    ket: string;
    judul: string;
    stack: string[];
};
export default function Card({ img, judul, ket, stack }: AppProps) {


    return (
        <div className=" dark:border-gray-900 border border-gray-100 shadow-md dark:shadow-gray-800/50 shadow-gray-300 p-3 rounded-md hover:shadow-2xl  duration-300">
            <Image className="border border-gray-300 rounded-md" src={`${img}`} alt="" width={1000} height={1000} />
            <a href="">
                <p className="mt-3 hover:text-emerald-400 duration-100 hover:underline hover:underline-offset-8 text-2xl font-semibold ">{judul}</p>
            </a>
            <div className="flex gap-5 mt-3">
                {stack.map((val, index) => (
                    <div className=" bg-gray-300 px-2 py-1 dark:bg-drk dark:border-gray-600 dark:border dark:text-gray-300"  >
                        <p className="text-xs font-medium" key={index}>{val}</p>
                    </div>
                ))}


            </div>
            <p className="my-6 text-base dark:text-gray-300">{ket}</p>
            <div className="flex gap-3 mt-5 h-max   items-end">
                <a href="" className="flex hover:bg-emerald-900 duration-100 items-center gap-2 bg-emerald-400 px-3 py-2  font-semibold rounded-md text-white">Details<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg></a>
                <a href="" className="hover:bg-emerald-400 hover:text-white flex border-2 duration-100 items-center gap-2 border-emerald-400 px-3 py-2 font-semibold rounded-md text-emerald-400">Preview<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg></a>
                <a href="" className="hover:bg-black hover:text-white flex border-2 duration-100 items-center gap-2  border-black px-3 py-2 font-semibold rounded-md text-black">Github<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg></a>
            </div>
        </div>
    )
}
