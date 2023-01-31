import {Modal, Image, Button} from 'react-bootstrap';
import useCocktail from "../hooks/useCocktail";

function CocktailModal() {

    const {
        recipe, 
        loading,
        favorites,
        addToFavorites,
        deleteFromFavorites,
        modal,
        handleModalClick
    } = useCocktail();

    const isInFavorites = favorites.some(_recipe => _recipe.idDrink === recipe.idDrink);



    const {strDrinkThumb, strDrink, strInstructions} = recipe;

    const showIngredients = () => {
        let ingredients = []
        for(let i = 1; i < 16; i++){
            let ingredient = recipe[`strIngredient${i}`];
            let measure = recipe[`strMeasure${i}`]
            if(ingredient){
                ingredients.push(
                    <li key={i}>{ingredient} {measure}</li>
                );
            }
        }

        return ingredients;
    }

    

    const handleButtonClick = () => {
        if(isInFavorites){
            deleteFromFavorites(recipe.idDrink);
        } else {
            addToFavorites(recipe);
        }
    }

    

  return (
    !loading && 
    (
    <Modal 
    show={modal} 
    onHide={() => handleModalClick()}
    >
        <Image 
        src={strDrinkThumb} 
        alt={`${strDrink} Image`}
        />
        <Modal.Header className="bg-dark">
            <Modal.Title className="text-white">{strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
            <div className="p-3 text-white">
                <h4>Instructions</h4>
                <p className="text-light">{strInstructions}</p>
                <h4>Ingredients And Quantities</h4>
                <ul>
                {showIngredients()}
                </ul>
            </div>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
            <Button 
            className="w-75 mx-auto" 
            variant={isInFavorites ? 'danger' : 'primary'}
            onClick={() => {
                handleButtonClick()
            } }
            >
                {
                    isInFavorites 
                    ?
                    "Delete From favorites"
                    :
                    "Add To Favorites"
                }
            </Button>
        </Modal.Footer>
    </Modal>)
  )
}

export default CocktailModal