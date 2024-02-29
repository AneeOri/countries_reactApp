import {CircularProgress, responsiveFontSizes} from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import List from "../components/List";
import { ResponseActionTypes } from "../helper/action";
import {useNavigate} from "react-router-dom";
import { getAllCountries } from "../utils/countries";
import { countriesReducer, initialState } from "../helper/reducer";
import "./Countries.css";

export default function Countries(){

    const [state, dispatch] = useReducer(countriesReducer, initialState);
    //state is an object // dispatch === action is a function //initialState is an object

    const navigate = useNavigate();

    useEffect(() => {
        dispatch({type: ResponseActionTypes.started});  //replace all dispatch() instead of setFunctions

        getAllCountries().then((data) => {
            dispatch({type: ResponseActionTypes.success, payload:data});
        })
        .catch((err) => {
            dispatch({type: ResponseActionTypes.failure, payload:err});
        });
    },[]);

    if(state.isLoading){
        return <CircularProgress/> 
    }

    if(state.error){
        return <p className="error">{state.error}</p>
    }

    const handleCountryClick = (countryName) => {
        navigate(`/countries/${countryName}`);
    };
    return(
        <div>
          <h1 className="title">ALL COUNTRIES LIST</h1>
          <List onItemClick={handleCountryClick} items={state.countries}>
             <h2>Click your favorite country</h2>
          </List>
        </div>
    );
}
