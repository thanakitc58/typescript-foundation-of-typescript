function sumEvenNumbers(numbers: number[]): number {
  //Start Coding Here
  let sum =0
  for (let item  of numbers){
    if(item%2 ===0){
      sum += item
    }
  }
  return sum
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([11, 13, 15])); // 0
