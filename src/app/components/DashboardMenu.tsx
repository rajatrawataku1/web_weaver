import React, { ReactNode } from 'react';
import { LightModeLogo } from './SvgComponents';
import MenuItemComponent from './MeuListItemComponent';

const NAV_MENU_ITEMS = [
  {
    name: 'Home',
    link: '/home',
  },
  {
    name: 'Resume',
    link: '/resume',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

function DashboardMenu({ children }: { children: ReactNode | undefined }) {
  return (
    <div className="h-screen w-screen md:flex">
      <div className="md:h-screen md:w-2/12 flex gap-4 md:flex-col px-6 py-6">
        <LightModeLogo className="h-24 w-24 self-center md:mb-8" />
        <div className="flex items-center md:flex-col w-100 gap-4">
          {NAV_MENU_ITEMS.map(menuItem => (
            <MenuItemComponent key={menuItem.name} {...menuItem} />
          ))}
        </div>
      </div>
      {children && <div className="md:h-screen md:w-10/12">{children}</div>}
    </div>
  );
}

export default DashboardMenu;
