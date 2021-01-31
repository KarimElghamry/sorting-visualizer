import asyncSetTimeout from '../helpers/asyncSetTimeout';

let arr = [];

const mergeSort = async (
  l,
  r,
  setArray,
  setColorsArray,
  visualizationSpeed
) => {
  if (l >= r) return;

  let mid = Math.floor((l + r) / 2);
  await mergeSort(l, mid, setArray, setColorsArray, visualizationSpeed);
  await mergeSort(mid + 1, r, setArray, setColorsArray, visualizationSpeed);

  let i = l;
  let j = mid + 1;
  let newColorsArray = new Array(arr.length).fill(0);
  newColorsArray[i] = 2;
  newColorsArray[j] = 2;
  setColorsArray(newColorsArray);
  await asyncSetTimeout({timeout: visualizationSpeed});

  while (i <= mid && j <= r) {
    if (arr[i] > arr[j]) {
      let index = j;

      while (index !== i) {
        let temp = arr[index];
        arr[index] = arr[index - 1];
        arr[index - 1] = temp;

        newColorsArray[j] = 2;
        newColorsArray[index - 1] = 1;
        newColorsArray[index] = 0;
        setColorsArray(newColorsArray.concat());
        setArray(arr.concat());
        await asyncSetTimeout({timeout: visualizationSpeed});

        index--;
      }

      newColorsArray[i] = 0;
      newColorsArray[j] = 0;
      i++;
      mid++;
      j++;
    } else {
      newColorsArray[i] = 0;
      i++;
    }

    newColorsArray[i] = 2;
    newColorsArray[j] = 2;
    setColorsArray(newColorsArray.concat());
    await asyncSetTimeout({timeout: visualizationSpeed});
  }
};

const inplaceMergeSortWrapper = async ({
  array,
  leftIndex,
  rightIndex,
  setArray,
  setColorsArray,
  visualizationSpeed,
}) => {
  arr = array.concat();

  await mergeSort(
    leftIndex,
    rightIndex,
    setArray,
    setColorsArray,
    visualizationSpeed
  );
};

export default inplaceMergeSortWrapper;
