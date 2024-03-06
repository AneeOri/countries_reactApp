import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./screens/HomeScreen";
import Countries from "./screens/Countries";
import NotFound from "./components/NotFound";
import CountryPage from "./screens/CountryPage";

export default function App(){
  return(
    //navigation
    <BrowserRouter>
      <>
       <Nav/>
       <Routes>
          <Route index path="/" element={<Home/>}></Route>
          <Route path="/countries" element={<Countries/>}></Route>
          <Route path="/countries/:countryId" element={<CountryPage/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
       </Routes>
      </>
    </BrowserRouter>
  );
}
