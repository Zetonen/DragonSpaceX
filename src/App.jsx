import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/GlobalStyles";
import { SharedLayout } from "./components/SharedLayout";
import { Page404 } from "./pages/Page404";
import { Home } from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />{" "}
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
      <Toaster />
      <GlobalStyles />
    </>
  );
}

export default App;
