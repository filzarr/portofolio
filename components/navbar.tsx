"use client"
import { DarkThemeToggle } from "flowbite-react"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes'

export default function Navbar() {
    const router = usePathname();
    const { systemTheme, theme, setTheme } = useTheme()
    const [isScrolled, setIsScrolled] = useState(false);
    const activeStyle = 'text-emerald-400 font-bold underline underline-offset-4';
    const nonActiveStyle = 'hover:text-emerald-400 hover:underline hover:underline-offset-4 duration-200';
    const [currentRoute, setCurrentRoute] = useState("home");
    const sections = document.querySelectorAll("section");
    const currentTheme = theme === 'system' ? systemTheme : theme;
    useEffect(() => {

        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            sections.forEach((section) => {
                window.addEventListener("scroll", () => (window.scrollY > 10 ? setIsScrolled(true) : setIsScrolled(false)));
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 70) {
                    const id = section.getAttribute("id");
                    console.log(currentTheme);
                    if (id !== null) {
                        setCurrentRoute(id);
                        if (id == "home") {
                            setIsScrolled(false);
                        }
                        else {
                            setIsScrolled(true);
                        }
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {

            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <nav className={isScrolled ? "backdrop-blur-sm shadow-md underline-offset-8 dark:bg-drk fixed w-full z-20 top-0 left-0 after:border-b after:shadow-sm border-gray-200 dark:border-gray-600 ease-out" : " ease-in py-3 underline-offset-8 dark:bg-drk fixed w-full z-20 top-0 left-0 after:border-b after:shadow-sm border-gray-200 dark:border-gray-600"}>
            <div className="flex justify-between  h-20 items-center px-16">
                <div className="">
                    <p className="text-emerald-400 font-bold text-2xl ">Filza Rizki Ramadhan</p>
                </div>
                <ul className="flex justify-center gap-14  text-base font-semibold   ">

                    <li><Link href={"/#home"} className={currentRoute == "home" ? activeStyle : nonActiveStyle} onClick={() => setCurrentRoute("home")}     >Home</Link>
                    </li>
                    <li><Link href={"/#about"} className={currentRoute == "about" ? activeStyle : nonActiveStyle} onClick={() => setCurrentRoute("about")}   >  About</Link> </li>
                    <li><Link href={"/#education"} className={currentRoute == "education" ? activeStyle : nonActiveStyle} onClick={() => setCurrentRoute("education")}   >  Education</Link>
                    </li>
                    <li><Link href={"/#organisasi"} className={currentRoute == "organisasi" ? activeStyle : nonActiveStyle} onClick={() => setCurrentRoute("organisasi")}   >  Organisasi</Link>
                    </li>

                    <li><Link href={"/#skill"} className={currentRoute == "skill" ? activeStyle : nonActiveStyle} onClick={() => setCurrentRoute("skill")} > Skill</Link>
                    </li>
                    <li><Link href={"/#portofolio"} className={currentRoute == "portofolio" ? activeStyle : nonActiveStyle} onClick={() => setCurrentRoute("portofolio")} > Portofolio</Link>
                    </li>

                </ul>
                {currentTheme === 'dark' ? (
                    <button onClick={() => setTheme('light')} className=" bg-drk text-white shadow-xl border border-gray-100 p-4 rounded-full"><svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z" />
                </svg></button>
              
                ) : (
                    <DarkThemeToggle className="bg-white text-yellow-400 shadow-xl border border-gray-100 p-4 rounded-full" onClick={() => setTheme('dark')} />

                )}
            </div>
        </nav>

    )
}
