import { useState } from 'react';
import { IoBarbell, IoClipboard } from 'react-icons/io5';

export type Page = 'exercises' | 'workouts';

function BottomNavigation() {
  const [page, setPage] = useState<Page>('exercises');

  const buttons = [
    { name: 'exercises', icon: <IoBarbell className="size-6" /> },
    { name: 'workouts', icon: <IoClipboard className="size-6" /> },
  ];

  return (
    <div className="btm-nav">
      {buttons.map((btn) => (
        <button
          key={btn.name}
          className={page === btn.name ? 'bg-gray-500 rounded' : undefined}
          onClick={() => setPage(btn.name as Page)}
        >
          {btn.icon}
        </button>
      ))}
    </div>
  );
}

export default BottomNavigation;
