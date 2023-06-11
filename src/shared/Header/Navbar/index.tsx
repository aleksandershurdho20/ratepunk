import menuImg from '@/assets/images/menu.svg';
import { MENU_ITEMS, MenuItemsType } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MobileNavBar } from './NavbarMobile';

export default function Navbar() {
  const router = useRouter();
  const [isOpenModalNavBar, setOpenModalNarBar] = useState<boolean>(false);

  const toggleModalNavBar = () => {
    setOpenModalNarBar(!isOpenModalNavBar);
  };

  return (
    <>
      <nav className='header__navbar'>
        <div className='header__navbar--mobile' onClick={toggleModalNavBar}>
          <Image
            src={menuImg}
            alt='Menu-icon'
            height='0'
            width='0'
            style={{ height: 'auto' }}
          />
        </div>
        <section className='header__navbar--desktop'>
          <ul className='menu'>
            {MENU_ITEMS.map((item: MenuItemsType) => (
              <li
                key={item.id}
                className={`menu__items ${
                  typeof window !== "undefined" && window.location.pathname === item.path ? 'active' : ''
                }`}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </nav>
      {isOpenModalNavBar ? (
        <MobileNavBar
          isOpenModalNavBar={isOpenModalNavBar}
          toggleModalNavBar={toggleModalNavBar}
        />
      ) : null}
    </>
  );
}
