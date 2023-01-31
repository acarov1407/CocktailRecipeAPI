export function intersection(arrA, arrB) {
    const result = arrA.filter(itemA => arrB.some(itemB => itemA.idDrink === itemB.idDrink));
    return result;
}
