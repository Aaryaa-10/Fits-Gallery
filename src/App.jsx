//import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home';
import Summer from './Summer';
import Winter from './Winter';
import Party from './Party';
import Beach from './Beach';
import Ethnic from './Ethnic';
import LikedLooks from "./LikedLooks";
import LikedLooksProvider  from "./LikedLooksContext";


function App() {
 

  return (
    <>
    
    
    <Router>
      <LikedLooksProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/summer" element={<Summer/>}/>
        <Route path="/winter" element={<Winter/>}/>
        <Route path="/party" element={<Party/>}/>
         <Route path="/beach" element={<Beach/>}/>
          <Route path="/ethnic" element={<Ethnic/>}/>
          <Route path='/likedLooks' element={<LikedLooks/>}></Route>
        
      </Routes>
      </LikedLooksProvider>
    </Router>
   </>
      
   
  )
}

export default App
