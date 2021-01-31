import asyncSetTimeout from '../helpers/asyncSetTimeout';

const bubbleSort = async ({
  array,
  setArray,
  setColorsArray,
  visualizationSpeed,
} = {}) => {
  let len = array.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      let newColorsArray = new Array(len).fill(0);
      newColorsArray[len - 1 - i] = 3;
      newColorsArray[j] = 1;
      newColorsArray[j + 1] = 2;
      setColorsArray(newColorsArray);
      await asyncSetTimeout({timeout: visualizationSpeed});

      if (array[j + 1] < array[j]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;

        array = array.concat();
        setArray(array);
      }
    }
  }
};

export default bubbleSort;
