
export function validateForm(data){
    const validationRegex = new RegExp("([a-zA-Z]|\\s)+$");

    const isEmpty = Object.values(data).length === 0;
    const isValidData = Object.values(data).every(item => validationRegex.test(item)) 
    || data.cocktailName === '';

    return !isEmpty && isValidData;
}