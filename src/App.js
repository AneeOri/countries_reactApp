import { makeStyles } from "@mui/styles";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";
import Header from "./components/Header";


const useStyles = makeStyles(() => ({
  App:{
    backgroundColor: "#14161a",
    color:"white",
    minHeight:"100vh",
  },
}));

export default function App(){

  const clases = useStyles();
  return(
    //navigation
    <BrowserRouter>
      <div className={clases.App}>
       <Header/>
     
      </div>
    </BrowserRouter>
  );
}
