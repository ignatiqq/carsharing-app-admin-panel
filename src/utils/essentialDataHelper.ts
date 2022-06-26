export const getPercentByDataComplete = <T extends Record<string, any>>(object: T) => {
    let objectLength = Object.keys(object).length;
    if(object.hasOwnProperty("id") && !object.id) {
        objectLength -= 1
    }
    const percent = 100 / objectLength;
    let valuesPresents = 0;
    Object.keys(object).forEach((item, i) => {
        const value = object[item as keyof T];

        if(Array.isArray(value) && value.length > 0) {
            valuesPresents += percent
        } else if(typeof value === "object" && Object.keys(value).length > 0) {
            if(value.hasOwnProperty("path") && !value.path) {
                valuesPresents -= percent
            }
                valuesPresents += percent
        } else if(typeof value !== "object" && value) {
            valuesPresents += percent;
        }
    })
    return parseInt(valuesPresents.toFixed(0));
}
