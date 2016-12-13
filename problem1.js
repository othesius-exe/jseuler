var sum = 0;

for (i = 0; i <= 999; i ++) {
  if (i % 5 && i % 3 === 0) {
    sum += i;
  }
  else if (i % 5 === 0){
    sum += i;
  }
  else if (i % 3 === 0) {
    sum += i;
  }
}

console.log(sum)
