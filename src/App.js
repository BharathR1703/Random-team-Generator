import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/Homepage';
import Infopage from './Pages/Infopage';
import List from './Pages/List';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/">
         <Route index element={<HomePage/>}/>
         <Route path="info" element ={<Infopage/>}/>
         <Route path ="list" element ={<List/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
