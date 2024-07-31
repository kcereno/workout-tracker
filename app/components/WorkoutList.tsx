import { MdKeyboardArrowRight } from 'react-icons/md';

const DUMMY_WORKOUTS = [
  'Lower Body 1',
  'Lower Body 2',
  'Upper Body 1',
  'Upper Body 2',
];

function WorkoutList() {
  return (
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
  );
}

export default WorkoutList;
