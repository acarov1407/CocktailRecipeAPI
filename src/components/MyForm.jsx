import { useState } from "react";
import { Button, Form, Row, Col } from 'react-bootstrap';
import useCategory from "../hooks/useCategory";
import useCocktail from "../hooks/useCocktail";
import { validateForm } from "../helpers/validateForm";
import Error from "./Error";
import { FORM_ERROR } from "../helpers/errorMsg";

function MyForm() {

    const { categories } = useCategory();
    const {getCocktailsFromAPI, errorMsg} = useCocktail();
    const [isValidForm, setIsValidForm] = useState(true);

    const [inputData, setInputData] = useState({
        cocktailName: '',
        category: 'Any'
    })

    const handleInputData = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm(inputData)) {
            setIsValidForm(false);
            return;
        }

        setIsValidForm(true);
        getCocktailsFromAPI(inputData);
        

    }

    const { cocktailName, category } = inputData;
    return (
        <Form className="my-4 mx-auto w-75" onSubmit={(e) => handleSubmit(e)}>
            {
                !isValidForm ? 
                <Row>
                    <Error msg={FORM_ERROR}/>
                </Row>
                :
                errorMsg !== '' &&
                <Row>
                    <Error msg={errorMsg}/>
                </Row>
            }
            <Row>
                <Form.Group>
                    <Form.Label className="mb-2 text-light h5" htmlFor="name">Choose a drink <span className="h6">(leave blank for any)</span></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Tequila, Vodka, etc"
                        name="cocktailName"
                        id="cocktailName"
                        value={cocktailName}
                        onChange={handleInputData}
                    />
                </Form.Group>
                <Form.Group className="my-4">
                    <Form.Label className="text-light h5 mb-2" htmlFor="category">Choose a category</Form.Label>
                    <Form.Select value={category} onChange={handleInputData} id="category" name="category">
                        {
                            categories.map(_category => (
                                <option
                                    value={_category.strCategory}
                                    key={_category.strCategory}
                                >{_category.strCategory}</option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>


            </Row>
            <Row className="justify-content-end">
                <Col md={3}>
                    <Button
                        variant="danger"
                        className="text-capitalize w-100"
                        type="submit">
                        Search Cocktail
                    </Button>
                </Col>
                
            </Row>

        </Form>
    )
}

export default MyForm