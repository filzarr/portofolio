"use client"
import { DarkThemeToggle } from "flowbite-react"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react";


export default function Navbar() {
    const router = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const activeStyle = 'text-emerald-400 font-bold underline underline-offset-4';
    const nonActiveStyle = 'hover:text-emerald-400 hover:underline hover:underline-offset-4 duration-200';
    const [currentRoute, setCurrentRoute] = useState("home");
    const sections = document.querySelectorAll("section");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 50) {
                    const id = section.getAttribute("id");
                    if (id !== null) { // Memastikan id tidak null sebelum memperbarui state
                        setCurrentRoute(id);
                    }
                    console.log(id);
                }
            });
        };

        // Menambahkan event listener scroll pada saat komponen dipasang
        window.addEventListener('scroll', handleScroll);

        // Membersihkan event listener saat komponen dibongkar
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    return (

        <nav className="backdrop-blur-sm shadow-md underline-offset-8 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 after:border-b after:shadow-sm border-gray-200 dark:border-gray-600">
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
                <DarkThemeToggle className="bg-white text-yellow-400 shadow-xl border border-gray-100 p-4 rounded-full" />
            </div>
        </nav>

    )
}
