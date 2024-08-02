import { Link, useLocation } from '@remix-run/react';

import { IoBarbell, IoClipboard } from 'react-icons/io5';

export type Page = 'exercises' | 'workouts';

function BottomNavigation() {
  const location = useLocation();
  console.log('BottomNavigation ~ location:', location);

  const pathname = location.pathname;

  const buttons = [
    {
      name: 'workouts',
      icon: <IoClipboard className="size-6" />,
      url: '/workouts',
    },
    {
      name: 'exercises',
      icon: <IoBarbell className="size-6" />,
      url: '/exercises',
    },
  ];

  return (
    <nav className="bg-gray-400 fixed bottom-0 h-20 w-full max-w-md left-0 right-0 mx-auto">
      <div className="bg-gray-300 grid grid-cols-2 h-full ">
        {buttons.map((button) => (
          <Link
            to={button.url}
            key={button.name}
            className={`flex flex-col justify-center items-center ${
              pathname.includes(button.url) ? 'bg-gray-400 rounded-lg' : null
            }`}
          >
            {button.icon}
            {button.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default BottomNavigation;
