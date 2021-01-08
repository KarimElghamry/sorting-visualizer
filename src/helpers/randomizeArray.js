const generateRandomizedArray = ({arraySize} = {}) =>{
    let randomizedArray = [];

    for(let i = 0; i < arraySize;i++){
        randomizedArray.push(Math.floor(Math.random() * (300 - 10) + 10));
    }
    return randomizedArray;
}

export default generateRandomizedArray;