import {createBrowserRouter} from "react-router-dom";
import ServicesSection from "../modules/services/service";
import FeaturesSection from "./feature";
import Home from "./Home";
import About from "../modules/about/about";

const router = createBrowserRouter([
{
    path: "/",
    element: <Home/>,
},
{
    path: "/herosection",
    
},
{
    path: "/features",
    element:<FeaturesSection/>
},
{
    path: "/Services",
    element:<ServicesSection/>
},
{
    path: "/about",
    element:<About/>
}
])

export default router;
