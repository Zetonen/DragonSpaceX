import { GlobalStyles } from "./components/GlobalStyles";
import { Header } from "./components/Header/Header";
import { Hero } from "./pages/Home/components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <GlobalStyles />
    </>
  );
}

export default App;
