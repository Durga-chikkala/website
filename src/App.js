
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';


function App() {
 
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/teaching" element={<Teachingweb/>}/>
      <Route path="/teaching/python" element={<Python/>}/>
      <Route path="/teaching/java" element={<Python/>}/>
      <Route path="/teaching/python/form" element={<Pyform/>}/>
      <Route path="/teaching/resume" element={<Resumeform/>}/> */}
    </Routes>
  );
  
}

export default App;
