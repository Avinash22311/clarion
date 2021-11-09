//reduce
const eu = [1, 2, 3, 4];

const doubled = eu.reduce((total, amount) => {
  total.push(amount * 2);
  return total;
}, []);
console.log(doubled);

//map
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled);