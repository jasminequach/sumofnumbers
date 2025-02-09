var myArr = [1, 2, 3, 4];
function sumFor(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
console.log(sumFor(myArr));
function sumWhile(arr) {
    var total = 0;
    var i = 0;
    while (i < arr.length) {
        total += arr[i];
        i++;
    }
    return total;
}
console.log(sumWhile(myArr));
function sumRecurse(arr) {
    if (arr.length === 0) {
    return 0;
    }
    return sumRecurse(arr.slice(0, arr.length - 1)) + arr[arr.length - 1];
}
console.log(sumRecurse(myArr, myArr.length));
function sumFunctional(arr) {
    var total = 0;
    arr.forEach(function (element) {
        total += element;
    });
    return total;
}
console.log(sumFunctional(myArr));
