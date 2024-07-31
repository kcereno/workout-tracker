export type Exercises = {
  [key: string]: Exercise;
};

type TargetMuscles = {
  primary: string[];
  secondary: string[];
};

type Exercise = {
  [key: string]: TargetMuscles;
};
