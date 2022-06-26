export const carNumberFormatter = (number: string) => {
    const mainNumber = number.slice(1,4);
    const lastNumbers = number.slice(6);
    const secondaryWords = number.slice(4); 
    return `${number.slice(0,1)} ${mainNumber} ${secondaryWords} ${lastNumbers}`
}