import { Container } from "react-bootstrap"
import MyForm from "./MyForm"
import CocktailsList from "./CocktailsList";
import CocktailModal from "./CocktailModal";
import FavoritesModal from "./FavoritesModal";
import useCocktail from "../hooks/useCocktail";
import TriggerFavorites from "./TriggerFavorites";

function AppCocktail() {

    const { cocktails, noResultMsg } = useCocktail();
    return (
        <>
            <header className="py-5">
                <h1>Find Your Cocktail Recipe!</h1>
            </header>
            <Container>
                <MyForm />
                <CocktailsList 
                cocktails={cocktails}
                noResultMsg={noResultMsg}
                />
                <CocktailModal />
                <FavoritesModal />
                <TriggerFavorites />
                

            </Container>
        </>
    )
}

export default AppCocktail