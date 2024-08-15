export const selectIsRockets = (state) => state.rockets.rockets;

export const selectIsLoadingRockets = (state) => state.rockets.isLoading;

export const selectIsRocket = (state, id) => {
  const rockets = state.rockets.rockets;
  return rockets.find((rocket) => rocket.id === id) || null;
};
