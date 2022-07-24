import { HomeAllies } from "../../components/HomeSections/HomeAllies";
import { HomeHero } from "../../components/HomeSections/HomeHero";
import { HomeSteps } from "../../components/HomeSections/HomeSteps";

export const Home = () => {
    return(
        <>
            <HomeHero /> 
            <HomeSteps />
            <HomeAllies />
        </>
    );
}