import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Footer from "./components/Footer/Footer";
import ProjectPosts from "./Pages/ProjectPosts";



function App() {
  return (
      <div className="App">
      <Router>
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Project />} />
              <Route path={"/project/:id"} element={<ProjectPosts />} />
          </Routes>
          <Footer />
      </Router>
      </div>
  );
}

export default App;
