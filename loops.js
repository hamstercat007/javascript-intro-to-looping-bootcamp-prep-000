function forLoop(arr){
  for (let i = 0; i < 25; i++) {
    if (i === 1)  {
      arr.push(`"I am ${i} strange loop"`)
    }
    else {
      arr.push(`"I am ${i} strange loops"`)
    }
  }
  return arr
}

function whileLoop(i) {
  while(i >=0 ) {
    console.log(i--)
  } 
console.log('done')
}

