import { Row, Image, Col } from 'react-bootstrap';
import Cocktail from "./Cocktail";


function CocktailsList({cocktails, noResultMsg}) {
  return (

    noResultMsg !== '' ?
      (
        <>
        <Row className="mt-5">
          <p className="text-white h4 text-center mt-5">{noResultMsg}</p>
        </Row>
        <Row className="justify-content-center">
        <Col md={6}>
        <Image className="w-50 mx-auto d-block mt-5" src="src/img/no_results.svg" alt="no results image"/>
        </Col>      
      </Row>
        </>
        
      )
      :
      (
        <Row className="mt-5">
          {
            cocktails.map(cocktail => (
              <Cocktail
                key={cocktail.idDrink}
                cocktail={cocktail}
              />
            ))
          }
        </Row>
      )

  )
}

export default CocktailsList