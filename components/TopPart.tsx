import React from 'react';
import Image from 'next/image';
import { Rectangle } from '../public/assets/images/index';

const TopPart = () => {
  return (
    <div className="w-full h-screen mt-10 text-Black flex">
      <div className="items-center justify-center h-3/4 w-screen bg-BaseDarkBlue rounded-t-sedang rounded-bl-sedang rounded-br-gedepol ">
        <div className="container mt-[47px] ml-16">
          <div>
            <h2 className="font-medium text-BaseLightestBlue max-w-containerDescription text-justify text-8xl">
              What is <span className="font-extrabold text-BaseLightestBlue max-w-containerDescription text-justify text-8xl">Mage 9? </span>
            </h2>
            <p className="mt-5 text-BaseLightestBlue max-w-containerDescription text-justify text-2xl">
              MAGE (Multimedia and Game Event) adalah serangkaian acara dibidang IT yang diadakan oleh Departemen Teknik Komputer - FTEIC ITS sebagai wadah bagi generasi muda dalam berkreasi, berekspresi, dan berkompetisi untuk menuangkan
              inovasi sekaligus menyelesaikan permasalahan dengan memanfaatkan berbagai macam teknologi melalui serangkaian kegiatan seperti Development Competition (Apps, IoT, Games), Olimpiade, Workshop, dan Webinar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPart;
