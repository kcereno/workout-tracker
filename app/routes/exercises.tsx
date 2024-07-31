import BottomNavigation from '~/components/BottomNavigation';
import SearchBar from '~/components/inputs/SearchBar';
('react-icons/md');

import { promises as fs } from 'fs';
import { json, useLoaderData } from '@remix-run/react';

import { Exercises } from '~/types/exercises';
import { extractMuscleGroups } from '~/helpers/exercises';
import MuscleGroupList from '~/components/MuscleGroupList';

export const loader = async () => {
  const jsonDirectory = 'app/json';
  const fileContents = await fs.readFile(
    jsonDirectory + '/exercises.json',
    'utf-8'
  );

  const exercises = JSON.parse(fileContents) as Exercises;

  const muscleGroups = extractMuscleGroups(exercises);

  return json({
    muscleGroups,
  });
};

const ExercisesPage = () => {
  const { muscleGroups } = useLoaderData<typeof loader>();

  return (
    <>
      <header className="h-16 fixed bg-gray-300 w-full max-w-md left-0 right-0 mx-auto">
        <div className="p-4">
          <SearchBar />
        </div>
      </header>
      <main className="bg-gray-200 mt-16 flex-1 overflow-y-auto mb-20 px-4">
        <div className="flex flex-col gap-4">
          <MuscleGroupList data={muscleGroups} />
        </div>
      </main>

      <button className="fixed bottom-24 btn left-0 right-0 mx-auto max-w-md btn-wide">
        Add Exercise
      </button>
      <BottomNavigation />
    </>
  );
};

export default ExercisesPage;
