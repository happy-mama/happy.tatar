import { Route, Routes } from "react-router-dom";
import Header from "./widgets/header";
import Home from "./pages/Home";
import Instruments from "./pages/Instruments";
import NotFound from "./pages/404";
import PassGen from "./pages/Instruments/PassGen";
import FS from "./pages/Instruments/FS";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Instruments />} path="/i" />
        <Route element={<PassGen />} path="/i/passgen" />
        <Route element={<FS />} path="/i/fs" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  );
}

export default App;
