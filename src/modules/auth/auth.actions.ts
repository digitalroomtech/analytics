export const jwtSign = (user: any) => ({ userId: user.id, email: user.email, role: user.role });
