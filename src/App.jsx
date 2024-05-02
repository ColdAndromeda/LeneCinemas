import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Movies from "./pages/Movies.jsx";
import TvSeries from "./pages/TvSeries.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home/Home.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/TvSeries" element={<TvSeries />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
