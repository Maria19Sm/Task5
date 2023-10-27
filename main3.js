const { faker } = require('@faker-js/faker'); 
let randomname = Array.from(Array(10)) 
randomname = randomname.map((i) => faker.person.firstName()) 

console.table(randomname);

for (let i = 0, replacenum; i < randomname.length - 1; i++) {
  for (let j = 0; j < randomname.length - 1; j++) { 
    if (randomname[j] > randomname[j + 1]) {
      replacenum = randomname[j];
      randomname[j] = randomname[j + 1];
      randomname[j + 1] = replacenum;
    }
  }
}

console.table(randomname);
