import { Link, useParams } from '@remix-run/react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import BottomNavigation from '~/components/BottomNavigation';

const MuscleGroupPage = () => {
  const { muscleGroup } = useParams();
  console.log('MuscleGroupPage ~ muscleGroup:', muscleGroup);

  return (
    <>
      <header className="bg-gray-300 h-16">
        <div className="grid grid-cols-3 px-4 h-full justify-between items-center">
          <Link
            to={'/exercises'}
            className="justify-self-start"
          >
            <MdKeyboardArrowLeft className="size-6" />
          </Link>
          <div className="justify-self-center">{muscleGroup}</div>
          <HiOutlineMagnifyingGlass className="size-6 justify-self-end" />
        </div>
      </header>
      <main className="flex-1"></main>
      <BottomNavigation />
    </>
  );
};

export default MuscleGroupPage;
