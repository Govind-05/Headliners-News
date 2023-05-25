import Navbar from "./Navbar";
import News from "./News";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/"  element={<News key="1" category="general"/>} />
        <Route exact path="/business"  element={<News key="2" category="business"/>} />
        <Route exact path="/entertainment"  element={<News key="3" category="entertainment"/>} />
        <Route exact path="/health"  element={<News key="4" category="health"/>} />
        <Route exact path="/science"  element={<News key="5" category="science"/>} />
        <Route exact path="/sports"  element={<News key="6" category="sports"/>} />
        <Route exact path="/technology"  element={<News key="7" category="technology"/>} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
