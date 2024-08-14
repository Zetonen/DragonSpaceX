import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { usersReducer } from "./user/slice";
import { rocketsReducer } from "./rocket/slice";

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
};
const rocketPersistConfig = {
  key: "rocket",
  storage,
  whitelist: ["rockets"],
};

export const store = configureStore({
  reducer: {
    // user: persistReducer(userPersistConfig, usersReducer),
    rockets: persistReducer(rocketPersistConfig, rocketsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
