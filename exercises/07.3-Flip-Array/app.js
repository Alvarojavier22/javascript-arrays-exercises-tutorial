let arr = [45,67,87,23,5,32,60];

//Your code here.

let flippedArray = []
for (let i = arr.length -1; i >= 0; i--){
    let flipped = arr[i]
    flippedArray.push(flipped)
}
console.log(flippedArray)
