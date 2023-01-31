import { Col, Card, Button } from "react-bootstrap";
import useCocktail from "../hooks/useCocktail";

function Cocktail({ cocktail }) {

    const { strDrinkThumb, strDrink, idDrink } = cocktail;
    const {handleModalClick, getCocktailRecipeFromAPI} = useCocktail();

    return (
        <Col md={6} lg={3}>
            <Card className="mb-4" bg={"dark"} border={"secondary"}>
                <Card.Img
                    variant="top"
                    src={strDrinkThumb}
                    alt={`${strDrink} Image`} />
                <Card.Body>
                    <Card.Title className="text-white">{strDrink}</Card.Title>
                    <Button 
                    className="w-100 mt-2 text-capitalize button" 
                    variant={"primary"}
                    onClick={
                        () => {
                            handleModalClick()
                            getCocktailRecipeFromAPI(idDrink)
                        }
                    }>
                        View Recipe
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Cocktail