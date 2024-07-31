import React from 'react';
import BottomNavigation from '~/components/BottomNavigation';

const ExercisesPage = () => {
  const exerciseCategories = ['Abs', 'Chest', 'Back', 'Arm'];
  return (
   
      <main className="flex-1 overflow-y-auto pt-10 mb-20 mx-4 bg-red-300">
        <div className="mt-10">test</div>
        {/* <div className="flex flex-col p-10">
          {exerciseCategories.map((category) => (
            <div
              key={category}
              className="flex justify-between"
            >
              <span className="">
                <span>Icon</span>
                <span>{category}</span>
              </span>
              <span className="">arrow</span>
            </div>
          ))}
        </div> */}
      </main>

      <BottomNavigation />
 
  );
};

export default ExercisesPage;
