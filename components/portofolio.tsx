"use client"

import Image from "next/image"
import { Card } from "./card"


export default function Portofolio() {

return (
    <section className='pt-32 pb-10 dark:bg-drk' id="portofolio">
        <div className="flex justify-center text-center"><p className="text-5xl font-semibold text-emerald-400">Portofolio</p></div>
        <div className="px-32 mt-20">
            <div className="grid grid-cols-3 gap-12">
                <Card img="/inspek.png" ket="lorem Ipsum Dolor Sit Amet sdlfksdlkfslkd" judul="Inspektorat Sumatera Utara" stack={['Tailwind CSS', 'vite', 'Laravel']}></Card>
                <Card img="/kasir.png" ket="lorem Ipsum Dolor Sit Amet sdlfksdlkfslkd" judul="Kasir Dan Keuangan Saudara Teknik" stack={['Tailwind CSS', 'Laravel']}></Card>
                <Card img="/3.png" ket="lor em Ipsum Dolor Sit Amet sdlfksdlkfslkd" judul="Sistem Informasi CV. Karya Rizki" stack={['Laravel']}></Card>
                <Card img="/porto.png" ket="lor em Ipsum Dolor Sit Amet sdlfksdlkfslkd" judul="My Portofolio" stack={['Next JS', 'Tailwind CSS']}></Card>
                <Card img="/relawan.png" ket="lor em Ipsum Dolor Sit Amet sdlfksdlkfslkd" judul="Aplikasi Tim Pemenangan Caleg" stack={['Next JS', 'Nest JS']}></Card>
            </div>
        </div>
        <div className="w-full flex justify-end px-32 mt-20">
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-base h-10">
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
)
}
