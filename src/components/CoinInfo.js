import axios from "axios";
import { useEffect, useState } from "react";
import {HistoricalChart} from "../config/api";
import {Line} from "react-chartjs-2";
import {
    CircularProgress,
    createTheme,
    makesStyles,
    ThemeProvider,
} from "@mui/material";
import SelectButton from "./SelectButton";
import {chartDays} from "../config/data";
import {CryptoState} from "../context/CryptoContext";

const CoinInfo = ({coin}) => {
  const [historicData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);
  const {currency} = CryptoState();
  const [flag, setFlag] = useState(false);

  const useStyles = makesStyles((theme) => ({
    container: {
        width: "75%",
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent: "center",
        marginTop: 25,
        padding:40,
        [theme.breakpoints.down("md")]: {
            width:"100%",
            marginTop:0,
            padding:20,
            paddingTop:0,
        },
    },
  }));

  const clases = useStyles();

  
}