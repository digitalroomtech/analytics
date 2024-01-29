import { TenantModel } from '../tenant/tenant.models';
import { CreatePlanArgs, UpdatePlanArgs } from './plan.types';
import { PlanModel } from './plan.models';
import { ObjectId } from 'mongodb';

const createPlan = async (parent: CreatePlanArgs, args: any) => {
  let plan;

  try {
    plan = await PlanModel.create(args.input);
  } catch (e) {
    throw new Error('Tenemos problemas para crear el plan');
  }

  return plan;
};

const updatePlan = async (parent: UpdatePlanArgs, args: any) => {
  let plan;

  const { id, ...params } = args.input;

  try {
    plan = await PlanModel.findByIdAndUpdate(new ObjectId(id), params);
  } catch (e) {
    throw new Error('Tenemos problemas para actualizar el plan');
  }

  return plan;
};
export const planMutationResolvers = {
  createPlan,
  updatePlan,
};
