import {createBrowserRouter} from "react-router-dom";
import ServicesSection from "./services/service";
import FeaturesSection from "./feature";
import Home from "./Home";

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
    path: "/ServicesSection",
    element:<ServicesSection/>
}
])

export default router;
