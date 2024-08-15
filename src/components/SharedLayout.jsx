import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

export const SharedLayout = ({setModalName}) => {
  return (
    <>
      <Header setModalName={setModalName}/>
      <Outlet />
    </>
  );
};
