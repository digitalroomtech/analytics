const currentUser = async (parent: any, args: any, context: any) => {
  const id = context.userId || 0;

  if (!id) throw Error('Usuario sin autorización');

  const user = await context.prisma.users.findUnique({
    where: { id },
    include: { role: true },
  });

  if (!user) {
    throw new Error('No such user found');
  }

  return user;
};

export const userQueryResolvers = {
  currentUser,
};
