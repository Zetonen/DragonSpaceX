import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyles";
import { SharedLayout } from "./components/SharedLayout";
import { Page404 } from "./pages/Page404";
import { Home } from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";
import { RocketDetails } from "./pages/RocketDetails/RocketDetails";
import { ModalSelector } from "./components/modals/ModalSelector";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRockets } from "./redux/rocket/operations";
import { selectIsLoadingRockets } from "./redux/rocket/selectors";
import { Loader } from "./components/Loader/Loader";
import {
  selectIsLoadingUsers,
  selectIsRefreshing,
} from "./redux/user/selectors";
import { FavoritesRockets } from "./pages/FavoritesRockets/FavoritesRockets";
import { PrivateRoute } from "./components/PrivateRoute";
import { refreshUser } from "./redux/user/operations";

function App() {
  const [modalName, setModalName] = useState("");
  const isLoadingRockets = useSelector(selectIsLoadingRockets);
  const isLoadingUsers = useSelector(selectIsLoadingUsers);
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout setModalName={setModalName} />}>
          <Route index element={<Home />} />
          <Route path="rockets/:id" element={<RocketDetails />} />
          <Route
            path="favorites"
            element={<PrivateRoute component={<FavoritesRockets />} to="/" />}
          />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
      <Toaster />
      <ModalSelector
        modalName={modalName}
        closeModal={() => setModalName("")}
      />
      {(isLoadingRockets || isLoadingUsers || isRefreshing) && <Loader />}
      <GlobalStyles />
    </>
  );
}

export default App;
