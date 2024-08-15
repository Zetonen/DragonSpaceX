import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyles";
import { SharedLayout } from "./components/SharedLayout";
import { Page404 } from "./pages/Page404";
import { Home } from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";
import { RocketDetails } from "./pages/RocketDetails/RocketDetails";
import { ModalSelector } from "./components/modals/ModalSelector";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRockets } from "./redux/rocket/operations";

function App() {
  const [modalName, setModalName] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout setModalName={setModalName} />}>
          <Route index element={<Home />} />
          <Route path="rockets/:id" element={<RocketDetails />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
      <Toaster />
      <ModalSelector
        modalName={modalName}
        closeModal={() => setModalName("")}
      />
      <GlobalStyles />
    </>
  );
}

export default App;
