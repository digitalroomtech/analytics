import { PlanModel } from './plan.models';
import { IPlan } from './plan.types';

const plans = async (
  parent: any,
  args: any,
): Promise<{
  items: IPlan[];
  count: number;
}> => {
  const plans = await PlanModel.find();
  const count = await PlanModel.countDocuments();
  return {
    items: plans,
    count,
  };
};
export const planQueryResolvers = {
  plans,
};
