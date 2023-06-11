import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import headerLogo from '@/assets/images/logo.svg';

export default function Logo() {
  return (
    <div className='header__logo'>
      <Link href='/' className='header__logo--img'>
        <Image
          src={headerLogo}
          alt='Logo'
          width='0'
          height='0'
          style={{ height: 'auto' }}
        />
      </Link>
    </div>
  );
}
