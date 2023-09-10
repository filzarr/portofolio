"use client"
import Image from 'next/image'
type AppProps = {
    img: string;
    ket: string;
  };
export default function Program({img, ket}: AppProps ) {
  return (
    <button className=" dark:bg-drk dark:border dark:border-gray-800 dark:shadow-gray-800/50 dark:shadow  rounded-full border border-gray-100 bg-white  shadow-xl  hover:shadow-gray-400  ease-in shadow-gray-300 flex items-center justify-center p-4      group">
    <Image alt='html' src={`${img}`} width={70} height={70} />
    <div id="tooltip-default" role="tooltip" className="absolute z-10  opacity-0 group-hover:opacity-80   mb-20 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm  tooltip dark:bg-gray-700 group-hover:inline-block">
        {ket}
    </div>
</button>
  )
}
