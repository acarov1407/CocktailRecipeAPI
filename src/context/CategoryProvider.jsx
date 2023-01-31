import { createContext, useEffect, useState } from "react";
import { getCocktailCategories } from "../data/cocktailAPI";

const CategoryContext = createContext();

function CategoryProvider({ children }) {

  const [categories, setCategories] = useState([]);


  useEffect(() => {
    getCategories();
  }, [])


  const getCategories = async () => {
    try {
      const categ = await getCocktailCategories();
      setCategories(categ);
    } catch (error) {
      setCategories([]);
    }

  }

  return (
    <CategoryContext.Provider
      value={{
        categories
      }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export {
  CategoryProvider
}

export default CategoryContext;