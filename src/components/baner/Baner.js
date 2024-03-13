import { Container, makeStyles, Typography } from "@mui/material";
import Carousel from "./Carousel";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  banner:{
    backgroungImage: "url(./banner2.jpg)",
  },
  bannerContent:{
    height:400,
    diaplay:"flex",
    flexDirection: "column",
    paddingTop:25,
    justifyContent: "space-around",
  },
  tagline:{
    display:"flex",
    height:"40%",
    flexDirection:"column",
    justifyContext:"center",
    textAlign:"center",
  },
  carousel:{
    height: "50%",
    display:"flex",
    alignItems:"center",
  },
}));

function Banner () {
    const clases = useStyles();

    return(
        <div className={clases.banner}>
            <Container className={clases.bannerContent}>
              <div className={clases.tagline}>
                <Typography
                   variante="h2"
                   style={{
                    fontWeight: "bold",
                    marginBottom:15,
                    fontFamily:"Monserrat"
                   }}
                >
                   Crypto Hunter
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{
                     color: "darkgray",
                     textTransform:"capitalize",
                     fontFamily:"Monserrat"
                  }}
                >
                   Get all the Info regarding the Crypto Currency
                </Typography>
              </div>
               <Carousel/>
            </Container>
        </div>
    );
}

export default Banner;