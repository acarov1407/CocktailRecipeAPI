import { Button, Image } from "react-bootstrap"
import useCocktail from "../hooks/useCocktail"

function TriggerFavorites() {

    const {handleModalFavoritesClick} = useCocktail();
    return (
        <div className="favorites__trigger">
            <Button 
            variant="danger"
            onClick={() => handleModalFavoritesClick()}
            >
                <Image src="src/img/favorites_icon.svg" alt="favorite icon"/>
            </Button>
        </div>
    )
}

export default TriggerFavorites