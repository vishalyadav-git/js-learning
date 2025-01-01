// for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    
}
for (let i = 1; i <= 10; i++) {
     console.log(`outter loop value ${i}`);
    
   for (let j = 1; j <= 10; j++) {
    const element = j;
     console.log(`inner loop value ${j} outter loop value ${i}`);
    
   }
}

//  table from 1 to 10

for (let i = 1; i <= 10; i++) {    
   for (let j = 1; j <= 10; j++) {
    const element = j;
    console.log(i + "*" + j + "=" + i*j);
    
   }
}