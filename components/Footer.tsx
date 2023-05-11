import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { logopolos } from '@/public/assets/images';
import {
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTiktok, 
  IconBrandLinkedin
} from "@tabler/icons";

const Footer = () => {
  return (
    <footer className='p-10 sm:p-10 bg-BaseDarkestBlue rounded-t-[28px] z-50'>
      <div className='md:flex md:justify-between'>
        <div className='mb-6 md:mb-0'>
            <Link href='/' className='flex items-center'>
              <Image 
                src={logopolos} 
                alt='Logo-Mage-9' 
                width={200} 
                height={80} 
                className='cursor-pointer'
              />
            </Link>
            <div className='uppercase text-5xl text-center'>mage 9</div>
        </div>
        <div className='grid gap-10 sm:gap-6 sm:grid-cols-2'>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-BaseLightestBlue uppercase'>
              Competition
            </h2>
            <ul className='text-BaseLightestBlue'>
              <li className='mb-4'>
                <Link href='/robotics' className='hover:underline hover:text-MagePink'>
                  Robotics
                </Link>
              </li>
              <li className='mb-4'>
                <Link href='/gamedev' className='hover:underline hover:text-MagePink'>
                  Game Development
                </Link>
              </li>
              <li className='mb-4'>
                <Link href='/appdev' className='hover:underline hover:text-MagePink'>
                  App Development
                </Link>
              </li>
              <li className='mb-4'>
                <Link href='/iot' className='hover:underline hover:text-MagePink'>
                  IoT
                </Link>
              </li>
            </ul>
          </div>
          <div>
          <h2 className='mb-6 text-sm font-semibold text-BaseLightestBlue uppercase'>
              Event
            </h2>
            <ul className='text-BaseLightestBlue'>
              <li className='mb-4'>
                <Link href='/workshop' className='hover:underline hover:text-MagePink'>
                  Workshop
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='my-6 border-BaseLightestBlue sm:mx-auto lg:my-8' />
      <div className='sm:flex sm:items-center sm:justify-between'>
        <span className='text-sm text-BaseLightestBlue sm:text-center'>
          &copy; {new Date().getFullYear()}{` `}
          <Link href='/' className='hover:underline hover:text-MagePink'>
            Multimedia and Game Event 9
          </Link>
          . All rights reserved.
        </span>
        <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
          <a href='https://mail.google.com/mail/u/0/?fs=1&to=mage9.ce.its@gmail.com&su=Introduction%20From%20Us&body=%27%27&bcc=%27%27&tf=cm' 
             target='_blank' 
             rel='noreferrer'
          >
            <IconBrandGmail className='text-BaseLightestBlue hover:text-MagePink'></IconBrandGmail>
          </a>
          <a href='https://instagram.com/mage_its' 
             target='_blank' 
             rel='noreferrer'
          >
            <IconBrandInstagram className='text-BaseLightestBlue hover:text-MagePink'></IconBrandInstagram>
          </a>
          <a href='https://www.tiktok.com/@mage.its' 
             target='_blank' 
             rel='noreferrer'
          >
            <IconBrandTiktok className='text-BaseLightestBlue hover:text-MagePink'></IconBrandTiktok>
          </a>
          <a href='https://youtube.com/@mageits4169' 
             target='_blank' 
             rel='noreferrer'
          >
            <IconBrandYoutube className='text-BaseLightestBlue hover:text-MagePink'></IconBrandYoutube>
          </a>
          <a href='https://www.linkedin.com/company/mage-its/' 
             target='_blank' 
             rel='noreferrer'
          >
            <IconBrandLinkedin className='text-BaseLightestBlue hover:text-MagePink'></IconBrandLinkedin>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;