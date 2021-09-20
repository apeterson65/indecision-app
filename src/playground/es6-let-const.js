<div>
const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};
console.log(multiplier.multiply());


</div>;
// <p>{multiplier.multiply()}</p>;
const appRoot = document.getElementById("app");
ReactDOM.render(multiplier.multiply(), appRoot);
