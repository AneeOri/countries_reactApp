import { AppBar, Container,MenuItem, Select, Toolbar, Typography } from "@mui/material";
import {createTheme, makeStyles, ThemeProvider} from "@mui/styles";
import {useHistory} from "react-router-dom";
import { CryptoState } from "../context/CryptoContext";

const useStyles = makeStyles((theme) => ({
    title:{
        flex:1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
}));

const darkTheme = createTheme({
    palette:{
        primary:{
          main: "#fff",
        },
        type:"dark",
    },
});

function Header(){
    const clases = useStyles();
    const {currency, setCurrency} = CryptoState();

    const history = useHistory();

    return(
        <ThemeProvider theme={darkTheme}>
          <AppBar color="transparent" position="static">
             <Container>
                <Toolbar>
                    <Typography onClick={() => history.push(`/`)}
                       variant= "h6"
                       className={clases.title}
                    >
                         Crypto Hunter
                    </Typography>
                    <Select
                      variant="outlined"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={currency}
                      style={{windth:100, height:40, marginLeft:15}}
                      onChange={(e) => setCurrency(e.target.value)}
                    >
                       <MenuItem value={"USD"}>USD</MenuItem>
                       <MenuItem value={"MXN"}>MXN</MenuItem>
                    </Select>
                </Toolbar>
             </Container>
          </AppBar>
        </ThemeProvider>
    );
}

export default Header;