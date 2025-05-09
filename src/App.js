import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import AboutMe from './Components/About_me';
import MyProjects from './Components/My_Projects';
import Contact from './Components/Contact';
import Instructables from './Components/Instructables';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/about_me" element={<div>
        <Header/>
        <AboutMe/>
      </div>
        }/>
      <Route index  element={<Header/>}/>
      <Route path="/contact" element={<div>
        <Header/>
        <Contact/>
      </div>
        }/>
        <Route path="/my_projects" element={<div>
        <Header/>
        <MyProjects/>
      </div>
        }/>
        <Route path="/instructables" element={<div>
        <Header/>
        <Instructables/>
      </div>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
