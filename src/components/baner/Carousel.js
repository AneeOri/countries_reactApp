import { makeStyles } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import {TrendingCoins} from "../../config/api";
import { CryptoState } from "../../context/CryptoContext";
