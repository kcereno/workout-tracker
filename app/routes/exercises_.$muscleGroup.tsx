import { useParams } from '@remix-run/react';
import BottomNavigation from '~/components/BottomNavigation';

const MuscleGroupPage = () => {
  const { muscleGroup } = useParams();
  console.log('MuscleGroupPage ~ muscleGroup:', muscleGroup);

  return (
    <>
      <header className="bg-gray-300 h-16">
        <div className="grid grid-cols-3 px-4 h-full justify-between items-center">
          <div className="justify-self-start">Arrow</div>
          <div className="justify-self-center">{muscleGroup}</div>
          <div className="justify-self-end">search icon</div>
        </div>
      </header>
      <main className="flex-1"></main>
      <BottomNavigation />
    </>
  );
};

export default MuscleGroupPage;
