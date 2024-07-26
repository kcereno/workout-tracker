import type { MetaFunction } from '@remix-run/node';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

const DUMMY_WORKOUTS = [
  'Lower Body 1',
  'Lower Body 2',
  'Upper Body 1',
  'Upper Body 2',
];

export default function Index() {
  return (
    <div className="font-sans bg-gray-100 h-screen pb-16 overflow-y-auto text-black">
      {/* Top Bar */}
      <div className="h-12 bg-gray-200 fixed w-full grid grid-cols-3 px-4 content-center  border-b-[1px] border-b-gray-300">
        <div className=""></div>
        <div className="justify-self-center">My Workouts</div>
        <div className="justify-self-end">Edit</div>
      </div>
      {/* Content */}
      <div className="overflow-y-auto h-full mt-12 px-4">
        <div className="flex flex-col">
          {DUMMY_WORKOUTS.map((workout) => {
            return (
              <div
                key={workout}
                className="py-2 border-b-[1px] flex justify-between"
              >
                <div className=""> {workout}</div>
                <MdKeyboardArrowRight className="size-6" />
              </div>
            );
          })}
        </div>
      </div>
      {/* Add Workout Button */}
      <div className="fixed bottom-20 left-0 right-0 flex justify-center">
        <button className="btn btn-primary btn-wide ">Add Workout</button>
      </div>
    </div>
  );
}
