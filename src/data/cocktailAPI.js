import { intersection } from "../helpers/sets";

export async function getCocktailCategories(){
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const result = await fetch(url);
    const data = await result.json();
    data.drinks.push({
       strCategory: 'Any'
    });

    return data.drinks;
}

export async function getCocktails(inputData){
    const {cocktailName, category} = inputData;

    if(category.toLowerCase() === 'any' && cocktailName === ''){
        return await getCocktailsByName('Vodka');

    }

    if(category.toLowerCase() !== 'any' && cocktailName !== ''){
        //Interseccion
        const resultByCategory = await getCocktailsByCategory(category);
        const resultByName = await getCocktailsByName(cocktailName);

        let intersectionResult = intersection(resultByCategory, resultByName);
        return intersectionResult;
    }

    if(cocktailName === ''){
        return await getCocktailsByCategory(category);
    }else{
        return await getCocktailsByName(cocktailName)
    }
}

async function getCocktailsByCategory(category){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
    const result = await fetch(url);
    const data = await result.json();
    return data.drinks;
}

async function getCocktailsByName(cocktailName){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cocktailName}`;
    const result = await fetch(url);
    const data = await result.json();
    return data.drinks;
}

export async function getCocktailRecipe(cocktailId){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;
    const result = await fetch(url);
    const data = await result.json();
    return data.drinks[0];
}