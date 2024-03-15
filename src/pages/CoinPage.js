import { LinearProgress, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
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

   const useStyles = makeStyles((theme) => ({
    container:{
        display:"flex",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignItems:"center",
        },
    },
    sidebar:{
        width:"30%",
        [theme.breakpoints.down("md")]:{
            width:"100%",
        },
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop:25,
        borderRight:"2px solid grey"
    },
    heading:{
        fontWeight: "bold",
        marginBottom:20,
        fontFamily:"Montserrat",
    },
    description:{
        width:"100%",
        fontFamily: "Montserrat",
        padding:25,
        paddingBottom:15,
        paddingTop:0,
        textAlign:"justify",
    },
    marketData:{
        alignSelf:"start",
        padding:25,
        paddingTop:10,
        width:"100%",
        [theme.breakpoints.down("md")]:{
            display:"flex",
            justifyContent:"space-around",
        },
        [theme.breakpoints.down("sm")]:{
            flexDirection: "column",
            alignItems:"center",
        },
        [theme.breakpoints.down("xs")]:{
            alignItems:"start",
        },
    },
   }));

const clases = useStyles();   

if(!coin) return <LinearProgress style={{backgroundColor: "gold"}}/>

return(
    <div className={clases.container}>
      <div className={clases.sidebar}>
        <img
           src={coin?.image.large}
           alt={coin?.name}
           height="200"
           style={{marginBottom:20}}
        />
        <Typography variant="h3" className={clases.heading}>
           {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className={clases.description}>
            {ReactHtmlParser(coin?.description.en.split(".")[0])}
        </Typography>
        <div className={clases.marketData}>
          <span style={{display:"flex"}}>
            <Typography
              variant="h5"
              className={clases.heading}
            >
               Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat"
              }}
            >
               {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>
          <span style={{display:"flex"}}>
          <Typography
              variant="h5"
              className={clases.heading}
            >
               Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat"
              }}
            >
                {symbol}{" "}
                {numberWithCommas(coin?.market_data_current_price[currency.toLowerCase()]
                )}
            </Typography>
          </span>
          <span style={{display:"flex"}}>
          <Typography
              variant="h5"
              className={clases.heading}
            >
               Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat"
              }}
            >
                {symbol}{" "}
                {numberWithCommas(coin?.market_data_current_cap[currency.toLowerCase()]
                .toString()
                .slice(0, -6)
                )}
            </Typography>
          </span>
        </div>
      </div>
      <CoinInfo coin={coin}/>
    </div>
);
};

export default CoinPage;