import { MetaFunction } from '@remix-run/node';

import BottomNavigation from '~/components/BottomNavigation';
import WorkoutList from '~/components/WorkoutList';

export const meta: MetaFunction = () => {
  return [
    { title: 'My Workouts' },
    { name: 'My workouts', content: 'Welcome to Remix!' },
  ];
};

function WorkoutsPage() {
  return (
    <>
      <header className="bg-gray-300 h-16 fixed top-0 left-0 right-0 w-full max-w-md mx-auto">
        <div className="grid grid-cols-3 h-full items-center mx-4">
          <div className=""></div>
          <div className="justify-self-center">My workouts</div>
          <div className="justify-self-end">Edit</div>
        </div>
      </header>
      <main className="mt-16 flex-1 overflow-y-auto mb-20">
        <WorkoutList />
      </main>

      <button className="fixed bottom-24 btn left-0 right-0 mx-auto max-w-md btn-wide">
        Add Workout
      </button>

      <BottomNavigation />
    </>
  );
}

export default WorkoutsPage;
