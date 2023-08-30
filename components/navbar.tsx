"use client"
import { DarkThemeToggle } from "flowbite-react"

export default function Navbar() {

    return (

        <nav className="backdrop-blur-sm shadow-md underline-offset-8 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 after:border-b after:shadow-sm border-gray-200 dark:border-gray-600">
            <div className="flex justify-between  h-20 items-center px-16">
                <div className="">
                    <p className=" text-emerald-400 font-bold text-2xl">Filza Rizki Ramadhan</p>
                </div>
                <ul className="flex justify-center gap-14  text-base font-semibold   ">
                    <li className="  text-emerald-400 underline underline-offset-4 ">Home</li>
                    <li>About</li>
                    <li>Education</li>
                    <li>Skill</li>
                    <li>Portofolio</li>
                    <li>Contact</li>
                </ul>
                <DarkThemeToggle  className="bg-white text-yellow-400 shadow-xl border border-gray-100 p-4 rounded-full"/>
            </div>
        </nav>

    )
}
