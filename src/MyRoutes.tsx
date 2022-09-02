import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details/index"
import Home from "./pages/home";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
