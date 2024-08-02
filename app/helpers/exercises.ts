import { Exercises } from '~/types/exercises';
import { promises as fs } from 'fs';
import path from 'path';

export const extractMuscleGroups = (exercises: Exercises): string[] => {
  const list: string[] = [];

  for (const muscleGroup in exercises) {
    list.push(muscleGroup);
  }

  return list.sort();
};

export const fetchExerciseJsonData = async (): Promise<Exercises> => {
  const jsonDirectory = path.join(process.cwd(), 'app/json');
  const fileContents = await fs.readFile(
    path.join(jsonDirectory, 'exercises.json'),
    'utf-8'
  );
  return JSON.parse(fileContents);
};
