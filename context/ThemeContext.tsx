"use client"
import About from '@/components/about'
import Contact from '@/components/contact'
import Education from '@/components/education'
import Footer from '@/components/footer'
import Jumbotron from '@/components/jumbotron'
import Navbar from '@/components/navbar'
import Organisasi from '@/components/organisasi'
import Portofolio from '@/components/portofolio'
import Skill from '@/components/skill'

import { ThemeProvider } from "next-themes"
export default function ThemeContext() {
    return (
        <ThemeProvider enableSystem={true} attribute='class'>

            <Navbar></Navbar>
            <Jumbotron></Jumbotron>
            <About></About>
            <Education></Education>
            <Organisasi></Organisasi>
            <Skill></Skill>
            <Portofolio></Portofolio>
            <Contact></Contact>
            {/* <Footer></Footer> */}
        </ThemeProvider>
    )
}
