export const useUserPostActivity = (source, userId) => {
  let userPotentialActivity = source.filter(
    activity => activity.user.id === userId
  ).length;
  return userPotentialActivity > 0 ? true : false;
};
