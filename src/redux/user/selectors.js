export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export const selectUser = (state) => state.user.user;

export const selectIsRefreshing = (state) => state.user.isRefreshing;

export const selectIsLoadingUsers = (state) => state.user.isLoading;

export const selectFavoritesRockets = (state)=> state.user.user.favoriteRockets;
