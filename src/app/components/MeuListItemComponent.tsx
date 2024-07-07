'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function MenuItemComponent({ name, link }: { name: string; link: string }) {
  const currentPathName = usePathname();

  const isActive = currentPathName === link;

  console.log(currentPathName, isActive, link);

  return (
    <Link
      className={`text-xl font-sans py-1 px-1 text-center font-black rounded-sm ${
        isActive
          ? 'text-primaryMain bg-defaultLight text-opacity-70 shadow-sm'
          : 'text-opacity-90'
      }`}
      href={link}
    >
      {name}
    </Link>
  );
}

export default MenuItemComponent;
