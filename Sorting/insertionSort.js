// Each iteration it keep one element and insert at proper order.
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++){
        let curr = arr[i];
        let prev = i - 1;
        while (prev >= 0 && arr[prev] >= curr) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = curr;
    }
}
insertionSort([5, 2, 9, 1, 5, 6]);
