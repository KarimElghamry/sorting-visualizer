import asyncSetTimeout from '../helpers/asyncSetTimeout';

const selectionSort = async ({
  array,
  setArray,
  setColorsArray,
  visualizationSpeed,
} = {}) => {
  array = array.concat();

  let len = array.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;

    for (let j = i + 1; j < len; j++) {
      const newColorsArray = new Array(len).fill(0);
      newColorsArray[i] = 3;
      newColorsArray[minIndex] = 1;
      newColorsArray[j] = 2;
      setColorsArray(newColorsArray);
      await asyncSetTimeout({timeout: visualizationSpeed});
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
    array = array.concat();
    setArray(array);
    console.log(i);
  }
};

export default selectionSort;
