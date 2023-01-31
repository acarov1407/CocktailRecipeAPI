import { Modal } from 'react-bootstrap';
import useCocktail from "../hooks/useCocktail";
import CocktailsList from "./CocktailsList";

function FavoritesModal() {
    const { modalFavorites, handleModalFavoritesClick, favorites} = useCocktail();
    return (
        <Modal
            show={modalFavorites}
            onHide={() => handleModalFavoritesClick()}
            fullscreen={true}
        >
            <Modal.Header className="bg-light" closeButton>
                <Modal.Title>Your Favorites Recipes!</Modal.Title>
            </Modal.Header>

            <Modal.Body className="bg-dark">
                <CocktailsList 
                cocktails={favorites}
                noResultMsg={favorites.length === 0 ? "You have not favorite recipes yet" : ""}
                />
            </Modal.Body>
        </Modal>
    )
}

export default FavoritesModal