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
    const [mobile,isMobile] = useState(false);
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

        <nav className={isScrolled ? "backdrop-blur-sm shadow-md underline-offset-8 dark:bg-drk fixed w-full z-20 top-0 left-0 after:border-b after:shadow-sm border-gray-200 dark:border-gray-600 duration-75  " : " duration-75 py-3 underline-offset-8 dark:bg-drk fixed w-full z-20 top-0 left-0 after:border-b after:shadow-sm border-gray-200 dark:border-gray-600"}>
            <div className={mobile ? " fixed top-0 z-50 min-h-screen min-w-full duration-75    p-4 overflow-y-auto transition-transform  bg-white  dark:bg-gray-800" : "hidden" } >
                <button onClick={() => isMobile(false)} data-drawer-hide="drawer-example" aria-controls="drawer-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto flex h-full w-full text-center justify-center items-center">
                    <ul className="space-y-8 text-xl font-medium h-full w-full text-center">
                        <li>
                            <Link href={"/#home"} className={currentRoute == "home" ? activeStyle : nonActiveStyle} onClick={() => setCurrentRoute("home")}     >
                                <span className="ml-3">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/#about"} className={currentRoute == "about" ? activeStyle : nonActiveStyle} onClick={() => setCurrentRoute("about")}   >
                                <span className="ml-3">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/#education"} className={currentRoute == "education" ? activeStyle : nonActiveStyle} onClick={() => setCurrentRoute("education")}   >
                                <span className="ml-3">Education</span>
                            </Link>
                        </li>
                        <li>
                        <Link href={"/#organisasi"} className={currentRoute == "organisasi" ? activeStyle : nonActiveStyle} onClick={() => setCurrentRoute("organisasi")}   > 
                                <span className="ml-3">Organisasi</span>
                         </Link>
                        </li>
                        <li>
                        <Link href={"/#skill"} className={currentRoute == "skill" ? activeStyle : nonActiveStyle} onClick={() => setCurrentRoute("skill")} >
                                <span className="ml-3">Skill</span>
                           </Link>
                        </li>
                        <li>
                        <Link href={"/#portofolio"} className={currentRoute == "portofolio" ? activeStyle : nonActiveStyle} onClick={() => setCurrentRoute("portofolio")} >
                                <span className="ml-3">Portofolio</span>
                         </Link>
                        </li>
                        <li>
                        <Link href={"/#contact"} className={currentRoute == "contact" ? activeStyle : nonActiveStyle} onClick={() => setCurrentRoute("contact")} >
                                <span className="ml-3">Contact</span>
                           </Link>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="flex justify-between  h-20 items-center px-3 md:px-16">
                <div className="">
                    <p className="text-emerald-400 font-bold text-2xl md:block hidden ">Filza Rizki Ramadhan</p>
                    <p className="text-emerald-400 font-bold text-2xl md:hidden block ">FRR</p>
                </div>
                <ul className="md:flex justify-center gap-14  text-base font-semibold  hidden   ">

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
                    <li><Link href={"/#contact"} className={currentRoute == "contact" ? activeStyle : nonActiveStyle} onClick={() => setCurrentRoute("contact")} > Contact</Link>
                    </li>

                </ul>
                <div className="">
                    {currentTheme === 'dark' ? (
                        <button onClick={() => setTheme('light')} className=" bg-drk text-white shadow-xl border border-gray-100 p-4 dark:border-0 dark:shadow-xl rounded-full"><svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z" />
                        </svg></button>
                    ) : (
                        <DarkThemeToggle className="bg-white text-yellow-400 shadow-xl border border-gray-100 p-4 rounded-full" onClick={() => setTheme('dark')} />
                    )}
                </div>
                <div className="">
                    <button onClick={() => isMobile(true)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                </div>
            </div>

        </nav>

    )
}
