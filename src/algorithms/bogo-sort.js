function isSorted(arr) {
    let len = arr.length;

    for (let i=0; i< len; i++){
        if (arr[i] > arr[i+1]){
            return false;
        }
    }
  return true;  
}

function shuffle(arr) {
    let len = arr.length
    for (let i = len-1; i>= 0; i--){
        let index = Math.floor(math.random()*i)
        let temp = arr[i-1]
        arr[i-1] = arr[index]
        arr[index] = temp
    }
    
}

function bogoSort(arr){
    while(!isSorted(arr)){
        shuffle(arr)
    }
    return arr
}