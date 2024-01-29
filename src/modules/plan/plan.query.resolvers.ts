import { PlanModel } from './plan.models';
import { IPlan, PlansArgs } from './plan.types';

const plans = async (
  parent: any,
  args: PlansArgs,
): Promise<{
  items: IPlan[];
  count: number;
}> => {

  const { ...params } = args.where;

  const plans = await PlanModel.find(params);
  const count = await PlanModel.countDocuments();
  return {
    items: plans,
    count,
  };
};
export const planQueryResolvers = {
  plans,
};
