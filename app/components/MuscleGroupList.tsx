import { IoBarbell } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
type PrimaryMuscleListProps = {
  data: string[];
};

const MuscleGroupList = ({ data = [] }: PrimaryMuscleListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((exercise) => (
        <div
          key={exercise}
          className="flex border-b-[1px] border-b-gray-300 py-2 justify-between"
        >
          <span className="flex items-center gap-2 ">
            <span>
              <IoBarbell className="size-6" />
            </span>
            <div className="">{exercise}</div>
          </span>
          <span className="">
            <MdKeyboardArrowRight className="size-6" />
          </span>
        </div>
      ))}
      <div className="flex border-b-[1px] border-b-gray-300 py-2 justify-between">
        <span>All Exercises</span>
        <span className="">
          <MdKeyboardArrowRight className="size-6" />
        </span>
      </div>
    </div>
  );
};

export default MuscleGroupList;
