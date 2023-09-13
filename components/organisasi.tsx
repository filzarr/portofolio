
import Image from "next/image"
export default function Organisasi() {
  return (
    <section className="h-screen pt-36  pb-10 dark:bg-drk" id="organisasi">
      <div className="flex justify-center text-center"><p className="text-5xl font-semibold text-emerald-400">Organisasi</p></div>
      <div className="px-32 mt-20">
        <div className="grid grid-cols-3 gap-20" >
          <div className=" group w-full border p-5 border-gray-200 shadow-xl rounded-md hover:bg-emerald-400 hover:w-[105%] duration-100 hover:shadow-2xl dark:bg-[#132347] ">
            <div className="flex justify-center w-full ">
              <Image alt='himatif' src={'/himatif.png'} width={100} height={100} />
            </div>
            <div className="mt-5  ">
              <p className="font-semibold text-gray-800  group-hover:text-white dark:text-white"> Himpunan Mahasiswa Teknologi Informasi</p>
              <p className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mt-3 group-hover:text-white dark:text-gray-300">2021 - Now</p>
              <ul role="list" className="space-y-5 my-7 ">
                <li className="flex space-x-3 items-center ">
                  <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 group-hover:text-white dark:text-gray-300">Anggota Biasa Himatif</span>
                </li>
                <li className="flex space-x-3 items-center">
                  <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 group-hover:text-white dark:text-gray-300">Ketua Panitia Musyawarah Besar Himatif</span>
                </li>
                <li className="flex space-x-3 items-center">
                  <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 group-hover:text-white dark:text-gray-300">Ketua Panitia Gathering Day</span>
                </li>
              </ul>
            </div>
          </div>
          <div className=" group w-full border p-5 border-gray-200 shadow-xl rounded-md hover:bg-emerald-400 hover:w-[105%] duration-100 hover:shadow-2xl dark:bg-[#132347]">
            <div className="flex justify-center w-full ">
              <Image alt='Pema' src={'/pema.png'} width={100} height={100} />
            </div>
            <div className="mt-5">
              <p className="font-semibold text-gray-800 group-hover:text-white dark:text-white">Pemerintahan Mahasiswa Fasilkom-Ti </p>
              <p className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mt-3 group-hover:text-white dark:text-gray-300">2023 - Now</p>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3 items-center">
                  <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 group-hover:text-white dark:text-gray-300">Sekretaris PEMA Fasilkom-Ti</span>
                </li>
                <li className="flex space-x-3 items-center">
                  <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 group-hover:text-white dark:text-gray-300">Sekretaris Panitia PKKMB Fasilkom-Ti</span>
                </li>
                <li className="flex space-x-3 items-center">
                  <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 group-hover:text-white dark:text-gray-300">Pengawas Kegiatan PMB-TI</span>
                </li>
              </ul>
            </div>
          </div>
          <div className=" group w-full border p-5 border-gray-200 shadow-xl rounded-md hover:bg-emerald-400 hover:w-[105%] duration-100 hover:shadow-2xl dark:bg-[#132347]">
            <div className="flex justify-center w-full ">
              <Image alt='ITLG' src={'/itlg.jpg'} width={100} height={100} />
            </div>
            <div className="mt-5">
              <p className="font-semibold text-gray-800 group-hover:text-white dark:text-white">Information Technology Laboratory Group</p>
              <p className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500 mt-3 group-hover:text-white dark:text-gray-300">2023 - Now</p>
              <ul role="list" className="space-y-5 my-7">
                <li className="flex space-x-3 items-center">
                  <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 group-hover:text-white dark:text-gray-300">Anggota Divisi Medinfo</span>
                </li>
                <li className="flex space-x-3 items-center">
                  <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 group-hover:text-white dark:text-gray-300" >Asisten Laboratorium Mata Kuliah Pratikum Pemrograman Web Lanjutan</span>
                </li>
                <li className="flex space-x-3 items-center">
                  <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 group-hover:text-white dark:text-gray-300">Asisten Laboratorium Mata Kuliah Pratikum Pemrograman Berorientasi Objek Lanjutan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
