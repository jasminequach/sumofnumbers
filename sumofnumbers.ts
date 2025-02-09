const myArr: number[] = [1, 2, 3, 4];

function sumFor(arr: number[]): number {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(sumFor(myArr));

function sumWhile(arr: number[]): number {
  let total = 0;
  let i = 0;
  while (i < arr.length) {
    total += arr[i];
    i++;
  }
  return total;
}

console.log(sumWhile(myArr));

function sumRecurse(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }
  return sumRecurse(arr, arr.length - 1) + arr[arr.length - 1];
}

console.log(sumRecurse(myArr, myArr.length));

function sumFunctional(arr: number[]): number {
  let total = 0;
  arr.forEach(element => {
    total += element;
  });
  return total;
}

console.log(sumFunctional(myArr));
