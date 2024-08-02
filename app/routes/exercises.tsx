import BottomNavigation from '~/components/BottomNavigation';
import SearchBar from '~/components/inputs/SearchBar';
('react-icons/md');
import { json, useLoaderData } from '@remix-run/react';
import {
  extractMuscleGroups,
  fetchExerciseJsonData,
} from '~/helpers/exercises';
import MuscleGroupList from '~/components/MuscleGroupList';

export const loader = async () => {
  const exerciseData = await fetchExerciseJsonData();
  const muscleGroups = extractMuscleGroups(exerciseData);

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
      <main className="mt-16 flex-1 overflow-y-auto mb-20 px-4">
        <MuscleGroupList data={muscleGroups} />
      </main>

      <button className="fixed bottom-24 btn left-0 right-0 mx-auto max-w-md btn-wide">
        Add Exercise
      </button>
      <BottomNavigation />
    </>
  );
};

export default ExercisesPage;
