function partition(arr, leftIndex, rightIndex) {

    let midIndex = Math.floor((leftIndex + rightIndex)/2);
    let pivot = arr[midIndex]

    while (leftIndex <= rightIndex){

        while (arr[rightIndex] > pivot){
            rightIndex--;
        }

        while (arr[leftIndex] < pivot){
            leftIndex++;
        }

        if (leftIndex <= rightIndex){
            var temp = arr[leftIndex];
            arr[leftIndex]= arr[rightIndex];
            arr[rightIndex]= temp;
            leftIndex++;
            rightIndex--;
        }
    }
   return leftIndex; 
}

function quickSort(arr, leftIndex, rightIndex) {
    let len = arr.lenght;
    if(len>1){
        let index= partition(arr, leftIndex, rightIndex);
        if(leftIndex < index-1){
            quickSort(arr, leftIndex, index-1);
        }
        if(rightIndex > index){
            quickSort(arr, index, rightIndex);
        }
        return arr;
    }
    
}
