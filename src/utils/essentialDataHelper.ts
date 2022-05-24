export const getPercentByDataComplete = <T extends {}>(object: T) => {
    const objectLength = Object.keys(object).length;
    const percent = 100 / objectLength;
    let valuesPresents = 0;
    Object.keys(object).forEach((item, i) => {
        if(object[item as keyof T]) {
            valuesPresents += percent;
        }
    })
    return parseInt(valuesPresents.toFixed(0));
}