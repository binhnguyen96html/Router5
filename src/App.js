import Login from "./components/Login";
import Employee from "./components/Employee";
import Detail from "./components/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return(
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />}></Route>
    <Route path='/employee' element={<Employee />} />
    <Route path="/employee/detail/:id" element={<Detail />} />
  </Routes>
  </BrowserRouter>
    
    </>
  ) 
}

export default App;
