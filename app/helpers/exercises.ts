import { Exercises } from '~/types/exercises';

export const extractMuscleGroups = (exercises: Exercises): string[] => {
  const list: string[] = [];

  for (const muscleGroup in exercises) {
    list.push(muscleGroup);
  }

  return list.sort();
};
