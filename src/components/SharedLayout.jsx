import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { useEffect } from "react";
import { refreshUser } from "../redux/user/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsVerificatory,
} from "../redux/user/selectors";

export const SharedLayout = ({ setModalName }) => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLoggedIn);
  const isVerificatory = useSelector(selectIsVerificatory);

  useEffect(() => {
    if (isLogged || isVerificatory) {
      return;
    }
    dispatch(refreshUser());
  }, [dispatch, isLogged, isVerificatory]);
  return (
    <>
      <Header setModalName={setModalName} />
      <Outlet />
    </>
  );
};
