import { LinearProgress, makeStyles, Typography } from "@mui/material";
import axios from "axios";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import CoinInfo from "../components/CoinInfo";
import { SingleCoin } from "../config/api";
import { numberWithCommas } from "../components/CoinsTable";
import { CryptoState } from "../context/CryptoContext";

const CoinPage = () => {
   const {id} = useParams();
   const [coin, setCoin] = useState();

   const {currency, symbol} = CryptoState();

   const fetchCoin = async () => {
    const {data} = await axios.get(SingleCoin(id));
    setCoin(data);
   };

   useEffect(() => {
    fetchCoin();
   },[]);

   


}