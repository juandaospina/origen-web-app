import { HomeAllies, HomeHero, HomeSteps } from '../../components/HomeSections';
import { useAuth } from '../../context/authContext';

export const Home = () => {

    const contexto = useAuth();
    console.log(contexto);

    return(
        <>
            <HomeHero /> 
            <HomeSteps />
            <HomeAllies />
        </>
    );
}