// Repeatedly find min element in an unsorted place and place it on proper order.
// Every iteration min moved to left side from 0 index..


function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        let min = i;
        for (let j = i+1 ; j < n; j++){
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

selectionSort([5, 2, 9, 1, 5, 6]);

