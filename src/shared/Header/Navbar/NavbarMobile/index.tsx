import { MENU_ITEMS, MenuItemsType } from '@/utils/constants';
import Logo from '../../Logo';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import closeImg from '@/assets/images/close.svg';
import Image from 'next/image';

type NavbarMobilePropsType = {
  toggleModalNavBar: () => void;
  isOpenModalNavBar: boolean;
};
export function MobileNavBar(props: NavbarMobilePropsType) {
  const router = useRouter();
  return (
    <>
      <div className='modal__overlay' onClick={props.toggleModalNavBar}></div>
      <div className='navbar-modal modal__body'>
        <div className='navbar'>
          <Logo />
          <div className='close-navbar' onClick={props.toggleModalNavBar}>
            <Image
              src={closeImg}
              alt='Close-icon'
              height='0'
              width='0'
              style={{ height: 'auto' }}
            />
          </div>
        </div>
        <ul className='menu'>
          {MENU_ITEMS.map((item: MenuItemsType) => (
            <li
              key={item.id}
              className={`menu__items ${
                window.location.pathname === item.path ? 'active' : ''
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
