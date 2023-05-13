import React from 'react';
import Image from 'next/image';
import Video from 'next/';
import '../styles/globals.css';
import { RoboticCard } from '@/public/assets/images';
import { AppDevCard } from '@/public/assets/images';
import { GameDevCard } from '@/public/assets/images';
import { IOTCard } from '@/public/assets/images';

const Competition = () => {
  return (
    <div>
      <p className="justify-center items-center absolute w-[1129px] h-[120px] left-[calc(50%-1129px/2-0.5px)] top-[744px] font-[500] text-8xl leading-[120px] text-justify tracking-[0.435em] drop-shadow-[4px_4px_9px_rgba(80,184,231,0.9)] text-Competition">
        Competition
      </p>
      <div className="flex min-h-screen items-center justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="group relative rounded-[38px] shadow-[0_35px_35px_rgba(0,0,0,0.25)] cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <Image className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={RoboticCard} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className=" text-3xl font-bold text-white">Robotics</h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
              <h1 className="font-dmserif text-3xl font-bold text-white">Robotics</h1>
              <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Robotic Competition merupakan lomba pengoperasian robot yang diadakan untuk siswa/i SD dan SMP. Pada tahun ini MAGE 9 berfokus pada kompetisi line tracer dimana robot akan dibuat untuk bergerak mengikuti garis pandu yang
                telah disediakan.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
          <div className="group relative rounded-[38px] shadow-[0_35px_35px_rgba(0,0,0,0.25)] cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <Image className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={GameDevCard} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="mb-2 font-dmserif text-3xl font-bold text-white">Game Dev</h1>
              <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Game Development Competition merupakan lomba pembuatan game yang diadakan untuk siswa/i SMA/SMK/sederajat dan mahasiswa dalam mengembangkan ide, kreasi serta inovasi peserta mengenai Game Development.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
          <div className="group relative rounded-[38px] shadow-[0_35px_35px_rgba(0,0,0,0.25)] cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <Image className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={AppDevCard} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="mb-2 font-dmserif text-3xl font-bold text-white">App Dev</h1>
              <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Application Development Competition merupakan lomba pembuatan aplikasi yang diadakan untuk siswa/i SMA/SMK/sederajat dan mahasiswa dalam mengembangkan ide, kreasi serta inovasi peserta mengenai Application Development.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
          <div className="group relative rounded-[38px] shadow-[0_35px_35px_rgba(0,0,0,0.25)] cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <Image className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={IOTCard} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="mb-2 font-dmserif text-3xl font-bold text-white">IoT</h1>
              <p className="mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Internet of Things Develompment Competition merupakan lomba pengembangan alat (hardware) yang terintegrasi dengan aplikasi (software) yang memanfaatkan koneksi nirkabel seperti jaringan internet.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competition;
