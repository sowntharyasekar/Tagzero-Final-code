import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tagzero from "./Containers/Navigation/Tagzero";
import bootstrap from 'bootstrap'
function App() {
 return( <Router>
      <Routes>
        <Route path="/" element={<Tagzero />} />
        
      </Routes>
    </Router>
 )
}

export default App;
