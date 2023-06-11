import { APP_ROUTER } from './app-config';
export interface MenuItemsType {
  id: number;
  title: string;
  path: string;
}
export const MENU_ITEMS: MenuItemsType[] = [
  {
    id: 1,
    title: 'Chrome Extension',
    path: APP_ROUTER.INDEX,
  },
  {
    id: 2,
    title: 'Price Comparison',
    path: APP_ROUTER.PRICE_COMPARISON,
  },
  {
    id: 3,
    title: 'Blog',
    path: APP_ROUTER.BLOG,
  },
];

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
