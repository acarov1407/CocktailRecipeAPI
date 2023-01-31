import { createContext, useEffect, useState } from "react"
import { getCocktails, getCocktailRecipe } from "../data/cocktailAPI";
import { API_ERROR, NOT_FOUND_ERROR } from "../helpers/errorMsg";


const CocktailContext = createContext();

function CocktailProvider({ children }) {

    const [cocktails, setCocktails] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(false);
    const [noResultMsg, setNoResultMsg] = useState('');
    const [favorites, setFavorites] = useState([]);

    const [modal, setModal] = useState(false);
    const [modalFavorites, setModalFavorites] = useState(false);

    useEffect(() => {
        getFavorites();
    }, [])

    useEffect(() => {
        saveFavorites();
    }, [favorites]);

    const getCocktailsFromAPI = async (inputData) => {

        try {
            const cocktailsResult = await getCocktails(inputData);
            setCocktails(cocktailsResult);
            setNoResultMsg(cocktailsResult.length === 0 ? NOT_FOUND_ERROR : '');
        } catch (error) {
            const errorFormated = error.toString().toLowerCase();
            if (errorFormated.includes('syntaxerror')) {
                setNoResultMsg(NOT_FOUND_ERROR);
                return;
            }

            setErrorMsg(API_ERROR);

        }
    }

    const getCocktailRecipeFromAPI = async (cocktailId) => {
        setLoading(true);
        try {
            const recipeData = await getCocktailRecipe(cocktailId);
            setRecipe(recipeData);
        } catch (error) {
            setErrorMsg(API_ERROR);
        } finally {
            setLoading(false);
        }

    }


    const addToFavorites = (recipe) => {
        setFavorites([...favorites, recipe]);
    }

    const deleteFromFavorites = (idDrink) => {
        const updatedFavorites = favorites.filter(_recipe => _recipe.idDrink !== idDrink);
        setFavorites(updatedFavorites);
    }

    const saveFavorites = () => {
        if (favorites.length !== 0) {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }

    }

    const getFavorites = () => {
        const favoriteStorage = JSON.parse(localStorage.getItem('favorites'));
        setFavorites(favoriteStorage);
    }

    const handleModalClick = () => {
        setModal(!modal);
    }

    const handleModalFavoritesClick = () => {
        setModalFavorites(!modalFavorites);
    }

    return (
        <CocktailContext.Provider
            value={{
                getCocktailsFromAPI,
                cocktails,
                errorMsg,
                getCocktailRecipeFromAPI,
                recipe,
                loading,
                noResultMsg,
                favorites,
                addToFavorites,
                deleteFromFavorites,
                modal,
                handleModalClick,
                modalFavorites,
                handleModalFavoritesClick
            }}
        >
            {children}
        </CocktailContext.Provider>
    )
}

export {
    CocktailProvider
}
export default CocktailContext