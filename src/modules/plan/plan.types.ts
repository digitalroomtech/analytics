import fs from 'fs';
import path from 'path';

export const planTypeDefs = fs.readFileSync(path.join(__dirname, 'plan.queries.graphql'), 'utf8');

export interface IPlan {
  id?: string;
  title?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type CreatePlanArgs = {
  input: {
    title?: string;
    description?: string;
  };
};
