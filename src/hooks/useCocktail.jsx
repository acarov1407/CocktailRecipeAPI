import { useContext } from "react"
import CocktailContext from "../context/CocktailProvider"

function useCocktail() {
  return useContext(CocktailContext);
}

export default useCocktail