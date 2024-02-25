import get_insights from './functions/get_insights';

export const functionFactory = {
  // Add your functions here
  get_insights,
} as const;

export type FunctionFactoryType = keyof typeof functionFactory;
