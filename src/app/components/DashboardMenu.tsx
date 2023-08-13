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
    <div className="h-screen w-screen flex">
      <div className="h-screen w-2/12 flex flex-col px-10 py-10">
        <LightModeLogo className="h-24 w-24 self-center mb-8" />
        <div className="flex flex-col w-100 gap-4">
          {NAV_MENU_ITEMS.map(menuItem => (
            <MenuItemComponent key={menuItem.name} {...menuItem} />
          ))}
        </div>
      </div>
      {children && <div className="h-screen w-10/12">{children}</div>}
    </div>
  );
}

export default DashboardMenu;
