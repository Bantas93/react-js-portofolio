import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import NonProgram from "./components/NonProgram";
import Program from "./components/Program";
import Education from "./components/Education";
import NonFormal from "./components/NonFormal";
import Formal from "./components/Formal";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Experience" element={<Experience />}>
            <Route
              path="/Experience/NonProgram"
              element={<NonProgram />}
            ></Route>
            <Route path="/Experience/Program" element={<Program />}></Route>
          </Route>
          <Route path="/Education" element={<Education />}>
            <Route path="/Education/NonFormal" element={<NonFormal />}></Route>
            <Route path="/Education/Formal" element={<Formal />}></Route>
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
