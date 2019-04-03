function bubbleSort(arr) {
    let swapped = true;
    let n = arr.length - 1;
    while(swapped) {
        swapped = false;
        for(let i = 0; i < n; i++ ) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
        n--;
    }
    return arr;
}