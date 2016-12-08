var sum = 0;
for (i = 3; 1 < 1000; i++) {
   if ((i % 3 === 0) || (i % 5 === 0)) {
      sum += i;
   }
};
consolo.log(sum);