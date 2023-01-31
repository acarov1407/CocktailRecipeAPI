import { CategoryProvider } from "./context/CategoryProvider"
import { CocktailProvider } from "./context/CocktailProvider"
import AppCocktail from "./components/AppCocktail"


function App() {

  return (

    <CategoryProvider>
      <CocktailProvider>
        <AppCocktail />
      </CocktailProvider>
    </CategoryProvider>

  )
}

export default App
