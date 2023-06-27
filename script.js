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

function threeSum(arr, target) {
     let binaryNum = new Array(32);
 
   
    let i = 0;
    while (n > 0) {
 
      
        binaryNum[i] = n % 2;
        n = Math.floor(n / 2);
        i++;
    }
  binaryNum.reverse();
	return binaryNum;
    
}

module.exports = threeSum;