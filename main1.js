let randomarr = Array.from(Array(20)) 
randomarr = randomarr.map( 
    (i) => 
    Math.round(Math.random() * 100) 
) 

console.log(randomarr) 
 
let minnumber = randomarr[0] 
 
for (let i = 1; i < randomarr.length; i++) { 
 
    folownumber = randomarr[i] 
 
    if (folownumber < minnumber) { 
 
        minnumber = folownumber 
    } 
 
 
} 
 
console.log('Мінімальне число:' + " " + minnumber)