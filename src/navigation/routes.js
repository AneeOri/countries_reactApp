import Countries from "../screens/Countries";
import Home from "../screens/HomeScreen";

export const Routes = [
    {
        route: "/",
        component: Home,
        title: 'Home'
    },
    {
        route: "/countries",
        component: Countries,
        title: 'All Countries'
    },
];