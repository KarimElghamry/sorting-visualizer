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
  let it = 0;
  let tempArr = new Array(r - l + 1);
  let newColorsArray = new Array(arr.length).fill(0);

  while (i <= mid && j <= r) {
    newColorsArray = new Array(arr.length).fill(0);
    newColorsArray[i] = 2;
    newColorsArray[j] = 2;
    setColorsArray(newColorsArray.concat());
    await asyncSetTimeout({timeout: visualizationSpeed});

    if (arr[i] > arr[j]) {
      tempArr[it] = arr[j];
      j++;
    } else {
      tempArr[it] = arr[i];
      i++;
    }

    it++;
  }

  while (i <= mid) {
    newColorsArray = new Array(arr.length).fill(0);
    newColorsArray[i] = 2;
    newColorsArray[j] = 2;
    setColorsArray(newColorsArray.concat());
    await asyncSetTimeout({timeout: visualizationSpeed});

    tempArr[it] = arr[i];
    it++;
    i++;
  }

  while (j <= r) {
    newColorsArray = new Array(arr.length).fill(0);
    newColorsArray[i] = 2;
    newColorsArray[j] = 2;
    setColorsArray(newColorsArray.concat());
    await asyncSetTimeout({timeout: visualizationSpeed});

    tempArr[it] = arr[j];
    it++;
    j++;
  }

  it = 0;
  for (let k = l; k <= r; k++, it++) {
    arr[k] = tempArr[it];
    newColorsArray = new Array(arr.length).fill(0);
    newColorsArray[k] = 1;
    newColorsArray[i - 1] = 2;
    newColorsArray[j - 1] = 2;
    setArray(arr.concat());
    setColorsArray(newColorsArray.concat());
    await asyncSetTimeout({timeout: visualizationSpeed});
  }
};

const mergeSortWrapper = async ({
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

export default mergeSortWrapper;
