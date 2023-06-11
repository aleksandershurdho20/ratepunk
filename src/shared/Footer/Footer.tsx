import logoImg from '@/assets/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import mailImg from '@/assets/images/email-footer.svg';
import insImg from '@/assets/images/instagram.svg';
import faceImg from '@/assets/images/facebook.svg';
import linkInImg from '@/assets/images/linkedin.svg';
import twitImg from '@/assets/images/twitter.svg';
import tikImg from '@/assets/images/tiktok.svg';

import { memo } from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='about-us'>
          <Image
            src={logoImg}
            alt='logo'
            height='0'
            width='0'
            style={{ height: 'auto' }}
          />
          <p className='about-us--description'>
            Ratepunk compares hotel room prices across the major online travel
            agencies. When you search for a room, Ratepunk extension scans the
            top booking sites and runs a price comparison, so you can be
            confident in knowing you’re getting the best deal!
          </p>
          <p className='about-us--copyRight--desktop'>
            ©2021 Ratepunk. All Rights Reserved.
          </p>
        </div>
        <div className='contact-us'>
          <div className='links'>
            <h4 className='heading'>Quick links</h4>
            <ul>
              <li>
                <Link href='#'>Price Comparison </Link>
              </li>
              <li>
                <Link href='#'>Chrome Extension</Link>
              </li>
              <li>
                <Link href='#'>How It Works</Link>
              </li>
              <li>
                <Link href='#'>Ratepunk Blog</Link>
              </li>
              <li>
                <Link href='#'>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className='contact'>
            <h4 className='heading'>Contact</h4>
            <div className='email--box'>
              <Image src={mailImg} alt='email' />
              <p className='email'>hi@ratepunk.com</p>
            </div>
            <div className='social--box'>
              <h4 className='heading social'>social</h4>
              <div className='icon--box'>
                <Link href='#'>
                  <Image
                    src={insImg}
                    alt='Instagram'
                    height='0'
                    width='0'
                    style={{ height: 'auto' }}
                  />
                </Link>
                <Link href='#'>
                  <Image
                    src={faceImg}
                    alt='Instagram'
                    height='0'
                    width='0'
                    style={{ height: 'auto' }}
                  />
                </Link>
                <Link href='#'>
                  <Image
                    src={linkInImg}
                    alt='Instagram'
                    height='0'
                    width='0'
                    style={{ height: 'auto' }}
                  />
                </Link>
                <Link href='#'>
                  <Image
                    src={twitImg}
                    alt='Instagram'
                    height='0'
                    width='0'
                    style={{ height: 'auto' }}
                  />
                </Link>
                <Link href='#'>
                  <Image
                    src={tikImg}
                    alt='Instagram'
                    height='0'
                    width='0'
                    style={{ height: 'auto' }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className='about-us--copyRight--mobile'>
          ©2021 Ratepunk. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default memo(Footer);
