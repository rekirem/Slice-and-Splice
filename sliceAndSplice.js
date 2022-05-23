function sliceAndSplice(arr1, arr2, n) {
    let arr3 = arr2.slice(0); //This way there is no need to modify the second array (needed for the test)
    Object.freeze(arr2);
    for (let i = arr1.length - 1; i >=0; i--) {
        arr3.splice(n, 0, arr1[i]);
    }
    return arr3;
}
