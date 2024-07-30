import { MetaFunction } from '@remix-run/node';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import BottomNavigation from '~/components/BottomNavigation';

export const meta: MetaFunction = () => {
  return [
    { title: 'My Workouts' },
    { name: 'My workouts', content: 'Welcome to Remix!' },
  ];
};

const DUMMY_WORKOUTS = [
  'Lower Body 1',
  'Lower Body 2',
  'Upper Body 1',
  'Upper Body 2',
];

function WorkoutsPage() {
  return (
    <div className="relative flex flex-col bg-gray-200 min-h-dvh text-black max-w-md">
      <header className="bg-gray-300 h-16 fixed top-0 left-0 right-0 w-full max-w-md">
        <div className="grid grid-cols-3 h-full items-center mx-4">
          <div className=""></div>
          <div className="justify-self-center">My workouts</div>
          <div className="justify-self-end">Edit</div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto mt-16 mb-20">
        <div className="mx-4 flex flex-col">
          {DUMMY_WORKOUTS.map((workout) => {
            return (
              <div
                key={workout}
                className="flex justify-between py-2 border-b-[1px] border-b-gray-300"
              >
                <span>{workout}</span>
                <MdKeyboardArrowRight className="size-6" />
              </div>
            );
          })}
        </div>
      </main>
      <div className="fixed bottom-24 w-full flex justify-center">
        <button className="btn btn-wide">Add Workout</button>
      </div>
      <BottomNavigation />
    </div>
  );
}

export default WorkoutsPage;
