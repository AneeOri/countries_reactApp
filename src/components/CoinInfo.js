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
