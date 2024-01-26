import { TenantModel } from '../tenant/tenant.models';
import { CreatePlanArgs } from './plan.types';
import { PlanModel } from './plan.models';

const createPlan = async (parent: CreatePlanArgs, args: any) => {
  let plan;

  try {
    plan = await PlanModel.create(args.input);
  } catch (e) {
    throw new Error('Tenemos problemas para crear el tenant');
  }

  if (!plan) throw Error('Tenemos problemas para crear el tenant');

  return plan;
};
export const planMutationResolvers = {
  createPlan,
};
