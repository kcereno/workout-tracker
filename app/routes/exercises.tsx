import BottomNavigation from '~/components/BottomNavigation';
import SearchBar from '~/components/inputs/SearchBar';
('react-icons/md');
import { json, useLoaderData } from '@remix-run/react';
import {
  extractMuscleGroups,
  fetchExerciseJsonData,
} from '~/helpers/exercises';
import MuscleGroupList from '~/components/MuscleGroupList';
import { useRef } from 'react';

export const loader = async () => {
  const exerciseData = await fetchExerciseJsonData();
  const muscleGroups = extractMuscleGroups(exerciseData);

  return json({
    muscleGroups,
  });
};

const ExercisesPage = () => {
  const { muscleGroups } = useLoaderData<typeof loader>();

  const showModal = () => {
    const modal = document.getElementById(
      'add_exercise_modal'
    ) as HTMLDialogElement;

    if (modal) {
      modal.showModal();
    }
  };

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

      <button
        className="fixed bottom-24 btn left-0 right-0 mx-auto max-w-md btn-wide"
        onClick={showModal}
      >
        Add Exercise
      </button>
      <BottomNavigation />

      {/* Modal */}
      <div>
        <dialog
          id="add_exercise_modal"
          className="modal"
        >
          <div className="modal-box">
            <h3 className="text-lg font-bold">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default ExercisesPage;
