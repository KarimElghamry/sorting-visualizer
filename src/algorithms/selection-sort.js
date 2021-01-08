function selectionSort(arr) {

    var len = arr.length;

    for (var i=0; i<len; i++ ){
        var minIndex = i;

        for (var j = i+1; j < len; j++){
            if(arr[i] > arr[j]){
                minIndex=j;
            }
        }
        if (minIndex > i){
            var temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}