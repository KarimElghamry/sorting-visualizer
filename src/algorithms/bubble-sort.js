function bubbleSort(arr) {
    
    let len = arr.length;

    for(let i = 0; i <len-1; i++){
        for(let j = 0; j < len-1-i; j++){

            if (arr[j+1]< arr[j]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j]= temp;
            }
        }
    }
    return arr;
}


