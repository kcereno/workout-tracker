import { LoaderFunctionArgs, redirect } from '@remix-run/node';
import { json, Link, useLoaderData, useParams } from '@remix-run/react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import BottomNavigation from '~/components/BottomNavigation';
import { fetchExerciseJsonData } from '~/helpers/exercises';
import { capitalizeFirstLetter } from '~/utils/transformers';

// TODO: Redirect to /exercises if muscle group does note exist

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const muscleGroup = params['muscleGroup'];
  console.log('loader ~ muscleGroup:', muscleGroup);
  const exerciseData = await fetchExerciseJsonData();

  const exercises = exerciseData[muscleGroup!];
  console.log('loader ~ exercises:', exercises);

  if (!exercises) {
    return redirect('/exercises/');
  }

  return json({ muscleGroup, exercises });
};

const MuscleGroupPage = () => {
  const { muscleGroup, exercises } = useLoaderData<typeof loader>();

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
          <div className="justify-self-center">
            {capitalizeFirstLetter(muscleGroup!)}
          </div>
          <HiOutlineMagnifyingGlass className="size-6 justify-self-end" />
        </div>
      </header>
      <main className="flex-1"></main>
      <BottomNavigation />
    </>
  );
};

export default MuscleGroupPage;
