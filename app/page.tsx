import About from '@/components/about'
import Education from '@/components/education'
import Jumbotron from '@/components/jumbotron'
import Organisasi from '@/components/organisasi'

import Image from 'next/image'
export default function Home() {
  return (
    <main className=' '>
      <Jumbotron></Jumbotron>
      <About></About>
      <Education></Education>
      <Organisasi></Organisasi>    
    </main>
  )
}
