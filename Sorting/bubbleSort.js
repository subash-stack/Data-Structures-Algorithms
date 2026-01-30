// Compare with adjacent element and swap them if they are in wrong order
// Every iteration it find the max element and bubble up to the end of the array.


function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        for (let j = 0; j < (n - 1 - i); j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
    return arr;
}

bubbleSort([5, 2, 9, 1, 5, 6]);
