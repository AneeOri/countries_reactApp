import {BASE_URL} from "./config";

export const getAllCountries = () => {
    return fetch(`${BASE_URL}/all`).then((response) => response.json());
};

export const searchByCountryName = (name) => {
    returnfetch(`${BASE_URL}/name/${name}`).then((response) => response.json());
};