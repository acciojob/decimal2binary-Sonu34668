// function decimalToBinary(decimal) {
// 	let binary = '';
// 	while(decimal > 0){
// 		binary = (decimal % 2) + binary;
// 		decimal = Math.floor(decimal / 2);
// 	}
// return binary;
	
// }

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const binary = decimalToBinary(decimal);
// 	console.log(binary);

const input = prompt('Please enter a decimal number:');
const decimal = parseInt(input);

if (isNaN(decimal)) {
  console.log('Invalid input. Please enter a valid decimal number.');
} else {
  const binary = decimalToBinary(decimal);
  console.log(`The binary equivalent of ${decimal} is ${binary}.`);
}